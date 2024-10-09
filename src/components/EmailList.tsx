import React from 'react';
import EmailItem from './EmailItem';
import { EmailThread } from '@/types/email';

interface EmailListProps {
  emails: EmailThread[];
  nextCursor: string | null;
  threadPages: EmailThread[][];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  loading: boolean;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  nextCursor,
  threadPages,
  handleNextPage,
  handlePreviousPage,
  loading
}) => {
  return (
    <div className="bg-white px-4">
      {emails.map((email) => (
        <EmailItem key={email.id} email={email} />
      ))}

      <div className="flex justify-center space-x-12 py-4">
        {threadPages.length > 0 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 text-lg"
            onClick={handlePreviousPage}
            disabled={threadPages.length === 0}
          >
            Previous
          </button>
        )}
        {nextCursor && (
          <button
            className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 text-lg"
            onClick={handleNextPage}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Next'}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailList;
