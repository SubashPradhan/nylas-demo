export const getMailboxFolder = async () => {
  const response = await fetch("/api/nylas/folders");
  try {
    if (response.ok) {
      const data = response.json();
      console.log("data in services folders", data)
      return data;
    } else {
      console.error("Failed to fetch folders", response.text());
    }
  } catch (error) {
    console.error("An error occurred while fetching folders", error);
  }
};
