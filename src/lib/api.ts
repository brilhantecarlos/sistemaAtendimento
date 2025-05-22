const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

interface ApiOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: Record<string, string>;
}

export async function fetchApi<T = any>(url: string, options: ApiOptions = {}): Promise<T> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Ocorreu um erro na requisição');
    }

    return data;
}

// Funções auxiliares comuns
export const api = {
    get: <T = any>(url: string, headers?: Record<string, string>) =>
        fetchApi<T>(url, { method: 'GET', headers }),

    post: <T = any>(url: string, body: any, headers?: Record<string, string>) =>
        fetchApi<T>(url, { method: 'POST', body, headers }),

    put: <T = any>(url: string, body: any, headers?: Record<string, string>) =>
        fetchApi<T>(url, { method: 'PUT', body, headers }),

    delete: <T = any>(url: string, headers?: Record<string, string>) =>
        fetchApi<T>(url, { method: 'DELETE', headers }),
}; 