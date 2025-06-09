import React from 'react';
import { motion } from 'framer-motion';
import '../styles/privacy.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <motion.div
        className="privacy-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="privacy-title">Privacy Policy</h1>
        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2>1. Introduction</h2>
          <p>Welcome to P2P Pay ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>2. Information We Collect</h2>
          <h3>Personal Information You Provide</h3>
          <p>We collect personal information that you voluntarily provide to us when you register on our platform, express interest in obtaining information about us or our services, or otherwise contact us. The personal information we collect may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>Payment information</li>
            <li>Transaction history</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>We automatically collect certain information when you visit, use, or navigate our services. This information does not reveal your specific identity but may include:</p>
          <ul>
            <li>Device and usage information</li>
            <li>IP address</li>
            <li>Browser and device characteristics</li>
            <li>Operating system</li>
            <li>Language preferences</li>
            <li>Referring URLs</li>
            <li>Device name</li>
            <li>Country, location, and time zone</li>
          </ul>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2>3. How We Use Your Information</h2>
          <p>We use personal information collected via our services for a variety of business purposes including:</p>
          <ul>
            <li>To facilitate account creation and authentication</li>
            <li>To process transactions and payments</li>
            <li>To provide, operate, and maintain our services</li>
            <li>To improve, personalize, and expand our services</li>
            <li>To understand and analyze how you use our services</li>
            <li>To develop new products, services, features, and functionality</li>
            <li>To communicate with you for customer service, updates, and marketing</li>
            <li>To send administrative information to you</li>
            <li>To prevent fraudulent transactions and monitor against theft</li>
            <li>To comply with legal obligations</li>
          </ul>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2>4. How We Share Your Information</h2>
          <p>We may process or share your data based on the following legal basis:</p>
          <ul>
            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
            <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or situations involving potential threats to the safety of any person.</li>
          </ul>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>5. Data Security</h2>
          <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our services is at your own risk.</p>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h2>6. Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li><strong>Access:</strong> You may request access to the personal information we hold about you.</li>
            <li><strong>Correction:</strong> You may request that we correct any inaccuracies in your personal information.</li>
            <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
            <li><strong>Restriction:</strong> You may request that we restrict the processing of your personal information.</li>
            <li><strong>Portability:</strong> You may request that we provide you with a copy of your personal information in a structured, machine-readable format.</li>
            <li><strong>Withdraw Consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time.</li>
          </ul>
          <p>To exercise these rights, please contact us using the contact information provided below.</p>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2>7. Children's Privacy</h2>
          <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under age 18 without verification of parental consent, we will take steps to remove that information from our servers.</p>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h2>8. Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
        </motion.div>

        <motion.div
          className="privacy-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <h2>9. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may contact us at:</p>
          <p>P2P Pay<br />
          Privacy Officer<br />
          support@p2ppay.com<br />
          +1 (123) 456-7890</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;
