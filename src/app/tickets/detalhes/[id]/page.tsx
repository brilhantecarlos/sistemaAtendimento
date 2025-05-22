'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Textarea from '@/components/ui/Textarea';

interface Usuario {
    id: number;
    nome: string;
    email: string;
    role: string;
}

interface Categoria {
    id: number;
    nome: string;
}

interface Comentario {
    id: number;
    texto: string;
    dataCriacao: string;
    usuario: Usuario;
}

interface Ticket {
    id: number;
    titulo: string;
    descricao: string;
    status: 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO' | 'FECHADO';
    prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA';
    dataCriacao: string;
    dataAtualizacao: string | null;
    categoria: Categoria;
    criador: Usuario;
    atendente: Usuario | null;
    comentarios: Comentario[];
}

export default function DetalhesTicket() {
    const { isAuthenticated, loading, user } = useAuth();
    const router = useRouter();
    const params = useParams();
    const id = params?.id;

    const [ticket, setTicket] = useState<Ticket | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [novoComentario, setNovoComentario] = useState('');
    const [enviandoComentario, setEnviandoComentario] = useState(false);
    const [comentarioSuccess, setComentarioSuccess] = useState<string | null>(null);
    const [atualizandoStatus, setAtualizandoStatus] = useState(false);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
            return;
        }

        const fetchTicket = async () => {
            if (!id) return;

            try {
                setIsLoading(true);
                setError(null);

                // Em um ambiente real, buscar da API
                // const data = await api.get(`/api/tickets/${id}`);
                // setTicket(data);

                // Mock para desenvolvimento
                await new Promise(resolve => setTimeout(resolve, 800));

                // Simulação de resposta da API
                const mockTicket: Ticket = {
                    id: Number(id),
                    titulo: 'Problema com login no sistema principal',
                    descricao: 'Não consigo fazer login no sistema principal desde ontem. Recebo uma mensagem de erro "Credenciais inválidas" mesmo tendo certeza que estou usando as credenciais corretas.',
                    status: 'EM_ANDAMENTO',
                    prioridade: 'ALTA',
                    dataCriacao: '2023-11-10T14:30:00Z',
                    dataAtualizacao: '2023-11-11T09:15:00Z',
                    categoria: { id: 1, nome: 'Suporte Técnico' },
                    criador: { id: 2, nome: 'Carlos Silva', email: 'carlos@empresa.com', role: 'USUARIO' },
                    atendente: { id: 3, nome: 'Ana Técnica', email: 'ana@empresa.com', role: 'TECNICO' },
                    comentarios: [
                        {
                            id: 1,
                            texto: 'Já tentei limpar o cache do navegador e usar outro dispositivo, mas o problema persiste.',
                            dataCriacao: '2023-11-10T15:40:00Z',
                            usuario: { id: 2, nome: 'Carlos Silva', email: 'carlos@empresa.com', role: 'USUARIO' }
                        },
                        {
                            id: 2,
                            texto: 'Estou investigando o problema. Você poderia me informar qual navegador está usando?',
                            dataCriacao: '2023-11-11T09:15:00Z',
                            usuario: { id: 3, nome: 'Ana Técnica', email: 'ana@empresa.com', role: 'TECNICO' }
                        }
                    ]
                };

                setTicket(mockTicket);
            } catch (err: unknown) {
                console.error('Erro ao buscar ticket:', err);
                setError('Erro ao carregar ticket: ' + ((err as Error).message || 'Erro desconhecido'));
                setIsLoading(false);
            }
        };

        if (isAuthenticated && id) {
            fetchTicket();
        }
    }, [id, isAuthenticated, loading, router]);

    const handleComentarioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNovoComentario(e.target.value);
        setComentarioSuccess(null);
    };

    const handleEnviarComentario = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!novoComentario.trim()) {
            return;
        }

        try {
            setEnviandoComentario(true);

            // Em um ambiente real, enviar para a API
            // await api.post(`/api/tickets/${id}/comentarios`, { texto: novoComentario });

            // Mock para desenvolvimento
            await new Promise(resolve => setTimeout(resolve, 800));

            // Atualizar o estado localmente
            if (ticket && user) {
                const novoObj: Comentario = {
                    id: ticket.comentarios.length + 1,
                    texto: novoComentario,
                    dataCriacao: new Date().toISOString(),
                    usuario: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email,
                        role: user.role
                    }
                };

                setTicket({
                    ...ticket,
                    comentarios: [...ticket.comentarios, novoObj]
                });
            }

            setNovoComentario('');
            setComentarioSuccess('Comentário adicionado com sucesso!');

            // Limpar a mensagem de sucesso após 3 segundos
            setTimeout(() => {
                setComentarioSuccess(null);
            }, 3000);

        } catch (err: unknown) {
            console.error('Erro ao enviar comentário:', err);
            setError('Erro ao enviar comentário: ' + ((err as Error).message || 'Erro desconhecido'));
            setEnviandoComentario(false);
        }
    };

    const atualizarStatusTicket = async (novoStatus: 'ABERTO' | 'EM_ANDAMENTO' | 'RESOLVIDO' | 'FECHADO') => {
        if (!ticket) return;

        try {
            setAtualizandoStatus(true);

            // Em um ambiente real, enviar para a API
            // await api.put(`/api/tickets/${id}`, { status: novoStatus });

            // Mock para desenvolvimento
            await new Promise(resolve => setTimeout(resolve, 800));

            // Atualizar o estado localmente
            setTicket({
                ...ticket,
                status: novoStatus,
                dataAtualizacao: new Date().toISOString()
            });

        } catch (err: unknown) {
            console.error('Erro ao atualizar status:', err);
            setError('Erro ao atualizar status: ' + ((err as Error).message || 'Erro desconhecido'));
            setAtualizandoStatus(false);
        }
    };

    const formatarData = (dataString: string) => {
        const data = new Date(dataString);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(data);
    };

    const obterCorStatus = (status: string) => {
        switch (status) {
            case 'ABERTO':
                return 'bg-blue-100 text-blue-800';
            case 'EM_ANDAMENTO':
                return 'bg-yellow-100 text-yellow-800';
            case 'RESOLVIDO':
                return 'bg-green-100 text-green-800';
            case 'FECHADO':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const obterCorPrioridade = (prioridade: string) => {
        switch (prioridade) {
            case 'BAIXA':
                return 'bg-gray-100 text-gray-800';
            case 'MEDIA':
                return 'bg-blue-100 text-blue-800';
            case 'ALTA':
                return 'bg-orange-100 text-orange-800';
            case 'CRITICA':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const traduzirStatus = (status: string) => {
        switch (status) {
            case 'ABERTO':
                return 'Aberto';
            case 'EM_ANDAMENTO':
                return 'Em Andamento';
            case 'RESOLVIDO':
                return 'Resolvido';
            case 'FECHADO':
                return 'Fechado';
            default:
                return status;
        }
    };

    const traduzirPrioridade = (prioridade: string) => {
        switch (prioridade) {
            case 'BAIXA':
                return 'Baixa';
            case 'MEDIA':
                return 'Média';
            case 'ALTA':
                return 'Alta';
            case 'CRITICA':
                return 'Crítica';
            default:
                return prioridade;
        }
    };

    if (loading || isLoading) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-4xl">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                        <span className="ml-3 text-lg text-gray-700">Carregando detalhes do ticket...</span>
                    </div>
                </div>
            </MainLayout>
        );
    }

    if (!isAuthenticated) {
        return null; // Redirecionando para login no useEffect
    }

    if (error) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-4xl">
                    <Alert variant="error" message={error} className="mb-4" />
                    <Button onClick={() => router.push('/tickets')} variant="secondary">
                        Voltar para Tickets
                    </Button>
                </div>
            </MainLayout>
        );
    }

    if (!ticket) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-4xl">
                    <Alert variant="error" message="Ticket não encontrado" className="mb-4" />
                    <Button onClick={() => router.push('/tickets')} variant="secondary">
                        Voltar para Tickets
                    </Button>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="container mx-auto p-4 max-w-4xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Ticket #{ticket.id}</h1>
                    <div className="flex space-x-2">
                        {user?.role === 'ADMIN' || user?.role === 'TECNICO' || user?.id === ticket.criador.id ? (
                            <Button
                                onClick={() => router.push(`/tickets/editar/${ticket.id}`)}
                                variant="secondary"
                                className="mr-2"
                            >
                                Editar Ticket
                            </Button>
                        ) : null}
                        <Button
                            onClick={() => router.push('/tickets')}
                            variant="secondary"
                        >
                            Voltar para Tickets
                        </Button>
                    </div>
                </div>

                <Card className="mb-6 p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{ticket.titulo}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Status:</span>
                                    <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${obterCorStatus(ticket.status)}`}>
                                        {traduzirStatus(ticket.status)}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Prioridade:</span>
                                    <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${obterCorPrioridade(ticket.prioridade)}`}>
                                        {traduzirPrioridade(ticket.prioridade)}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Categoria:</span>
                                    <span className="ml-2 text-sm text-gray-900">{ticket.categoria.nome}</span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Criado por:</span>
                                    <span className="ml-2 text-sm text-gray-900">{ticket.criador.nome}</span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Atendente:</span>
                                    <span className="ml-2 text-sm text-gray-900">
                                        {ticket.atendente ? ticket.atendente.nome : 'Não atribuído'}
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <span className="text-sm font-medium text-gray-500">Data de criação:</span>
                                    <span className="ml-2 text-sm text-gray-900">{formatarData(ticket.dataCriacao)}</span>
                                </div>
                                {ticket.dataAtualizacao && (
                                    <div className="mb-3">
                                        <span className="text-sm font-medium text-gray-500">Última atualização:</span>
                                        <span className="ml-2 text-sm text-gray-900">{formatarData(ticket.dataAtualizacao)}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">Descrição:</h3>
                            <div className="text-sm text-gray-900 bg-gray-50 p-4 rounded-md whitespace-pre-line">
                                {ticket.descricao}
                            </div>
                        </div>

                        {(user?.role === 'ADMIN' || user?.role === 'TECNICO') && (
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-500 mb-2">Atualizar Status:</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        onClick={() => atualizarStatusTicket('ABERTO')}
                                        variant={ticket.status === 'ABERTO' ? 'primary' : 'secondary'}
                                        className="text-xs"
                                        disabled={atualizandoStatus || ticket.status === 'ABERTO'}
                                    >
                                        Aberto
                                    </Button>
                                    <Button
                                        onClick={() => atualizarStatusTicket('EM_ANDAMENTO')}
                                        variant={ticket.status === 'EM_ANDAMENTO' ? 'primary' : 'secondary'}
                                        className="text-xs"
                                        disabled={atualizandoStatus || ticket.status === 'EM_ANDAMENTO'}
                                    >
                                        Em Andamento
                                    </Button>
                                    <Button
                                        onClick={() => atualizarStatusTicket('RESOLVIDO')}
                                        variant={ticket.status === 'RESOLVIDO' ? 'primary' : 'secondary'}
                                        className="text-xs"
                                        disabled={atualizandoStatus || ticket.status === 'RESOLVIDO'}
                                    >
                                        Resolvido
                                    </Button>
                                    <Button
                                        onClick={() => atualizarStatusTicket('FECHADO')}
                                        variant={ticket.status === 'FECHADO' ? 'primary' : 'secondary'}
                                        className="text-xs"
                                        disabled={atualizandoStatus || ticket.status === 'FECHADO'}
                                    >
                                        Fechado
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>

                <Card className="mb-6 p-6">
                    <h3 className="text-lg font-semibold mb-4">Comentários ({ticket.comentarios.length})</h3>

                    <div className="mb-6">
                        {ticket.comentarios.length > 0 ? (
                            <div className="space-y-4">
                                {ticket.comentarios.map((comentario) => (
                                    <div key={comentario.id} className="border-l-4 border-blue-500 pl-4 py-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-medium text-gray-900">{comentario.usuario.nome}</span>
                                            <span className="text-xs text-gray-500">{formatarData(comentario.dataCriacao)}</span>
                                        </div>
                                        <p className="text-gray-700 whitespace-pre-line">{comentario.texto}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-6 text-gray-500">
                                Ainda não há comentários para este ticket.
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleEnviarComentario}>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Adicionar comentário:</h4>
                        <Textarea
                            value={novoComentario}
                            onChange={handleComentarioChange}
                            rows={4}
                            placeholder="Digite seu comentário aqui..."
                            className="mb-3"
                        />

                        {comentarioSuccess && (
                            <Alert variant="success" message={comentarioSuccess} className="mb-3" />
                        )}

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={enviandoComentario || !novoComentario.trim()}
                            >
                                {enviandoComentario ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                        Enviando...
                                    </div>
                                ) : 'Enviar Comentário'}
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </MainLayout>
    );
} 