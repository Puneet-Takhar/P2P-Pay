import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TransactionGateway from './pages/TransactionGateway';
import TransactionsHistory from './pages/TransactionsHistory';
import TermsPage from './pages/TermsPage';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Newsroom from './pages/Newsroom';
import InvestorRelations from './pages/InvestorRelations';
import GovernmentRelations from './pages/GovernmentRelations';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { AuthProvider } from './context/AuthContext';
import Accessibility from './pages/Accessibility';
import PrivacyStatement from './pages/PrivacyStatement';
import Cookies from './pages/Cookies';
import Legal from './pages/Legal'; 
import { Analytics } from "@vercel/analytics/react";

import './styles/styles.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="app-container"
        >
          <Navbar />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="content-wrapper"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/pay" element={<TransactionGateway />} />
              <Route path="/transactionshistory" element={<TransactionsHistory />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/privacy-statement" element={<PrivacyStatement />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/newsroom" element={<Newsroom />} />
              <Route path="/investor-relations" element={<InvestorRelations />} />
              <Route path="/government-relations" element={<GovernmentRelations />} />
            </Routes>
          </motion.div>
          <Footer />
          <Analytics />
        </motion.div>
      </Router>
    </AuthProvider>
  );
};

export default App;
