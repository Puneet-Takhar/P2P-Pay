import React from 'react';

const Help = () => {
  return (
    <div className="page help-page">
      <h1>Help Center</h1>
      <p>Need assistance? Find answers to common questions and troubleshoot issues here.</p>
      <h2>FAQs</h2>
<ul>
  <li>🔒 How secure are transactions?</li>
  <p>All transactions use end-to-end encryption and tokenization.</p>
  <li>💳 Can I link multiple bank accounts?</li>
  <p>Yes, you can add multiple banks from your dashboard.</p>
</ul>

<h2>Need more help?</h2>
<p>Email us at <a href="mailto:support@p2p-pay.com">support@p2p-pay.com</a> or start a live chat.</p>

    </div>
    
  );
};

export default Help;
