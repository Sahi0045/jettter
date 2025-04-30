import api from '../api';

const callbackService = {
  createCallbackRequest: async (data) => {
    try {
      const response = await api.post('/callbacks', data);
      return response.data;
    } catch (error) {
      console.error('Error creating callback request:', error);
      throw error;
    }
  },

  createPackageCallbackRequest: async (data) => {
    try {
      const response = await api.post('/callbacks/package', data);
      return response.data;
    } catch (error) {
      console.error('Error creating package callback request:', error);
      throw error;
    }
  }
};

export default callbackService; 