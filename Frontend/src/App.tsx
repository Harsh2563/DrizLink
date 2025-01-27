import React, { useState } from 'react';
import { ConnectionForm } from './components/ConnectionForm';
import { Chat } from './components/Chat';
import { ConnectionConfig, Message, User } from './types';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleConnect = (config: ConnectionConfig) => {
    // TODO: Implement WebSocket connection
    console.log('Connecting with config:', config);
    
    // Mock user creation - this should come from the server
    const mockUser: User = {
      userId: Date.now().toString(),
      username: config.username,
      storeFilePath: config.storeFilePath,
      isOnline: true,
      ipAddress: config.ipAddress
    };
    
    setCurrentUser(mockUser);
    setIsConnected(true);
  };

  const handleSendMessage = (content: string) => {
    if (!currentUser) return;

    // TODO: Implement WebSocket message sending
    const newMessage: Message = {
      senderId: currentUser.userId,
      senderUsername: currentUser.username,
      content,
      timestamp: new Date().toISOString()
    };
    
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!isConnected ? (
        <ConnectionForm onConnect={handleConnect} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md h-[80vh]">
            <Chat 
              messages={messages} 
              onSendMessage={handleSendMessage}
              currentUserId={currentUser?.userId || ''}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
