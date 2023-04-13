import React, { useState } from 'react';
import axios from 'axios';

const SendMessageForm = () => {
  const [message, setMessage] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [context, setContext] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3200/api/send-message', { message, recipientNumber, context });
      console.log('Message envoyé et réponse reçue:', response.data);

      // Ici, vous pouvez gérer la réponse de ChatGPT (par exemple, l'afficher dans l'interface utilisateur)
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  };

  return (
    <form onSubmit={sendMessage} className="space-y-4">
      <input
        type="text"
        placeholder="Numéro du destinataire"
        value={recipientNumber}
        onChange={(e) => setRecipientNumber(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded"
      />
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded h-24"
      ></textarea>
      <textarea
        placeholder="Contexte de l'entreprise"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        className="w-full p-2 border border-blue-300 rounded h-24"
      ></textarea>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded">
        Envoyer
      </button>
    </form>
  );
};

export default SendMessageForm;
