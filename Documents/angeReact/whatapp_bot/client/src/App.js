import React from 'react';
import SendMessageForm from './components/SendMessageForm';

const App = () => {
  return (
    <div className="min-h-screen bg-blue-200">
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold text-gray-500 mb-8">
          WhatsApp Chatbot avec ChatGPT
        </h1>
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
          <SendMessageForm />
        </div>
      </div>
    </div>
  );
};

export default App;
