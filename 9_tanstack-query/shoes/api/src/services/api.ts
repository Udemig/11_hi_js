import axios from 'axios';
import { AuthResponse, LoginCredentials, RegisterCredentials, Shoe, ShoeFilters } from '../types';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor for token refresh
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const response = await api.post<AuthResponse>('/auth/refresh');
                const { accessToken } = response.data;
                localStorage.setItem('accessToken', accessToken);
                return api(originalRequest);
            } catch (error) {
                localStorage.removeItem('accessToken');
                window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

// Auth endpoints
export const authApi = {
    register: (data: RegisterCredentials) => 
        api.post<AuthResponse>('/auth/register', data),
    
    login: (data: LoginCredentials) => 
        api.post<AuthResponse>('/auth/login', data),
    
    logout: () => 
        api.post('/auth/logout')
};

// Shoes endpoints
export const shoesApi = {
    getAll: () => 
        api.get<Shoe[]>('/shoes'),
    
    getById: (id: string) => 
        api.get<Shoe>(`/shoes/${id}`),
    
    create: (data: Omit<Shoe, 'id'>) => 
        api.post<Shoe>('/shoes', data),
    
    update: (id: string, data: Partial<Shoe>) => 
        api.put<Shoe>(`/shoes/${id}`, data),
    
    delete: (id: string) => 
        api.delete(`/shoes/${id}`),
    
    search: (filters: ShoeFilters) => 
        api.post<Shoe[]>('/shoes/search', filters)
};

export default api; 