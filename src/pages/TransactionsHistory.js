import React, { useEffect, useState } from 'react';
import './TransactionsHistory.css';

const TransactionsHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(stored);
  }, []);

  return (
    <div className="history-container">
      <h2 className="title">Transaction History</h2>
      {transactions.length === 0 ? (
        <p className="empty">No transactions yet.</p>
      ) : (
        <table className="history-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>To/From</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.type}</td>
                <td>{tx.name}</td>
                <td>₹{tx.amount}</td>
                <td>{tx.method}</td>
                <td>{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsHistory;
