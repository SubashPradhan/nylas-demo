import { EmailThread } from '@/types/email';
import React from 'react';

interface EmailItemProps {
  email: EmailThread;
}

const EmailItem: React.FC<EmailItemProps> = ({ email }) => {
  const { from, subject, snippet, unread } = email.latest_draft_or_message;

  return (
    <div className={`border-b p-4 ${unread ? 'bg-gray-200' : ''}`}>
      <div className="flex items-center space-x-4">
        <h3 className="font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
          {from[0].name} ({from[0].email})
        </h3>
        <p className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
          {subject}
        </p>
        <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          - {snippet}
        </p>
      </div>
    </div>
  );
};

export default EmailItem;
