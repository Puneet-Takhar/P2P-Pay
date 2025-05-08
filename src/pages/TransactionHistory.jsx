import React from "react";

const TransactionHistory = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date}: Sent {transaction.amount} to {transaction.receiver}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
