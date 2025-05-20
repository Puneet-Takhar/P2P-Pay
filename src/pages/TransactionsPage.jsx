import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaMoneyBillWave, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../styles/transactions.css';

const TransactionsPage = () => {
  const transactions = [
    { id: 1, type: 'Received', amount: 150.00, date: '2023-05-15', status: 'Completed', from: 'John Doe' },
    { id: 2, type: 'Sent', amount: 75.50, date: '2023-05-14', status: 'Completed', to: 'Jane Smith' },
    { id: 3, type: 'Received', amount: 200.00, date: '2023-05-10', status: 'Completed', from: 'Business Inc.' },
    { id: 4, type: 'Sent', amount: 30.00, date: '2023-05-08', status: 'Pending', to: 'Alex Johnson' },
    { id: 5, type: 'Received', amount: 50.00, date: '2023-05-05', status: 'Completed', from: 'Sarah Williams' },
  ];

  return (
    <div className="transactions-container">
      <motion.div
        className="transactions-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1><FaHistory /> Transaction History</h1>
        <p>View all your past transactions and payment activity</p>
      </motion.div>

      <div className="transactions-content">
        <div className="transactions-summary">
          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="summary-icon">
              <FaMoneyBillWave />
            </div>
            <div className="summary-info">
              <h3>Total Transactions</h3>
              <p>{transactions.length}</p>
            </div>
          </motion.div>

          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="summary-icon">
              <FaArrowUp />
            </div>
            <div className="summary-info">
              <h3>Money Received</h3>
              <p>${transactions.filter(t => t.type === 'Received').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</p>
            </div>
          </motion.div>

          <motion.div
            className="summary-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="summary-icon">
              <FaArrowDown />
            </div>
            <div className="summary-info">
              <h3>Money Sent</h3>
              <p>${transactions.filter(t => t.type === 'Sent').reduce((sum, t) => sum + t.amount, 0).toFixed(2)}</p>
            </div>
          </motion.div>
        </div>

        <div className="transactions-list">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
                <th>Party</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className={transaction.type === 'Received' ? 'received' : 'sent'}>
                    {transaction.type}
                  </td>
                  <td>${transaction.amount.toFixed(2)}</td>
                  <td>{transaction.date}</td>
                  <td>
                    <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td>
                    {transaction.type === 'Received' ? (
                      <span>From: {transaction.from}</span>
                    ) : (
                      <span>To: {transaction.to}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
