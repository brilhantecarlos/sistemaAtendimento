'use client';

import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Alert from '@/components/ui/Alert';

interface Stats {
    totalSenhas: number;
    senhasAtendidas: number;
    senhasEmAtendimento: number;
    senhasNaoAtendidas: number;
}

interface RecentSenha {
    id: number;
    codigo: string;
    status: string;
    tipo: string;
    dataCriacao: string;
}

export default function DashboardPage() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [recentSenhas, setRecentSenhas] = useState<RecentSenha[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setIsLoading(true);

                // Buscar estatísticas de senhas
                const resEstatisticas = await fetch('/api/senhas/estatisticas');
                if (!resEstatisticas.ok) {
                    throw new Error('Erro ao buscar estatísticas');
                }

                const estatisticas = await resEstatisticas.json();

                const mockStats: Stats = {
                    totalSenhas: estatisticas.totais?.totalSenhas || 0,
                    senhasAtendidas: estatisticas.totais?.senhasAtendidas || 0,
                    senhasEmAtendimento: estatisticas.totais?.senhasEmAtendimento || 0,
                    senhasNaoAtendidas: estatisticas.totais?.senhasNaoAtendidas || 0,
                };

                // Buscar senhas recentes
                const resSenhas = await fetch('/api/senhas?limit=5');
                if (!resSenhas.ok) {
                    throw new Error('Erro ao buscar senhas recentes');
                }

                const senhas = await resSenhas.json();

                setStats(mockStats);
                setRecentSenhas(senhas || []);
            } catch (err) {
                console.error('Erro ao buscar dados do dashboard:', err);
                setError('Erro ao carregar os dados do dashboard');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'NAO_ATENDIDA':
                return 'bg-yellow-100 text-yellow-800';
            case 'EM_ATENDIMENTO':
                return 'bg-blue-100 text-blue-800';
            case 'ATENDIDA':
                return 'bg-green-100 text-green-800';
            case 'DESISTENCIA':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTipoColor = (tipo: string) => {
        switch (tipo) {
            case 'SP':
                return 'bg-red-100 text-red-800';
            case 'SG':
                return 'bg-blue-100 text-blue-800';
            case 'SE':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };

    return (
        <MainLayout>
            <div className="py-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                    Dashboard
                </h1>

                {error && (
                    <Alert
                        variant="error"
                        message={error}
                        className="mb-6"
                        onClose={() => setError(null)}
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-white">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Total de Senhas</h3>
                            <p className="mt-2 text-3xl font-semibold text-blue-600">
                                {isLoading ? '...' : stats?.totalSenhas}
                            </p>
                        </div>
                    </Card>

                    <Card className="bg-white">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Senhas Atendidas</h3>
                            <p className="mt-2 text-3xl font-semibold text-green-600">
                                {isLoading ? '...' : stats?.senhasAtendidas}
                            </p>
                        </div>
                    </Card>

                    <Card className="bg-white">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Em Atendimento</h3>
                            <p className="mt-2 text-3xl font-semibold text-blue-600">
                                {isLoading ? '...' : stats?.senhasEmAtendimento}
                            </p>
                        </div>
                    </Card>

                    <Card className="bg-white">
                        <div className="text-center">
                            <h3 className="text-lg font-medium text-gray-900">Não Atendidas</h3>
                            <p className="mt-2 text-3xl font-semibold text-yellow-600">
                                {isLoading ? '...' : stats?.senhasNaoAtendidas}
                            </p>
                        </div>
                    </Card>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Senhas Recentes
                    </h2>

                    {isLoading ? (
                        <div className="text-center py-4">Carregando senhas recentes...</div>
                    ) : recentSenhas.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Código
                                        </th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tipo
                                        </th>
                                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Data de Criação
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {recentSenhas.map((senha) => (
                                        <tr key={senha.id} className="hover:bg-gray-50 cursor-pointer">
                                            <td className="py-3 px-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                #{senha.id}
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-700">
                                                {senha.codigo}
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(senha.status)}`}>
                                                    {senha.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs ${getTipoColor(senha.tipo)}`}>
                                                    {senha.tipo}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 whitespace-nowrap text-sm text-gray-700">
                                                {formatDate(senha.dataCriacao)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center text-gray-500">
                            Nenhuma senha recente encontrada.
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
} 