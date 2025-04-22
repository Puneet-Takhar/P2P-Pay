import React from 'react';

const TransactionHistory = () => {
  const transactions = [
    { date: '2023-10-01', amount: '100.00', recipient: 'John Doe' },
    { date: '2023-09-25', amount: '50.00', recipient: 'Jane Smith' },
  ];

  return (
    <div className="feature-section">
      <h2>Transaction History</h2>
      <p>View all your past transactions in one place.</p>
      <div className="feature-content">
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <strong>Date:</strong> {transaction.date} <br />
              <strong>Amount:</strong> {transaction.amount} <br />
              <strong>Recipient:</strong> {transaction.recipient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
