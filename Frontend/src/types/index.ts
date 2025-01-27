export type ConnectionMode = 'client' | 'server';

export interface User {
  userId: string;
  username: string;
  storeFilePath: string;
  isOnline: boolean;
  ipAddress: string;
}

export interface Message {
  senderId: string;
  senderUsername: string;
  content: string;
  timestamp: string;
}

export interface ConnectionConfig {
  mode: ConnectionMode;
  username: string;
  storeFilePath: string;
  ipAddress: string;
}
