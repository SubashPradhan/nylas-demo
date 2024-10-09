import EmailList from "@/components/EmailList";
import LoginRequired from "@/components/LoginRequired";
import FolderNavBar from "@/components/FolderNavBar"; // Import FolderNavBar
import { useAuth } from "@/context/authContext";
import { getMailboxThreads } from "@/services/nylasThreadsServices";
import { useEffect, useState } from "react";
import { EmailThread } from "@/types/email";
import { Folder } from "@/types/folder";
import { getMailboxFolder } from "@/services/nylasFoldersServices";

const EmailPage: React.FC = () => {
  const { user } = useAuth();
  const [threads, setThreads] = useState<EmailThread[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [threadPages, setThreadPages] = useState<EmailThread[][]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThreads = async (cursor?: string) => {
    setLoading(true);
    const result = await getMailboxThreads(cursor);
    if (result && result.data) {
      if (cursor) {
        setThreadPages((prev) => [...prev, threads]);
      }
      setThreads(result.data);
      setNextCursor(result.next_cursor);
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
    if (user) {
      fetchThreads();
      fetchFolders();
    }
  }, [user]);

  const handleNextPage = () => {
    if (nextCursor) {
      fetchThreads(nextCursor);
    }
  };

  const handlePreviousPage = () => {
    if (threadPages.length > 0) {
      const previousPage = threadPages.pop();
      if (previousPage) {
        setThreads(previousPage);
      }
      setThreadPages([...threadPages]);
    }
  };

  return (
    <>
      {!user ? (
        <LoginRequired />
      ) : (
        <div className="flex h-screen">
          <FolderNavBar folders={folders} />
          <div className="flex flex-col">
            <EmailList
              emails={threads}
              nextCursor={nextCursor}
              threadPages={threadPages}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPage;