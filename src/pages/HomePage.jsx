import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaLock, FaMobileAlt, FaUsers, FaCreditCard, FaChartLine, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Transaction History Icon - Positioned in top right corner */}
        <Link to="/transactions" className="transaction-history-icon">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaHistory className="history-icon" />
            <span className="history-tooltip">Transaction History</span>
          </motion.div>
        </Link>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Revolutionize Your Payments</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of digital transactions with our secure, fast, and user-friendly payment platform.
          </motion.p>
          <div className="hero-cta">
            <motion.a
              href="/signup"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: 'white', color: '#ff6b6b', border: '2px solid white' }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="/about"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'transparent', border: '2px solid white', color: 'white' }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="feature-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Our Platform?
        </motion.h2>

        <div className="features-grid">
          {[
            {
              icon: <FaMoneyBillWave />,
              title: "Instant Transfers",
              description: "Send and receive money instantly with our lightning-fast payment processing.",
              color: "#ff6b6b"
            },
            {
              icon: <FaLock />,
              title: "Bank-Level Security",
              description: "Your transactions are protected with the highest security standards in the industry.",
              color: "#48dbfb"
            },
            {
              icon: <FaMobileAlt />,
              title: "Mobile Friendly",
              description: "Access your account and make payments from any device, anywhere.",
              color: "#1dd1a1"
            },
            {
              icon: <FaUsers />,
              title: "User Friendly",
              description: "Intuitive interface designed for seamless user experience.",
              color: "#feca57"
            },
            {
              icon: <FaCreditCard />,
              title: "Multiple Payment Options",
              description: "Support for various payment methods including cards, bank transfers, and digital wallets.",
              color: "#54a0ff"
            },
            {
              icon: <FaChartLine />,
              title: "Transaction Tracking",
              description: "Keep track of all your payments with our comprehensive transaction history.",
              color: "#ff9ff3"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{ borderTop: `4px solid ${feature.color}` }}
            >
              <div className="feature-icon" style={{ background: `${feature.color}20`, color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Payments?
        </motion.h2>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 2rem' }}
        >
          Join thousands of satisfied users who are already enjoying seamless peer-to-peer payments.
        </motion.p>
        <motion.a
          href="/signup"
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up Now
        </motion.a>
      </section>
    </div>
  );
};

export default HomePage;
