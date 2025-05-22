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

interface Especialidade {
    id: number;
    nome: string;
}

export default function NovoAtendimento() {
    const { isAuthenticated, loading } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        nomePaciente: '',
        descricao: '',
        especialidadeId: '',
        urgencia: 'MEDIA'
    });

    const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingEspecialidades, setLoadingEspecialidades] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
            return;
        }

        const fetchEspecialidades = async () => {
            try {
                setLoadingEspecialidades(true);

                // Em ambiente real, buscar da API
                // const response = await api.get('/api/especialidades');
                // setEspecialidades(response.data);

                // Mock para desenvolvimento
                await new Promise(resolve => setTimeout(resolve, 800));

                const mockEspecialidades = [
                    { id: 1, nome: 'Clínica Geral' },
                    { id: 2, nome: 'Pediatria' },
                    { id: 3, nome: 'Ortopedia' },
                    { id: 4, nome: 'Cardiologia' },
                    { id: 5, nome: 'Neurologia' }
                ];

                setEspecialidades(mockEspecialidades);
            } catch (err: unknown) {
                console.error('Erro ao buscar especialidades:', err);
                setError('Erro ao carregar especialidades: ' + ((err as Error).message || 'Erro desconhecido'));
            } finally {
                setLoadingEspecialidades(false);
            }
        };

        if (isAuthenticated) {
            fetchEspecialidades();
        }
    }, [isAuthenticated, loading, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nomePaciente.trim()) {
            setError('O nome do paciente é obrigatório');
            return;
        }

        if (!formData.descricao.trim()) {
            setError('A descrição dos sintomas é obrigatória');
            return;
        }

        if (!formData.especialidadeId) {
            setError('Selecione uma especialidade médica');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);

            // Em ambiente real, enviar para a API
            // await api.post('/api/atendimentos', formData);

            // Mock para desenvolvimento
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSuccess('Atendimento registrado com sucesso!');

            // Redirecionar após um breve intervalo
            setTimeout(() => {
                router.push('/tickets');
            }, 2000);

        } catch (err: unknown) {
            console.error('Erro ao registrar atendimento:', err);
            setError('Erro ao registrar atendimento: ' + ((err as Error).message || 'Erro desconhecido'));
        } finally {
            setIsLoading(false);
        }
    };

    if (loading || (loadingEspecialidades && isAuthenticated)) {
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
                    <h1 className="text-2xl font-bold">Registrar Novo Atendimento</h1>
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
                                <label htmlFor="nomePaciente" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome do Paciente *
                                </label>
                                <Input
                                    id="nomePaciente"
                                    name="nomePaciente"
                                    value={formData.nomePaciente}
                                    onChange={handleChange}
                                    placeholder="Digite o nome completo do paciente"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                                    Descrição dos Sintomas *
                                </label>
                                <Textarea
                                    id="descricao"
                                    name="descricao"
                                    value={formData.descricao}
                                    onChange={handleChange}
                                    placeholder="Descreva detalhadamente os sintomas e queixas do paciente"
                                    rows={5}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="especialidadeId" className="block text-sm font-medium text-gray-700 mb-1">
                                    Especialidade Médica *
                                </label>
                                <Select
                                    id="especialidadeId"
                                    name="especialidadeId"
                                    value={formData.especialidadeId}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione uma especialidade</option>
                                    {especialidades.map(especialidade => (
                                        <option key={especialidade.id} value={especialidade.id}>
                                            {especialidade.nome}
                                        </option>
                                    ))}
                                </Select>
                            </div>

                            <div>
                                <label htmlFor="urgencia" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nível de Urgência
                                </label>
                                <Select
                                    id="urgencia"
                                    name="urgencia"
                                    value={formData.urgencia}
                                    onChange={handleChange}
                                >
                                    <option value="BAIXA">Baixa</option>
                                    <option value="MEDIA">Média</option>
                                    <option value="ALTA">Alta</option>
                                    <option value="EMERGENCIA">Emergência</option>
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
                                            Registrando Atendimento...
                                        </div>
                                    ) : 'Registrar Atendimento'}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Card>
            </div>
        </MainLayout>
    );
} 