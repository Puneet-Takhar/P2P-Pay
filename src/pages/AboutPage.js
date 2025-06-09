import React from 'react';

const AboutPage = () => {
  return (
    <div className="page-content about-page">
      <h1>About Us</h1>
      <div className="content-wrapper">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src="https://static.videezy.com/system/resources/previews/000/008/090/original/Data_Grid.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <h2>Our Mission</h2>
          <p>
            At P2P Pay, our mission is to revolutionize the way people send and receive money. We aim to provide a seamless, secure, and user-friendly platform that makes financial transactions effortless and accessible to everyone.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the go-to platform for peer-to-peer payments, connecting people across the globe with a simple and secure money transfer solution. We strive to empower individuals and businesses with the tools they need to manage their finances efficiently.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Security: We prioritize the security of your transactions and personal information.</li>
            <li>Innovation: We continuously innovate to provide the best user experience.</li>
            <li>Customer-Centric: We put our customers first and strive to meet their needs.</li>
          </ul>
          <h2>Our Team</h2>
          <p>
            Our team consists of passionate professionals dedicated to making P2P Pay the best it can be. From developers to customer support, we work together to ensure that our platform meets the highest standards of quality and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;



