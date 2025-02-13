export interface Shoe {
    id: string;
    name: string;
    picture: string[];
    description: string;
    isNew: boolean;
    discount?: number;
    size: string;
    color: string;
    gender: 'men' | 'women';
    price: number;
}

export interface User {
    email: string;
    role: 'user' | 'admin';
}

export interface AuthResponse {
    message: string;
    accessToken: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    confirmPassword?: string;
}

export interface ShoeFilters {
    gender?: string;
    color?: string;
    size?: string;
    minPrice?: number;
    maxPrice?: number;
} 