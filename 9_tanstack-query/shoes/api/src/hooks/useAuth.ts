import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../services/api';
import { LoginCredentials, RegisterCredentials } from '../types';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const login = useMutation({
        mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
        onSuccess: (response) => {
            localStorage.setItem('accessToken', response.data.accessToken);
            queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate('/');
        }
    });

    const register = useMutation({
        mutationFn: (credentials: RegisterCredentials) => authApi.register(credentials),
        onSuccess: (response) => {
            localStorage.setItem('accessToken', response.data.accessToken);
            queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate('/');
        }
    });

    const logout = useMutation({
        mutationFn: () => authApi.logout(),
        onSuccess: () => {
            localStorage.removeItem('accessToken');
            queryClient.clear();
            navigate('/login');
        }
    });

    return {
        login,
        register,
        logout,
        isAuthenticated: !!localStorage.getItem('accessToken')
    };
} 