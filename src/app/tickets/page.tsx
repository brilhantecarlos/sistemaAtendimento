'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { useAuth } from '@/contexts/AuthContext';

interface Ticket {
    id: number;
    titulo: string;
    status: 'ABERTO' | 'EM_ATENDIMENTO' | 'ATENDIDO';
    prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';
    dataCriacao: string;
    criador: {
        id: number;
        nome: string;
    };
    atendente?: {
        id: number;
        nome: string;
    } | null;
    categoria: {
        id: number;
        nome: string;
    };
}

export default function TicketsPage() {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Filtros
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
            return;
        }

        const fetchTickets = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch('/api/tickets');

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Erro ao buscar tickets');
                }

                const data = await response.json();
                setTickets(data);
            } catch (err: Error | unknown) {
                console.error('Erro ao buscar tickets:', err);
                setError('Erro ao carregar tickets: ' + ((err as Error)?.message || 'Erro desconhecido'));
            } finally {
                setIsLoading(false);
            }
        };

        if (isAuthenticated) {
            fetchTickets();
        }
    }, [isAuthenticated, loading, router]);

    const filteredTickets = tickets.filter(ticket => {
        const matchesSearch = searchQuery === '' ||
            ticket.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ticket.id.toString().includes(searchQuery);

        const matchesStatus = statusFilter === '' || ticket.status === statusFilter;
        const matchesPriority = priorityFilter === '' || ticket.prioridade === priorityFilter;
        const matchesCategory = categoryFilter === '' || ticket.categoria.id.toString() === categoryFilter;

        return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
    });

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ABERTO': return 'bg-blue-100 text-blue-800';
            case 'EM_ATENDIMENTO': return 'bg-yellow-100 text-yellow-800';
            case 'ATENDIDO': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'ABERTO': return 'Aberto';
            case 'EM_ATENDIMENTO': return 'Em Atendimento';
            case 'ATENDIDO': return 'Atendido';
            default: return status;
        }
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'BAIXA': return 'bg-green-100 text-green-800';
            case 'MEDIA': return 'bg-blue-100 text-blue-800';
            case 'ALTA': return 'bg-yellow-100 text-yellow-800';
            case 'CRITICA': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriorityText = (priority: string) => {
        switch (priority) {
            case 'BAIXA': return 'Baixa';
            case 'MEDIA': return 'Média';
            case 'ALTA': return 'Alta';
            case 'CRITICA': return 'Crítica';
            default: return priority;
        }
    };

    if (loading) {
        return (
            <MainLayout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    <span className="ml-3 text-lg text-gray-700">Carregando...</span>
                </div>
            </MainLayout>
        );
    }

    if (!isAuthenticated) {
        return null; // Redirecionando para login no useEffect
    }

    return (
        <MainLayout>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Atendimentos Médicos</h1>
                    <div className="flex space-x-2">
                        <Button
                            onClick={() => router.push('/relatorios')}
                            variant="secondary"
                        >
                            Relatórios
                        </Button>
                        <Button
                            onClick={() => router.push('/tickets/new')}
                        >
                            Novo Atendimento
                        </Button>
                    </div>
                </div>

                {error && <Alert variant="error" message={error} className="mb-4" />}

                <Card className="mb-6 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Buscar
                            </label>
                            <Input
                                id="search"
                                type="text"
                                placeholder="Buscar por título ou ID"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <Select
                                id="status"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="">Todos</option>
                                <option value="ABERTO">Aberto</option>
                                <option value="EM_ATENDIMENTO">Em Atendimento</option>
                                <option value="ATENDIDO">Atendido</option>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                                Prioridade
                            </label>
                            <Select
                                id="priority"
                                value={priorityFilter}
                                onChange={(e) => setPriorityFilter(e.target.value)}
                            >
                                <option value="">Todas</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                                <option value="CRITICA">Crítica</option>
                            </Select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Categoria
                            </label>
                            <Select
                                id="category"
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                            >
                                <option value="">Todas</option>
                                <option value="1">Suporte Técnico</option>
                                <option value="2">Recursos Humanos</option>
                                <option value="3">Financeiro</option>
                            </Select>
                        </div>
                    </div>
                </Card>

                <Card className="overflow-hidden">
                    {isLoading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                            <span className="ml-3 text-lg text-gray-700">Carregando tickets...</span>
                        </div>
                    ) : filteredTickets.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Título
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Prioridade
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Categoria
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Solicitante
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Atendente
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Data
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredTickets.map((ticket) => (
                                        <tr key={ticket.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/tickets/${ticket.id}`)}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                #{ticket.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {ticket.titulo}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                                                    {getStatusText(ticket.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(ticket.prioridade)}`}>
                                                    {getPriorityText(ticket.prioridade)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {ticket.categoria.nome}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {ticket.criador.nome}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {ticket.atendente?.nome || '-'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {formatDate(ticket.dataCriacao)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        router.push(`/tickets/${ticket.id}`);
                                                    }}
                                                >
                                                    Ver
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-64">
                            <p className="text-lg text-gray-600 mb-4">Nenhum ticket encontrado</p>
                            <Button
                                onClick={() => router.push('/tickets/new')}
                            >
                                Criar Novo Ticket
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </MainLayout>
    );
} 