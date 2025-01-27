import React, { useState } from 'react';
import { ConnectionConfig, ConnectionMode } from '../types';

interface ConnectionFormProps {
  onConnect: (config: ConnectionConfig) => void;
}

export const ConnectionForm: React.FC<ConnectionFormProps> = ({ onConnect }) => {
  const [mode, setMode] = useState<ConnectionMode>('client');
  const [username, setUsername] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [storeFilePath, setStoreFilePath] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConnect({ mode, username, ipAddress, storeFilePath });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Connect to P2P Network</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Connection Mode
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setMode('client')}
                className={`flex-1 py-2 px-4 rounded-md ${
                  mode === 'client'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Client
              </button>
              <button
                type="button"
                onClick={() => setMode('server')}
                className={`flex-1 py-2 px-4 rounded-md ${
                  mode === 'server'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                Server
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              IP Address
            </label>
            <input
              type="text"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter IP address"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Store File Path
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={storeFilePath}
                onChange={(e) => setStoreFilePath(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Select folder for storing files"
                required
                readOnly
              />
              <button
                type="button"
                onClick={() => {
                  console.log('Open folder selection dialog');
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Browse
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Connect
          </button>
        </form>
      </div>
    </div>
  );
};
