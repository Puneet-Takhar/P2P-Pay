import React from 'react';
import HeroSection from '../components/HeroSection';
import SendMoney from '../components/SendMoney';
import ReceiveMoney from '../components/ReceiveMoney';
import TransactionHistory from '../components/TransactionHistory';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SendMoney />
      <ReceiveMoney />
      <TransactionHistory />
      <div className="additional-content">
        <h2>Why Choose P2P Pay?</h2>
        <p>
          P2P Pay offers a secure and convenient way to send and receive money instantly. With our user-friendly interface and robust security measures, you can trust us with your transactions.
        </p>
        <img
          src="https://img.freepik.com/free-photo/question-mark-icon-solving-problem-solution-concept_53876-13887.jpg?t=st=1745333139~exp=1745336739~hmac=d865593e080314b6080dfb176824ec3203f695e9750df6e96a0f05a55365c139&w=1800"
          alt="Why Choose Us"
          className="additional-image"
        />
      </div>
      <div className="divider"></div>
      <ContactUs />
    </div>
  );
};

export default HomePage;



