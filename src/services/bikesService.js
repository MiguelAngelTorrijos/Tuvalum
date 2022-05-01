import axios from 'axios';

export const getDataBiker = async (offset, limit) => {
  const baseUrl = 'http://localhost:3001';
  try {
    const response = await axios.get(baseUrl + '/products');
    response.data.sort((a, b) =>  parseInt(a.price.replace('.', '')) -  parseInt(b.price.replace('.', '')));
    const total = response.data.length;
    return {
      data: response.data.splice(offset, limit),
      total,
    };
  } catch (error) {
    console.log(error);
  }
};

