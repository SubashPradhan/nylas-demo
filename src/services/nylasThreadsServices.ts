export const getMailboxThreads = async () => {
  const response = await fetch("/api/nylas/threads");
  try {
    if (response.ok) {
      const data = response.json();
      console.log("data in services", data)
      return data;
    } else {
      console.error("Failed to connect mailbox", response.text());
    }
  } catch (error) {
    console.error("An error occurred while connecting mailbox", error);
  }
};
