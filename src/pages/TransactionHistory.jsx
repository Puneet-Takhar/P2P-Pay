import React from 'react';

const TransactionHistory = () => {
  const transactions = [
    { date: '2023-10-01', amount: '100.00', recipient: 'John Doe' },
    { date: '2023-09-25', amount: '50.00', recipient: 'Jane Smith' },
  ];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
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
  );
};

export default TransactionHistory;
