'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';

interface Categoria {
    id: number;
    nome: string;
}

export default function CriarTicket() {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        categoriaId: '',
        prioridade: 'MEDIA'
    });

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingCategorias, setLoadingCategorias] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
            return;
        }

        const fetchCategorias = async () => {
            try {
                setLoadingCategorias(true);

                // Em um ambiente real, buscar da API
                // const data = await fetchApi('/api/categorias');
                // setCategorias(data);

                // Mock para desenvolvimento
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockCategorias = [
                    { id: 1, nome: 'Suporte Técnico' },
                    { id: 2, nome: 'Financeiro' },
                    { id: 3, nome: 'Comercial' },
                    { id: 4, nome: 'Recursos Humanos' },
                    { id: 5, nome: 'Desenvolvimento' }
                ];

                setCategorias(mockCategorias);
            } catch (err: unknown) {
                console.error('Erro ao buscar categorias:', err);
                setError('Erro ao carregar categorias: ' + ((err as Error).message || 'Erro desconhecido'));
            } finally {
                setLoadingCategorias(false);
            }
        };

        if (isAuthenticated) {
            fetchCategorias();
        }
    }, [isAuthenticated, loading, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.titulo.trim()) {
            setError('O título é obrigatório');
            return;
        }

        if (!formData.descricao.trim()) {
            setError('A descrição é obrigatória');
            return;
        }

        if (!formData.categoriaId) {
            setError('Selecione uma categoria');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            // Em um ambiente real, enviar para a API
            // await api.post('/api/tickets', formData);

            // Mock para desenvolvimento
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSuccess('Ticket criado com sucesso!');

            // Redirecionar após um breve intervalo
            setTimeout(() => {
                router.push('/tickets');
            }, 2000);

        } catch (err: unknown) {
            console.error('Erro ao criar ticket:', err);
            setError('Erro ao criar ticket: ' + ((err as Error).message || 'Erro desconhecido'));
        } finally {
            setIsLoading(false);
        }
    };

    if (loading || (loadingCategorias && isAuthenticated)) {
        return (
            <MainLayout>
                <div className="container mx-auto p-4 max-w-3xl">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                        <span className="ml-3 text-lg text-gray-700">Carregando...</span>
                    </div>
                </div>
            </MainLayout>
        );
    }

    if (!isAuthenticated) {
        return null; // Redirecionando para login no useEffect
    }

    return (
        <MainLayout>
            <div className="container mx-auto p-4 max-w-3xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Criar Novo Ticket</h1>
                    <Button
                        onClick={() => router.push('/tickets')}
                        variant="secondary"
                    >
                        Voltar
                    </Button>
                </div>

                {error && <Alert variant="error" message={error} className="mb-4" />}
                {success && <Alert variant="success" message={success} className="mb-4" />}

                <Card className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                                    Título *
                                </label>
                                <Input
                                    id="titulo"
                                    name="titulo"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    placeholder="Digite um título para o ticket"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                                    Descrição *
                                </label>
                                <Textarea
                                    id="descricao"
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    placeholder="Descreva detalhadamente o problema ou solicitação"
                                    rows={5}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="categoriaId" className="block text-sm font-medium text-gray-700 mb-1">
                                    Categoria *
                                </label>
                                <Select
                                    id="categoriaId"
                                    name="categoriaId"
                                    value={formData.categoriaId}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione uma categoria</option>
                                    {categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>
                                            {categoria.nome}
                                        </option>
                                    ))}
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="prioridade" className="block text-sm font-medium text-gray-700 mb-1">
                                    Prioridade
                                </label>
                                <Select
                                    id="prioridade"
                                    name="prioridade"
                                    value={formData.prioridade}
                                    onChange={handleChange}
                                >
                                    <option value="BAIXA">Baixa</option>
                                    <option value="MEDIA">Média</option>
                                    <option value="ALTA">Alta</option>
                                    <option value="CRITICA">Crítica</option>
                                </Select>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                                            Criando Ticket...
                                        </div>
                                    ) : 'Criar Ticket'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </MainLayout>
    );
} 