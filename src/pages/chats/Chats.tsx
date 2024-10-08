import React, { useState } from 'react';
import {
  Send,
  User,
  MessageSquare,
  Clock,
  Phone,
  Mail
} from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const Chats: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      isUser: false,
      timestamp: "10:00 AM"
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newUserMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, newUserMessage]);
    setMessage('');

    // Simulate automated response
    setTimeout(() => {
      const autoResponse: ChatMessage = {
        id: chatMessages.length + 2,
        text: "Thank you for your message. An agent will respond shortly.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, autoResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Live Chat Support</h1>
        <p className="text-gray-600">
          Chat with our customer service team
        </p>
      </div>

      {/* Chat Container */}
      <div className="border rounded-lg shadow-sm">
        {/* Chat Header */}
        <div className="p-4 border-b bg-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black text-white p-2 rounded-full">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold">Customer Support</h2>
              <p className="text-sm text-gray-500">Typically replies in a few minutes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Phone className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Mail className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start gap-2 max-w-[80%] ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                <div className={`p-2 rounded-full ${msg.isUser ? 'bg-black text-white' : 'bg-gray-100'}`}>
                  {msg.isUser ? <User className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                </div>
                <div className={`flex flex-col ${msg.isUser ? 'items-end' : ''}`}>
                  <div className={`p-3 rounded-lg ${msg.isUser ? 'bg-black text-white' : 'bg-gray-100'}`}>
                    {msg.text}
                  </div>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="border-t p-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      {/* Additional Contact Options */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          You can also reach us through:
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Call Us</span>
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>Email Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;