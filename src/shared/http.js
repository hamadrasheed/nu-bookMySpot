/* eslint-disable no-useless-catch */
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Optional: Dynamic auth token
    }
});

// Interceptors for request and response
api.interceptors.request.use(
    config => {
        // You can modify the request config here if needed
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

// API methods using async/await
const apiService = {
    get: async (url, params = {}) => {
        try {
            const response = await api.get(url, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    post: async (url, data, isFormData = false) => {
        try {
            const headers = isFormData
                ? { 'Content-Type': 'multipart/form-data' }
                : { 'Content-Type': 'application/json' };

            const response = await api.post(url, data, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    put: async (url, data, isFormData = false) => {
        try {
            const headers = isFormData
                ? { 'Content-Type': 'multipart/form-data' }
                : { 'Content-Type': 'application/json' };

            const response = await api.put(url, data, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    delete: async (url) => {
        try {
            const response = await api.delete(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default apiService;
