import Link from "next/link";
import React from "react";

interface Folder {
  id: string;
  name: string;
  unread_count: number;
}

interface EmailFolderBarProps {
  folders: Folder[];
  onFolderSelect: (folderId: string) => void
}

const importantFolderNames = [
  "INBOX",
  "DRAFTS",
  "IMPORTANT",
  "SENT",
  "UNREAD",
  "STARRED",
];

const EmailFolderBar: React.FC<EmailFolderBarProps> = ({ folders, onFolderSelect }) => {
  const importantFolders = folders.filter((folder) =>
    importantFolderNames.includes(folder.name.toUpperCase())
  );
  const otherFolders = folders.filter(
    (folder) => !importantFolderNames.includes(folder.name.toUpperCase())
  );

  return (
    <div className="w-64 min-h-screen bg-gray-100 p-2">
      <ul className="space-y-4 cursor-pointer px-2">
        <li key="nylas" className="font-bold text-3xl text-blue-500 py-4 border-b mb-6">
        <Link href="/">Nylas Demo</Link>
        </li>
        
        {importantFolders.map((folder) => (
          <li
            key={folder.id}
            className="flex justify-between items-center rounded-md hover:bg-gray-200"
            onClick={() => onFolderSelect(folder.id)}
          >
            <span className="font-semibold text-gray-800 capitalize">
              {folder.name.toLowerCase()}
            </span>
            {folder.unread_count > 0 && (
              <span className="text-sm bg-blue-500 text-white rounded-full px-2 py-1">
                {folder.unread_count}
              </span>
            )}
          </li>
        ))}

        <hr className="my-4 border-gray-300" />

        {otherFolders.map((folder) => (
          <li
            key={folder.id}
            className="flex justify-between items-center rounded-md hover:bg-gray-200"
            onClick={() => onFolderSelect(folder.id)}
          >
            <span className="font-semibold text-gray-800 capitalize">
              {folder.name.toLowerCase()}
            </span>
            {folder.unread_count > 0 && (
              <span className="text-sm bg-blue-500 text-white rounded-full px-2 py-1">
                {folder.unread_count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailFolderBar;