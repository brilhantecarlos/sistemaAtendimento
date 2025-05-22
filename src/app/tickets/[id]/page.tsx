'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

interface Categoria {
    id: number;
    nome: string;
}

interface Usuario {
    id: number;
    nome: string;
    email: string;
    role: string;
}

interface Ticket {
    id: number;
    titulo: string;
    descricao: string;
    status: 'ABERTO' | 'EM_ATENDIMENTO' | 'ATENDIDO';
    prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';
    dataCriacao: string;
    dataAtualizacao: string | null;
    categoria: Categoria;
    criador: Usuario;
    atendente: Usuario | null;
}

export default function DetalhesTicket() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    const [ticket, setTicket] = useState<Ticket | null>(null);
    const [loadingTicket, setLoadingTicket] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [atualizandoStatus, setAtualizandoStatus] = useState(false);

    const fetchTicket = useCallback(async () => {
        if (!id) return;

        try {
            setLoadingTicket(true);
            setError(null);

            const response = await fetch(`/api/tickets/${id}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao buscar ticket');
            }

            const data = await response.json();
            setTicket(data);
        } catch (err: unknown) {
            console.error('Erro ao buscar ticket:', err);
            setError('Erro ao carregar ticket: ' + (err instanceof Error ? err.message : 'Erro desconhecido'));
        } finally {
            setLoadingTicket(false);
        }
    }, [id]);

    // Verifica autenticação e carrega o ticket
    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
            return;
        }

        if (user && id) {
            fetchTicket();
        }
    }, [user, loading, router, id, fetchTicket]);

    const atualizarStatusTicket = async (novoStatus: 'ABERTO' | 'EM_ATENDIMENTO' | 'ATENDIDO') => {
        if (!ticket) return;

        try {
            setAtualizandoStatus(true);
            setError(null);

            const response = await fetch(`/api/tickets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ status: novoStatus })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao atualizar status');
            }

            const updatedTicket = await response.json();
            setTicket(updatedTicket);

        } catch (err: unknown) {
            console.error('Erro ao atualizar status:', err);
            setError('Erro ao atualizar status: ' + (err instanceof Error ? err.message : 'Erro desconhecido'));
        } finally {
            setAtualizandoStatus(false);
        }
    };

    // Função para determinar a cor com base no status
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ABERTO':
                return 'bg-blue-100 text-blue-800';
            case 'EM_ATENDIMENTO':
                return 'bg-yellow-100 text-yellow-800';
            case 'ATENDIDO':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Função para determinar a cor com base na prioridade
    const getPrioridadeColor = (prioridade: string) => {
        switch (prioridade) {
            case 'BAIXA':
                return 'bg-green-100 text-green-800';
            case 'MEDIA':
                return 'bg-blue-100 text-blue-800';
            case 'ALTA':
                return 'bg-yellow-100 text-yellow-800';
            case 'CRITICA':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Função para formatar data e hora
    const formatarDataHora = (dataString: string) => {
        const data = new Date(dataString);
        return data.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // Converte status para texto legível
    const traduzirStatus = (status: string) => {
        switch (status) {
            case 'ABERTO': return 'Aberto';
            case 'EM_ATENDIMENTO': return 'Em Atendimento';
            case 'ATENDIDO': return 'Atendido';
            default: return status;
        }
    };

    // Converte prioridade para texto legível
    const traduzirPrioridade = (prioridade: string) => {
        switch (prioridade) {
            case 'BAIXA': return 'Baixa';
            case 'MEDIA': return 'Média';
            case 'ALTA': return 'Alta';
            case 'CRITICA': return 'Crítica';
            default: return prioridade;
        }
    };

    // Estado de carregamento
    if (loading || loadingTicket) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-5xl">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                        <span className="ml-3 text-lg text-gray-700">Carregando...</span>
                    </div>
                </div>
            </MainLayout>
        );
    }

    // Não autenticado será redirecionado
    if (!user) {
        return null;
    }

    // Ticket não encontrado
    if (!ticket) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-5xl">
                    <Alert variant="error" message="Ticket não encontrado ou você não tem permissão para visualizá-lo" />
                    <div className="mt-4">
                        <Button onClick={() => router.push('/tickets')}>Voltar para Lista de Tickets</Button>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container mx-auto p-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold">Ticket #{ticket.id}: {ticket.titulo}</h1>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            onClick={() => router.push('/tickets')}
                            variant="secondary"
                        >
                            Voltar para Lista
                        </Button>
                        {(user?.role === 'ADMIN' || user?.role === 'SUPPORT' || user?.id === ticket.criador.id) && (
                            <Button
                                onClick={() => router.push(`/tickets/editar/${ticket.id}`)}
                                variant="primary"
                            >
                                Editar Ticket
                            </Button>
                        )}
                    </div>
                </div>

                {error && <Alert variant="error" message={error} className="mb-4" />}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Coluna principal - Detalhes do ticket */}
                    <div className="lg:col-span-2">
                        <Card className="mb-6">
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.status)}`}>
                                        {traduzirStatus(ticket.status)}
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPrioridadeColor(ticket.prioridade)}`}>
                                        Prioridade {traduzirPrioridade(ticket.prioridade)}
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                        {ticket.categoria.nome}
                                    </span>
                                </div>

                                <h2 className="text-xl font-semibold mb-3">Descrição</h2>
                                <p className="text-gray-700 whitespace-pre-line mb-6">{ticket.descricao}</p>

                                <div className="border-t border-gray-200 pt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-500">Criado por:</p>
                                            <p className="font-medium">{ticket.criador.nome}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Data de criação:</p>
                                            <p className="font-medium">{formatarDataHora(ticket.dataCriacao)}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Atendente:</p>
                                            <p className="font-medium">{ticket.atendente ? ticket.atendente.nome : 'Não atribuído'}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Última atualização:</p>
                                            <p className="font-medium">{ticket.dataAtualizacao ? formatarDataHora(ticket.dataAtualizacao) : '-'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Botões de atualização de status para administradores e atendentes */}
                                {(user?.role === 'ADMIN' || user?.role === 'SUPPORT') && (
                                    <div className="mt-6 pt-4 border-t border-gray-200">
                                        <h3 className="text-sm font-semibold mb-3">Atualizar Status:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                onClick={() => atualizarStatusTicket('ABERTO')}
                                                variant={ticket.status === 'ABERTO' ? 'primary' : 'secondary'}
                                                className="text-sm"
                                                disabled={atualizandoStatus || ticket.status === 'ABERTO'}
                                            >
                                                Aberto
                                            </Button>
                                            <Button
                                                onClick={() => atualizarStatusTicket('EM_ATENDIMENTO')}
                                                variant={ticket.status === 'EM_ATENDIMENTO' ? 'primary' : 'secondary'}
                                                className="text-sm"
                                                disabled={atualizandoStatus || ticket.status === 'EM_ATENDIMENTO'}
                                            >
                                                Em Atendimento
                                            </Button>
                                            <Button
                                                onClick={() => atualizarStatusTicket('ATENDIDO')}
                                                variant={ticket.status === 'ATENDIDO' ? 'primary' : 'secondary'}
                                                className="text-sm"
                                                disabled={atualizandoStatus || ticket.status === 'ATENDIDO'}
                                            >
                                                Atendido
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>

                    {/* Coluna lateral - Informações adicionais e ações */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 mb-6">
                            <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
                            <div className="space-y-3">
                                {ticket.status !== 'ATENDIDO' && (
                                    <>
                                        {ticket.status === 'ABERTO' && user?.role === 'SUPPORT' && (
                                            <Button
                                                className="w-full"
                                                variant="secondary"
                                                onClick={() => atualizarStatusTicket('EM_ATENDIMENTO')}
                                                disabled={atualizandoStatus}
                                            >
                                                Iniciar Atendimento
                                            </Button>
                                        )}
                                        {ticket.status === 'EM_ATENDIMENTO' && (user?.role === 'SUPPORT' || user?.role === 'ADMIN') && (
                                            <Button
                                                className="w-full"
                                                variant="success"
                                                onClick={() => atualizarStatusTicket('ATENDIDO')}
                                                disabled={atualizandoStatus}
                                            >
                                                Marcar como Atendido
                                            </Button>
                                        )}
                                    </>
                                )}

                                {user?.role === 'ADMIN' && (
                                    <Button
                                        className="w-full"
                                        variant="danger"
                                        onClick={() => {
                                            if (confirm('Tem certeza que deseja excluir este ticket? Esta ação não pode ser desfeita.')) {
                                                // Lógica para excluir ticket
                                                fetch(`/api/tickets/${id}`, {
                                                    method: 'DELETE',
                                                    headers: {
                                                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                                                    }
                                                }).then(response => {
                                                    if (response.ok) {
                                                        router.push('/tickets');
                                                    } else {
                                                        alert('Erro ao excluir ticket');
                                                    }
                                                }).catch(err => {
                                                    console.error('Erro ao excluir ticket:', err);
                                                    alert('Erro ao excluir ticket');
                                                });
                                            }
                                        }}
                                    >
                                        Excluir Ticket
                                    </Button>
                                )}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Informações Adicionais</h3>
                            <div className="space-y-3 text-sm">
                                <div>
                                    <p className="text-gray-500">ID do Ticket</p>
                                    <p className="font-medium">{ticket.id}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Tempo Aberto</p>
                                    <p className="font-medium">
                                        {(() => {
                                            const dataCriacao = new Date(ticket.dataCriacao);
                                            const agora = new Date();
                                            const diffDias = Math.floor((agora.getTime() - dataCriacao.getTime()) / (1000 * 60 * 60 * 24));

                                            if (diffDias === 0) {
                                                return 'Hoje';
                                            } else if (diffDias === 1) {
                                                return '1 dia';
                                            } else {
                                                return `${diffDias} dias`;
                                            }
                                        })()}
                                    </p>
                                </div>
                                {ticket.atendente && (
                                    <div>
                                        <p className="text-gray-500">Email do Atendente</p>
                                        <p className="font-medium">{ticket.atendente.email}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-gray-500">Email do Solicitante</p>
                                    <p className="font-medium">{ticket.criador.email}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
} 