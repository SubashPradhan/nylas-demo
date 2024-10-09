export const connectMailbox = async (): Promise<void> => {
  try {
    const response = await fetch("/api/nylas/connect");
    if (response.ok) {
      const data = await response.json();
      const redirect_url = await data["data"]["redirect_url"];
      window.location.href = redirect_url;
    } else {
      console.error("Failed to connect mailbox", response.text());
    }
  } catch (error) {
    console.error("An error occurred while connecting mailbox", error);
  }
};
