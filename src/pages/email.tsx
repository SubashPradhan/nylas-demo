import EmailList from "@/components/EmailList"
import { getMailboxThreads } from "@/services/nylasThreadsServices"
import { useEffect, useState } from "react"

const EmailPage: React.FC = () => {
  const [threads, setThreads] = useState<[]>([])

  useEffect(() => {
    const getThreads = async() => {
      const threads = await getMailboxThreads()
      console.log("On the main email page", threads)
      if (threads.length) {
        setThreads(threads)
      } else {
        console.error("Failed to fetch threads for grant")
      }
    }
    getThreads()
  }, [])
  return <EmailList emails={threads} />
}

export default EmailPage