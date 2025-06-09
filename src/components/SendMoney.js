import React, { useState } from 'react';
import axios from 'axios';

const SendMoney = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSendMoney = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/send-money', {
        amount,
        recipient,
      });
      window.location.href = response.data.approval_url;
    } catch (error) {
      console.error('Error sending money:', error);
    }
  };

  return (
    <div className="feature-section">
      <h2>Send Money</h2>
      <p>Send money to anyone instantly using their phone number.</p>
      <div className="feature-form">
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <button onClick={handleSendMoney}>Send Money</button>
      </div>
    </div>
  );
};

export default SendMoney;
