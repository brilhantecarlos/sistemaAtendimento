"use client";

import React, { createContext, useContext, ReactNode } from 'react';

// Tipo simplificado de usuário
interface User {
    id: number;
    nome: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    login: () => Promise<void>;
    register: () => Promise<void>;
    logout: () => void;
}

// Usuário padrão simulado para manter compatibilidade
const defaultUser: User = {
    id: 1,
    nome: 'Usuário Padrão',
    email: 'usuario@exemplo.com',
    role: 'ADMIN'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Implementação simplificada sempre retorna o usuário padrão sem autenticação
    const mockLogin = async () => {
        console.log('Login simulado bem-sucedido');
    };

    const mockRegister = async () => {
        console.log('Registro simulado bem-sucedido');
    };

    const mockLogout = () => {
        console.log('Logout simulado bem-sucedido');
    };

    // Valores simulados para manter compatibilidade
    const authValue: AuthContextType = {
        user: defaultUser,
        loading: false,
        error: null,
        isAuthenticated: true, // Sempre autenticado
        login: mockLogin,
        register: mockRegister,
        logout: mockLogout,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}; 