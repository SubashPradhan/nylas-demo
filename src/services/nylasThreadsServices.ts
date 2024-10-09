export const getMailboxThreads = async (cursor?: string, folder_id?: string) => {
  const params = new URLSearchParams();
  if (cursor) {
    params.append('next_cursor', cursor);
  }
  if (folder_id) {
    params.append('folder', folder_id);
  }
  const threads_url = `/api/nylas/threads?${params.toString()}`; 

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
