import React from 'react';
import EmailItem from './EmailItem';
import { EmailThread } from '@/types/email';

interface EmailListProps {
  emails: EmailThread[];
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} />
      ))}
    </div>
  );
};

export default EmailList;
