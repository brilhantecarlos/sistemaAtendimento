'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';

interface Estatisticas {
    periodo: {
        inicio: string;
        fim: string;
    };
    totais: {
        totalSenhas: number;
        senhasAtendidas: number;
        senhasEmAtendimento: number;
        senhasNaoAtendidas: number;
        senhasDesistencia: number;
        senhasSP: number;
        senhasSG: number;
        senhasSE: number;
    };
    tempoMedio: {
        geral: number;
        SP: number;
        SG: number;
        SE: number;
        espera: number;
    };
    porHora: Array<{
        hora: string;
        total: number;
        SP: number;
        SG: number;
        SE: number;
    }>;
}

export default function RelatoriosPage() {
    const router = useRouter();
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [estatisticas, setEstatisticas] = useState<Estatisticas | null>(null);
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState<{ tipo: 'success' | 'error'; texto: string } | null>(null);

    // Definir data de hoje como padrão ao montar o componente
    useEffect(() => {
        const hoje = new Date().toISOString().split('T')[0];
        setDataInicio(hoje);
        setDataFim(hoje);

        // Carregar estatísticas iniciais
        buscarEstatisticas(hoje, hoje);
    }, []);

    // Função para buscar estatísticas
    const buscarEstatisticas = async (inicio: string, fim: string) => {
        try {
            setCarregando(true);

            // Construir URL com parâmetros
            const params = new URLSearchParams();
            if (inicio) params.append('dataInicio', inicio);
            if (fim) params.append('dataFim', fim);

            // Fazer requisição à API
            const resposta = await fetch(`/api/senhas/estatisticas?${params.toString()}`);

            if (!resposta.ok) {
                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao buscar estatísticas');
            }

            const dados = await resposta.json();
            setEstatisticas(dados);
        } catch (error) {
            console.error('Erro ao buscar estatísticas:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao buscar estatísticas'
            });
        } finally {
            setCarregando(false);
        }
    };

    // Formatar segundos para o formato mm:ss
    const formatarTempo = (segundos: number): string => {
        const minutos = Math.floor(segundos / 60);
        const segs = segundos % 60;
        return `${minutos}:${segs.toString().padStart(2, '0')}`;
    };

    // Handler para o formulário de filtro
    const handleSubmitFiltro = (e: React.FormEvent) => {
        e.preventDefault();
        buscarEstatisticas(dataInicio, dataFim);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Relatórios de Atendimento</h1>
                    <Button
                        onClick={() => router.push('/')}
                        variant="secondary"
                    >
                        Voltar para Início
                    </Button>
                </div>

                {mensagem && (
                    <Alert
                        variant={mensagem.tipo}
                        message={mensagem.texto}
                        className="mb-6"
                        onClose={() => setMensagem(null)}
                    />
                )}

                {/* Formulário de Filtro */}
                <Card className="mb-6">
                    <h2 className="text-lg font-semibold mb-4">Filtros</h2>

                    <form onSubmit={handleSubmitFiltro} className="flex flex-wrap gap-4 items-end">
                        <div className="w-full md:w-auto flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Data Início
                            </label>
                            <Input
                                type="date"
                                value={dataInicio}
                                onChange={(e) => setDataInicio(e.target.value)}
                            />
                        </div>

                        <div className="w-full md:w-auto flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Data Fim
                            </label>
                            <Input
                                type="date"
                                value={dataFim}
                                onChange={(e) => setDataFim(e.target.value)}
                            />
                        </div>

                        <div className="w-full md:w-auto">
                            <Button
                                type="submit"
                                disabled={carregando}
                                isLoading={carregando}
                            >
                                Filtrar
                            </Button>
                        </div>
                    </form>
                </Card>

                {/* Resultados */}
                {carregando ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    </div>
                ) : estatisticas ? (
                    <div className="space-y-6">
                        {/* Totais */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Card className="p-4">
                                <h3 className="text-gray-500 font-medium mb-1">Total de Senhas</h3>
                                <p className="text-3xl font-bold">{estatisticas.totais.totalSenhas}</p>
                            </Card>

                            <Card className="p-4">
                                <h3 className="text-gray-500 font-medium mb-1">Atendidas</h3>
                                <p className="text-3xl font-bold text-green-600">{estatisticas.totais.senhasAtendidas}</p>
                                <p className="text-sm text-gray-500">
                                    {estatisticas.totais.totalSenhas > 0
                                        ? `${Math.round((estatisticas.totais.senhasAtendidas / estatisticas.totais.totalSenhas) * 100)}%`
                                        : '0%'}
                                </p>
                            </Card>

                            <Card className="p-4">
                                <h3 className="text-gray-500 font-medium mb-1">Em Atendimento</h3>
                                <p className="text-3xl font-bold text-blue-600">{estatisticas.totais.senhasEmAtendimento}</p>
                            </Card>

                            <Card className="p-4">
                                <h3 className="text-gray-500 font-medium mb-1">Desistências</h3>
                                <p className="text-3xl font-bold text-red-600">{estatisticas.totais.senhasDesistencia}</p>
                                <p className="text-sm text-gray-500">
                                    {estatisticas.totais.totalSenhas > 0
                                        ? `${Math.round((estatisticas.totais.senhasDesistencia / estatisticas.totais.totalSenhas) * 100)}%`
                                        : '0%'}
                                </p>
                            </Card>
                        </div>

                        {/* Tipos de Senha */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Distribuição por Tipo de Senha</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className="p-4 border-l-4 border-red-500">
                                    <h4 className="text-gray-600 font-medium mb-1">Prioritárias (SP)</h4>
                                    <p className="text-2xl font-bold">{estatisticas.totais.senhasSP}</p>
                                    <p className="text-sm text-gray-500">
                                        {estatisticas.totais.totalSenhas > 0
                                            ? `${Math.round((estatisticas.totais.senhasSP / estatisticas.totais.totalSenhas) * 100)}%`
                                            : '0%'}
                                    </p>
                                </Card>

                                <Card className="p-4 border-l-4 border-blue-500">
                                    <h4 className="text-gray-600 font-medium mb-1">Gerais (SG)</h4>
                                    <p className="text-2xl font-bold">{estatisticas.totais.senhasSG}</p>
                                    <p className="text-sm text-gray-500">
                                        {estatisticas.totais.totalSenhas > 0
                                            ? `${Math.round((estatisticas.totais.senhasSG / estatisticas.totais.totalSenhas) * 100)}%`
                                            : '0%'}
                                    </p>
                                </Card>

                                <Card className="p-4 border-l-4 border-green-500">
                                    <h4 className="text-gray-600 font-medium mb-1">Exames (SE)</h4>
                                    <p className="text-2xl font-bold">{estatisticas.totais.senhasSE}</p>
                                    <p className="text-sm text-gray-500">
                                        {estatisticas.totais.totalSenhas > 0
                                            ? `${Math.round((estatisticas.totais.senhasSE / estatisticas.totais.totalSenhas) * 100)}%`
                                            : '0%'}
                                    </p>
                                </Card>
                            </div>
                        </Card>

                        {/* Tempos Médios */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Tempos Médios</h3>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                <Card className="p-4">
                                    <h4 className="text-gray-600 font-medium mb-1">Geral</h4>
                                    <p className="text-2xl font-bold">{formatarTempo(estatisticas.tempoMedio.geral)}</p>
                                    <p className="text-xs text-gray-500">minutos:segundos</p>
                                </Card>

                                <Card className="p-4">
                                    <h4 className="text-gray-600 font-medium mb-1">Prioritárias</h4>
                                    <p className="text-2xl font-bold">{formatarTempo(estatisticas.tempoMedio.SP)}</p>
                                    <p className="text-xs text-gray-500">minutos:segundos</p>
                                </Card>

                                <Card className="p-4">
                                    <h4 className="text-gray-600 font-medium mb-1">Gerais</h4>
                                    <p className="text-2xl font-bold">{formatarTempo(estatisticas.tempoMedio.SG)}</p>
                                    <p className="text-xs text-gray-500">minutos:segundos</p>
                                </Card>

                                <Card className="p-4">
                                    <h4 className="text-gray-600 font-medium mb-1">Exames</h4>
                                    <p className="text-2xl font-bold">{formatarTempo(estatisticas.tempoMedio.SE)}</p>
                                    <p className="text-xs text-gray-500">minutos:segundos</p>
                                </Card>

                                <Card className="p-4">
                                    <h4 className="text-gray-600 font-medium mb-1">Espera</h4>
                                    <p className="text-2xl font-bold">{formatarTempo(estatisticas.tempoMedio.espera)}</p>
                                    <p className="text-xs text-gray-500">minutos:segundos</p>
                                </Card>
                            </div>
                        </Card>

                        {/* Distribuição por Hora */}
                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Distribuição por Hora do Dia</h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hora
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Total
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Prioritárias
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Gerais
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Exames
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {estatisticas.porHora.map((hora, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {hora.hora}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {hora.total}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {hora.SP}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {hora.SG}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {hora.SE}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>
                ) : (
                    <div className="text-center py-10">
                        <p className="text-gray-500">Nenhum dado disponível. Selecione um período e clique em &quot;Filtrar&quot;.</p>
                    </div>
                )}
            </div>
        </div>
    );
} 