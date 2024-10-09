import { EmailSendPayload } from "@/types/email";

export const sendEmail = async (sendPayload: EmailSendPayload) => {
  try {
    const response = await fetch("/api/nylas/send", {
      method: "POST",
      body: JSON.stringify(sendPayload),
    });
    if (response.ok) {
      return response;
    } else {
      console.error("An error occurred while sending email");
    }
  } catch (error) {
    console.error("Send message failed", error);
  }
};
