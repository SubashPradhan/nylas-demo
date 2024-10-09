import EmailList from "@/components/EmailList";
import LoginRequired from "@/components/LoginRequired";
import { useAuth } from "@/context/authContext";
import { getMailboxThreads } from "@/services/nylasThreadsServices";
import { useEffect, useState } from "react";

const EmailPage: React.FC = () => {
  const { user } = useAuth();
  const [threads, setThreads] = useState<[]>([]);

  useEffect(() => {
    const getThreads = async () => {
      if (user) {
        const threads = await getMailboxThreads();
        console.log("On the main email page", threads);
        if (threads.length) {
          setThreads(threads);
        } else {
          console.error("Failed to fetch threads for grant");
        }
      }
    };
    getThreads();
  }, [user]);
  return <>{!user ? <LoginRequired /> : <EmailList emails={threads} />}</>;
};

export default EmailPage;
