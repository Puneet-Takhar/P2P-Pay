import React from 'react';

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>For support or inquiries, please email us at <strong>support@p2p-pay.com</strong></p>
      <h2>Quick Contact Form</h2>
<form>
  <input placeholder="Your Name" />
  <input placeholder="Email Address" />
  <textarea placeholder="Your Message" />
  <button type="submit">Send Message</button>
</form>

<p>💬 Or use our in-site chatbot for faster support!</p>

    </div>
  );
};

export default Contact;
