// src/components/PaymentGateway.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaHandHoldingUsd, FaExchangeAlt, FaCreditCard, FaUser, FaMoneyBillWave, FaHistory, FaTimes } from 'react-icons/fa';
import '../styles/PaymentGateway.css';

const PaymentGateway = () => {
  const [activeTab, setActiveTab] = useState('send');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);

  const handleSendMoney = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setTransactionStatus('success');

      // Create new transaction
      const newTransaction = {
        id: Date.now(),
        type: 'send',
        amount: parseFloat(amount),
        recipient,
        date: new Date().toISOString(),
        status: 'completed',
        message,
        method: 'UPI' // Default payment method
      };

      // Update transactions state and localStorage
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

      // Reset form
      setAmount('');
      setRecipient('');
      setMessage('');

      // Reset status after 3 seconds
      setTimeout(() => {
        setTransactionStatus(null);
      }, 3000);
    }, 2000);
  };

  const handleRequestMoney = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setTransactionStatus('success');

      // Create new transaction
      const newTransaction = {
        id: Date.now(),
        type: 'receive',
        amount: parseFloat(amount),
        sender: 'Pending', // Will be updated when request is fulfilled
        date: new Date().toISOString(),
        status: 'pending',
        message,
        method: 'UPI' // Default payment method
      };

      // Update transactions state and localStorage
      const updatedTransactions = [...transactions, newTransaction];
      setTransactions(updatedTransactions);
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

      // Reset form
      setAmount('');
      setMessage('');

      // Reset status after 3 seconds
      setTimeout(() => {
        setTransactionStatus(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="payment-gateway-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'send' ? 'active' : ''}`}
          onClick={() => setActiveTab('send')}
        >
          <FaPaperPlane className="tab-icon" />
          <span>Send Money</span>
        </button>
        <button
          className={`tab-button ${activeTab === 'request' ? 'active' : ''}`}
          onClick={() => setActiveTab('request')}
        >
          <FaHandHoldingUsd className="tab-icon" />
          <span>Request Money</span>
        </button>
      </div>

      <div className="tab-content">
        {transactionStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="transaction-success"
          >
            <FaExchangeAlt className="success-icon" />
            <h3>Transaction Successful!</h3>
            <p>Your payment has been processed successfully.</p>
          </motion.div>
        )}

        {activeTab === 'send' && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSendMoney}
            className="payment-form"
          >
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <div className="input-with-icon">
                <FaMoneyBillWave className="input-icon" />
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="recipient">Recipient</label>
              <div className="input-with-icon">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="recipient"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Email or phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (optional)</label>
              <div className="input-with-icon">
                <FaPaperPlane className="input-icon" />
                <input
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Add a note"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-button"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="processing-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                  Processing
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Money
                </>
              )}
            </motion.button>
          </motion.form>
        )}

        {activeTab === 'request' && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleRequestMoney}
            className="payment-form"
          >
            <div className="form-group">
              <label htmlFor="request-amount">Amount</label>
              <div className="input-with-icon">
                <FaMoneyBillWave className="input-icon" />
                <input
                  type="number"
                  id="request-amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="request-message">Message (optional)</label>
              <div className="input-with-icon">
                <FaPaperPlane className="input-icon" />
                <input
                  type="text"
                  id="request-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Add a note"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-button"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="processing-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                  Processing
                </>
              ) : (
                <>
                  <FaHandHoldingUsd />
                  Request Money
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </div>

      {/* Transaction History Button */}
      <motion.button
        className="history-button"
        onClick={() => setShowHistory(!showHistory)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaHistory className="history-icon" />
        <span>Transaction History</span>
      </motion.button>

      {/* Transaction History Modal */}
      {showHistory && (
        <div className="history-modal">
          <div className="history-modal-content">
            <div className="history-modal-header">
              <h3>Transaction History</h3>
              <button
                className="close-button"
                onClick={() => setShowHistory(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="transaction-history">
              {transactions.length === 0 ? (
                <div className="no-transactions">
                  <FaExchangeAlt className="no-transactions-icon" />
                  <p>No transactions yet</p>
                </div>
              ) : (
                <div className="transactions-list">
                  {transactions.sort((a, b) => new Date(b.date) - new Date(a.date)).map((transaction) => (
                    <div key={transaction.id} className="transaction-item">
                      <div className="transaction-icon">
                        {transaction.type === 'send' ? (
                          <FaArrowUp className="send-icon" />
                        ) : (
                          <FaArrowDown className="receive-icon" />
                        )}
                      </div>

                      <div className="transaction-details">
                        <div className="transaction-main">
                          <div className="transaction-info">
                            <h4>
                              {transaction.type === 'send'
                                ? `Sent to ${transaction.recipient}`
                                : `Received from ${transaction.sender}`}
                            </h4>
                            <p className="transaction-message">
                              {transaction.message || 'No message'}
                            </p>
                          </div>
                          <div className="transaction-amount">
                            <span className={transaction.type === 'send' ? 'sent' : 'received'}>
                              {transaction.type === 'send' ? '-' : '+'}$
                              {transaction.amount.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="transaction-meta">
                          <div className="transaction-status">
                            {transaction.status === 'completed' ? (
                              <>
                                <FaCheckCircle className="status-icon completed" />
                                <span>Completed</span>
                              </>
                            ) : (
                              <>
                                <FaClock className="status-icon pending" />
                                <span>Pending</span>
                              </>
                            )}
                          </div>
                          <div className="transaction-time">
                            {new Date(transaction.date).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
