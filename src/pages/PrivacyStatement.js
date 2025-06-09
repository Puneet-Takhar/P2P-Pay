import React from 'react';

const PrivacyStatement = () => (
  <div className="page-container">
    <h1>Privacy Statement</h1>
    <p>Your data privacy and security are central to how we build our products at <strong>P2P-Pay</strong>.</p>

    <h2>What Data We Collect</h2>
    <ul>
      <li>Personal information: name, email, mobile</li>
      <li>Transaction history</li>
      <li>Device/browser metadata</li>
    </ul>

    <h2>Why We Collect It</h2>
    <ul>
      <li>To provide our services</li>
      <li>To improve site performance and security</li>
      <li>To personalize user experience</li>
    </ul>

    <h2>Third-Party Sharing</h2>
    <p>We never sell your data. Select third parties may be involved for processing, under strict data protection agreements.</p>

    <h2>Your Rights</h2>
    <ul>
      <li>Access and edit your data</li>
      <li>Request deletion</li>
      <li>Withdraw consent at any time</li>
    </ul>

    <p>Contact our Data Protection Officer at <a href="mailto:privacy@p2p-pay.com">privacy@p2p-pay.com</a>.</p>
  </div>
);

export default PrivacyStatement;
