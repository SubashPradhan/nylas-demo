import EmailList from "@/components/EmailList";
import LoginRequired from "@/components/LoginRequired";
import FolderNavBar from "@/components/FolderNavBar";
import { useAuth } from "@/context/authContext";
import { getMailboxThreads } from "@/services/nylasThreadsServices";
import { useEffect, useState } from "react";
import { EmailThread } from "@/types/email";
import { Folder } from "@/types/folder";
import { getMailboxFolder } from "@/services/nylasFoldersServices";
import EmailNavBar from "@/components/EmailTopBar";
import ComposeEmail from "@/components/EmailCompose";

const EmailPage: React.FC = () => {
  const { user } = useAuth();
  const [threads, setThreads] = useState<EmailThread[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [threadPages, setThreadPages] = useState<EmailThread[][]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [isComposeVisible, setIsComposeVisible] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<EmailThread | null>(null);
  const [filteredThreads, setFilteredThreads] = useState<EmailThread[] | null>(
    []
  );

  const fetchThreads = async (cursor?: string, folderId?: string) => {
    setLoading(true);
    const result = await getMailboxThreads(cursor, folderId);
    if (result && result.data) {
      if (cursor) {
        setThreadPages((prev) => [...prev, threads]);
      }
      setThreads(result.data);
      setNextCursor(result.next_cursor);
      setFilteredThreads(result.data);
    } else {
      console.error("Failed to fetch threads");
    }
    setLoading(false);
  };

  const fetchFolders = async () => {
    const response = await getMailboxFolder();
    console.log(response);
    const data = await response.data;
    if (data) {
      setFolders(data);
    } else {
      console.error("Failed to fetch folders");
    }
  };

  useEffect(() => {
    if (user?.grant_id) {
      fetchThreads();
      fetchFolders();
    }
  }, [user]);

  const handleNextPage = () => {
    if (nextCursor) {
      fetchThreads(nextCursor, currentFolder || undefined);
    }
  };

  const handlePreviousPage = () => {
    if (threadPages.length > 0) {
      const previousPage = threadPages.pop();
      if (previousPage) {
        setThreads(previousPage);
        setFilteredThreads(previousPage);
      }
      setThreadPages([...threadPages]);
    }
  };

  const handleFolderSelect = (folderId: string) => {
    setCurrentFolder(folderId);
    fetchThreads(undefined, folderId);
    setSelectedEmail(null);
  };

  const handleCompose = () => {
    setIsComposeVisible(true);
  };

  const handleCloseCompose = () => {
    setIsComposeVisible(false);
  };

  const handleEmailSelect = (email: EmailThread) => {
    setSelectedEmail(email);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const filtered = threads.filter((email) => {
      const subject =
        email.latest_draft_or_message.subject?.toLowerCase() || "";
      const fromName =
        email.latest_draft_or_message.from[0]?.name?.toLowerCase() || "";
      return subject.includes(query) || fromName.includes(query);
    });
    setFilteredThreads(filtered);
  };

  return (
    <>
      {!user ? (
        <LoginRequired />
      ) : (
        <div className="flex min-h-screen">
          <div className="w-auto h-full">
            <FolderNavBar
              folders={folders}
              onFolderSelect={handleFolderSelect}
            />
          </div>
          <div className="flex flex-col w-full">
            <EmailNavBar onCompose={handleCompose} onSearch={handleSearch}/>

            {selectedEmail ? (
              <div className="p-4 bg-white shadow-md">
                <h2 className="text-xl font-bold">
                  {selectedEmail.latest_draft_or_message.subject}
                </h2>
                <div
                  className="mt-4 text-gray-800"
                  dangerouslySetInnerHTML={{
                    __html: selectedEmail.latest_draft_or_message.body,
                  }}
                />
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  Back to Mailbox
                </button>
              </div>
            ) : (
              <EmailList
                emails={filteredThreads}
                nextCursor={nextCursor}
                threadPages={threadPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                loading={loading}
                onEmailSelect={handleEmailSelect}
              />
            )}
          </div>

          <ComposeEmail
            isVisible={isComposeVisible}
            onClose={handleCloseCompose}
          />
        </div>
      )}
    </>
  );
};

export default EmailPage;
