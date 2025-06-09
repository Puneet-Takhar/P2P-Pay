import React from 'react';
import { motion } from 'framer-motion';
import '../styles/terms.css';

const TermsPage = () => {
  return (
    <div className="terms-container">
      <motion.div
        className="terms-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="terms-title">Terms and Conditions</h1>
        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>1. Introduction</h2>
          <p>Welcome to P2P Pay ("we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the services.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>2. Definitions</h2>
          <ul>
            <li><strong>Account:</strong> A registered account on our platform that allows you to use our services.</li>
            <li><strong>Services:</strong> The peer-to-peer payment services provided by P2P Pay.</li>
            <li><strong>User:</strong> Any person who accesses or uses our services.</li>
            <li><strong>Transaction:</strong> Any payment or transfer of funds through our platform.</li>
          </ul>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>3. Eligibility</h2>
          <p>To use our services, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into a binding agreement</li>
            <li>Not be prohibited from using our services under any applicable laws</li>
            <li>Provide accurate and complete information during registration</li>
          </ul>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2>4. Account Registration</h2>
          <p>To access certain features of our services, you must register for an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and update your account information</li>
            <li>Keep your account credentials confidential</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>5. Payment Services</h2>
          <h3>5.1 Transactions</h3>
          <p>Our platform enables you to send and receive payments. You agree that:</p>
          <ul>
            <li>All transactions are final and cannot be reversed</li>
            <li>You are responsible for ensuring the accuracy of payment details</li>
            <li>We may impose limits on transaction amounts</li>
            <li>We reserve the right to refuse any transaction</li>
          </ul>

          <h3>5.2 Fees</h3>
          <p>We may charge fees for certain transactions or services. Current fee information is available on our website. We reserve the right to change our fee structure with notice.</p>

          <h3>5.3 Currency</h3>
          <p>All transactions are processed in the currency specified at the time of the transaction. Currency conversion may be subject to additional fees.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2>6. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any illegal purpose</li>
            <li>Engage in fraudulent activities</li>
            <li>Attempt to interfere with our services</li>
            <li>Use our services to send or receive payments for prohibited items or services</li>
            <li>Attempt to gain unauthorized access to any account or system</li>
          </ul>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2>7. Intellectual Property</h2>
          <p>All content, trademarks, and data on our platform, including but not limited to software, text, images, and logos, are the property of P2P Pay or our licensors and are protected by intellectual property laws.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2>8. Disclaimers and Limitations of Liability</h2>
          <p>Our services are provided "as is" without warranties of any kind. We do not warrant that our services will be uninterrupted or error-free. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <h2>9. Termination</h2>
          <p>We may terminate or suspend your account and access to our services immediately, without prior notice, for any reason, including but not limited to breach of these Terms.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h2>10. Dispute Resolution</h2>
          <p>Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <h2>11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <h2>12. Changes to These Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new Terms.</p>
        </motion.div>

        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p>P2P Pay<br />
          Legal Department<br />
          legal@p2ppay.com<br />
          +1 (123) 456-7890</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsPage;
