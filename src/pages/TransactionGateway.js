import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TransactionGateway.css';

const TransactionGateway = () => {
  const [mode, setMode] = useState('send');
  const [formData, setFormData] = useState({
    name: '',
    upi: '',
    amount: '',
    description: '',
    pin: '',
    method: 'UPI',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, upi, amount, pin } = formData;

    if (!name || !upi || !amount || !pin) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => {
      const newTransaction = {
        ...formData,
        type: mode,
        time: new Date().toLocaleString(),
      };
      localStorage.setItem('transactions', JSON.stringify([newTransaction]));
      setLoading(false);
      navigate('/transactionshistory');
    }, 1500);
  };

  return (
    <div className="gateway-container">
      <h2 className="title">{mode === 'send' ? 'Send Money' : 'Request Money'}</h2>
      <div className="tabs">
        <button className={mode === 'send' ? 'tab active' : 'tab'} onClick={() => setMode('send')}>Send</button>
        <button className={mode === 'request' ? 'tab active' : 'tab'} onClick={() => setMode('request')}>Request</button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Recipient Name" value={formData.name} onChange={handleChange} />
        <input name="upi" type="text" placeholder="UPI ID / Email" value={formData.upi} onChange={handleChange} />
        <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
        <input name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} />
        <select name="method" value={formData.method} onChange={handleChange}>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
          <option value="Wallet">Wallet</option>
        </select>
        <input name="pin" type="password" placeholder="PIN" value={formData.pin} onChange={handleChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Processing...' : mode === 'send' ? 'Send' : 'Request'}</button>
      </form>
    </div>
  );
};

export default TransactionGateway;
