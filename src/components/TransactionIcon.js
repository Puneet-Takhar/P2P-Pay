import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/TransactionIcon.css';

const TransactionIcon = () => {
  return (
    <Link to="/transactions" className="transaction-icon-container">
      <div className="transaction-icon">
        <FaHistory className="history-icon" />
        <span className="tooltip">Transaction History</span>
      </div>
    </Link>
  );
};

export default TransactionIcon;
