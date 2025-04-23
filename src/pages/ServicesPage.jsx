import React from 'react';

const ServicesPage = () => {
  return (
    <div className="page-content services-page">
      <h1>Our Services</h1>
      <div className="content-wrapper">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="https://static.videezy.com/system/resources/previews/000/052/722/original/Comp_6_6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <h2>Instant Money Transfers</h2>
          <p>
            Send and receive money instantly with our secure and user-friendly platform. Whether you're sending money to friends, family, or business partners, our platform ensures that your transactions are quick and reliable.
          </p>
          <h2>Secure Transactions</h2>
          <p>
            We prioritize the security of your transactions. Our platform uses advanced encryption and security measures to ensure that your money and personal information are always protected.
          </p>
          <h2>User-Friendly Interface</h2>
          <p>
            Our platform is designed to be intuitive and easy to use. With a clean and modern interface, you can manage your transactions effortlessly, whether you're a tech-savvy user or a beginner.
          </p>
          <h2>24/7 Customer Support</h2>
          <p>
            We're here to help you every step of the way. Our dedicated customer support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;





