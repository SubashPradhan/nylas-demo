export interface EmailThread {
  id: string;
  snippet: string;
  subject: string;
  unread: boolean;
  starred: boolean;
  participants: Participant[];
  latest_draft_or_message: EmailMessage;
}

interface Participant {
  email: string;
  name?: string;
}

interface EmailMessage {
  from: Participant[];
  to: Participant[];
  subject: string;
  snippet: string;
  body: string;
  unread: boolean;
  date: number;
  id: string;
  folders: string[];
  attachments: Attachments[];
}

interface Attachments{
  content_type: string
  filename: string
  content_id: string
  content_disposition: string
}

export interface EmailResponse {
  data: EmailThread[];
  next_cursor?: string;
  request_id: string;
}
