import { sendEmail } from "@/services/nylasSendServices";
import React, { useState } from "react";

interface ComposeEmailProps {
  isVisible: boolean;
  onClose: () => void;
}

interface NotificationProps {
  message: string;
  type: string;
}

const ComposeEmail: React.FC<ComposeEmailProps> = ({ isVisible, onClose }) => {
  const [to, setTo] = useState<string[]>([]);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [notification, setNotification] = useState<NotificationProps | null>(
    null
  );
  const [toError, setToError] = useState<string | null>(null);

  const handleEmailKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setToError(null)
    if (e.key === "Enter" || e.key === "," || e.key === " " || e.key === "Tab") {
      e.preventDefault();
      if (emailInput.trim() && isValidEmail(emailInput.trim())) {
        setTo([...to, emailInput.trim()]);
        setEmailInput("");
      }
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const removeEmail = (index: number) => {
    setTo(to.filter((_, i) => i !== index));
  };

  const handleSend = async () => {
    if (to.length === 0) {
      setToError(
        "Please enter a valid email address and press Enter, Comma, Space, Tab to add the address"
      );
      return;
    }
    try {
      const formattedEmails = to.map((email) => ({ email: email }));
      const sendPayload = {
        to: formattedEmails,
        subject,
        body,
      };
      const response = await sendEmail(sendPayload);
      if (response?.status == 200) {
        setNotification({
          message: "Email Sent Successfully!",
          type: "success",
        });
        setTimeout(() => {
          setTo([]);
          setSubject("");
          setBody("");
          setToError(null)
          onClose();
        }, 2000);
      } else {
        setNotification({
          message: "Failed to send message, please check your payload",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Failed to send message", error)
      setNotification({
        message: "Failed to send message, please check your payload",
        type: "error",
      });
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div
      className={`fixed bottom-0 right-0 w-2/4 bg-white p-4 shadow-lg transform rounded border  ${
        isVisible ? "translate-y-0" : "translate-y-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Compose Email</h2>
        <button className="text-red-500 hover:text-red-700" onClick={onClose}>
          Close
        </button>
      </div>

      {notification && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-md text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">To:</label>
        <div className="flex flex-wrap items-center border border-gray-300 p-2 rounded">
          {to.map((email, index) => (
            <div
              key={index}
              className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 mr-2 mb-2 flex items-center"
            >
              <span>{email}</span>
              <button
                type="button"
                className="ml-2 text-blue-500 hover:text-blue-700"
                onClick={() => removeEmail(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyDown={handleEmailKeyPress}
            className="outline-none flex-grow"
            placeholder="Enter email and press Enter or Comma"
            required
          />
        </div>
        {toError && <p className="text-red-500 text-sm mt-2">{toError}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-44"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ComposeEmail;
