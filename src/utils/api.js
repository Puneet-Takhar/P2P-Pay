import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const sendMoney = async (amount, recipient) => {
  try {
    const response = await axios.post(`${API_URL}/send-money`, { amount, recipient });
    return response.data;
  } catch (error) {
    console.error('Error sending money:', error);
    throw error;
  }
};

