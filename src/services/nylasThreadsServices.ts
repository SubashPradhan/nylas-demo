export const getMailboxThreads = async (cursor?: string) => {
  const threads_url = cursor ? `/api/nylas/threads?next_cursor=${cursor}` : "/api/nylas/threads"
  const response = await fetch(threads_url);
  try {
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      console.error("Failed to get mailbox threads", response.text());
    }
  } catch (error) {
    console.error("An error occurred while fetching mailbox threads", error);
  }
};
