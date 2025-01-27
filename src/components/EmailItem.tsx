import { EmailThread } from "@/types/email";
import { convertToReadableDate } from "@/utils/handleDateConvert";
import React from "react";

interface EmailItemProps {
  email: EmailThread;
}

const EmailItem: React.FC<EmailItemProps> = ({ email }) => {
  const { from, subject, snippet, unread, date } =
    email.latest_draft_or_message;

  return (
    <div
      className={`container w border-b border-gray-300 px-6 py-1 cursor-pointer shadow-md ${
        unread ? "bg-gray-200" : "bg-white"
      } hover:bg-gray-100 transition-colors`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-2/4 text-left">
          {from && from.length > 0 ? (
            <h4 className="font-semibold text-gray-800">
              {from[0].name} ({from[0].email})
            </h4>
          ) : (
            <h4 className="font-semibold text-gray-800">Unknown Sender</h4>
          )}
        </div>

        <div className="w-full truncate text-left">
          <p className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="font-semibold">
              {subject ? subject : "No Subject"}
            </span>
            - {snippet}
          </p>
        </div>

        <div className="whitespace-nowrap ">
          <p>{convertToReadableDate(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailItem;
