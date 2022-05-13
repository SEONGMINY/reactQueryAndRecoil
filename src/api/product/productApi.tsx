import axios from 'axios';

export const getAllProduct = async () => {
  const response = await axios.get('https://codingapple1.github.io/shop/data2.json');
  return response.data;
};
