'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';
import Select from '@/components/ui/Select';

interface Guiche {
    id: number;
    numero: number;
    status: 'DISPONIVEL' | 'OCUPADO' | 'FECHADO';
    ultimaSenha: string | null;
    dataAtualizacao: string;
}

export default function AdminPage() {
    const router = useRouter();
    const [guiches, setGuiches] = useState<Guiche[]>([]);
    const [novoGuicheNumero, setNovoGuicheNumero] = useState('');
    const [carregando, setCarregando] = useState(true);
    const [carregandoAcao, setCarregandoAcao] = useState(false);
    const [mensagem, setMensagem] = useState<{ tipo: 'success' | 'error' | 'warning'; texto: string } | null>(null);
    const [guicheParaEditar, setGuicheParaEditar] = useState<Guiche | null>(null);
    const [novoStatusGuiche, setNovoStatusGuiche] = useState<'DISPONIVEL' | 'OCUPADO' | 'FECHADO'>('DISPONIVEL');

    // Carregar guichês
    useEffect(() => {
        const buscarGuiches = async () => {
            try {
                setCarregando(true);
                const resposta = await fetch('/api/guiches');

                if (!resposta.ok) {
                    throw new Error('Erro ao buscar guichês');
                }

                const dados = await resposta.json();
                setGuiches(dados);
            } catch (error) {
                console.error('Erro ao buscar guichês:', error);
                setMensagem({
                    tipo: 'error',
                    texto: error instanceof Error ? error.message : 'Erro ao carregar guichês'
                });
            } finally {
                setCarregando(false);
            }
        };

        buscarGuiches();
    }, []);

    // Criar novo guichê
    const criarGuiche = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setCarregandoAcao(true);

            if (!novoGuicheNumero || isNaN(parseInt(novoGuicheNumero))) {
                setMensagem({
                    tipo: 'error',
                    texto: 'Número de guichê inválido'
                });
                return;
            }

            const resposta = await fetch('/api/guiches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numero: parseInt(novoGuicheNumero),
                    status: 'DISPONIVEL'
                })
            });

            if (!resposta.ok) {
                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao criar guichê');
            }

            const novoGuiche = await resposta.json();

            setGuiches(prev => [...prev, novoGuiche]);
            setNovoGuicheNumero('');
            setMensagem({
                tipo: 'success',
                texto: `Guichê ${novoGuiche.numero} criado com sucesso!`
            });
        } catch (error) {
            console.error('Erro ao criar guichê:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao criar guichê'
            });
        } finally {
            setCarregandoAcao(false);
        }
    };

    // Atualizar status do guichê
    const atualizarStatusGuiche = async () => {
        if (!guicheParaEditar) return;

        try {
            setCarregandoAcao(true);

            const resposta = await fetch(`/api/guiches/${guicheParaEditar.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: novoStatusGuiche
                })
            });

            if (!resposta.ok) {
                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao atualizar status do guichê');
            }

            const guicheAtualizado = await resposta.json();

            setGuiches(prev => prev.map(g => g.id === guicheAtualizado.id ? guicheAtualizado : g));
            setGuicheParaEditar(null);
            setMensagem({
                tipo: 'success',
                texto: `Status do guichê ${guicheAtualizado.numero} atualizado para ${novoStatusGuiche}`
            });
        } catch (error) {
            console.error('Erro ao atualizar guichê:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao atualizar guichê'
            });
        } finally {
            setCarregandoAcao(false);
        }
    };

    // Remover guichê
    const removerGuiche = async (id: number) => {
        try {
            setCarregandoAcao(true);

            const resposta = await fetch(`/api/guiches/${id}`, {
                method: 'DELETE'
            });

            if (!resposta.ok) {
                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao remover guichê');
            }

            setGuiches(prev => prev.filter(g => g.id !== id));
            setMensagem({
                tipo: 'success',
                texto: 'Guichê removido com sucesso!'
            });
        } catch (error) {
            console.error('Erro ao remover guichê:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao remover guichê'
            });
        } finally {
            setCarregandoAcao(false);
        }
    };

    // Obter classe de cor com base no status
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'DISPONIVEL': return 'bg-green-100 text-green-800';
            case 'OCUPADO': return 'bg-red-100 text-red-800';
            case 'FECHADO': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Administração do Sistema</h1>
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Gerenciamento de Guichês */}
                    <div className="lg:col-span-2">
                        <Card className="mb-6">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900">Gerenciamento de Guichês</h2>

                            {carregando ? (
                                <div className="flex justify-center py-8">
                                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                                </div>
                            ) : guiches.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Número
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Última Senha
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Atualizado em
                                                </th>
                                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Ações
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {guiches.map((guiche) => (
                                                <tr key={guiche.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">Guichê {guiche.numero}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(guiche.status)}`}>
                                                            {guiche.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{guiche.ultimaSenha || 'Nenhuma'}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">
                                                            {new Date(guiche.dataAtualizacao).toLocaleString()}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => {
                                                                setGuicheParaEditar(guiche);
                                                                setNovoStatusGuiche(guiche.status);
                                                            }}
                                                            className="text-blue-600 hover:text-blue-900 mr-3"
                                                        >
                                                            Editar
                                                        </button>
                                                        <button
                                                            onClick={() => removerGuiche(guiche.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                            disabled={guiche.status === 'OCUPADO' || carregandoAcao}
                                                        >
                                                            Remover
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-900">
                                    Nenhum guichê cadastrado. Adicione um novo guichê para começar.
                                </div>
                            )}
                        </Card>

                        {/* Reiniciar Senhas Diárias */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4 text-gray-900">Reiniciar Senhas</h2>
                            <p className="text-gray-900 mb-4">
                                Esta ação reiniciará todas as senhas não atendidas e liberará todos os guichês ocupados.
                                Normalmente, isso deve ser feito ao final do dia de atendimento.
                            </p>

                            <Button
                                variant="danger"
                                onClick={async () => {
                                    if (window.confirm('Tem certeza que deseja reiniciar todas as senhas? Esta ação não pode ser desfeita.')) {
                                        try {
                                            setCarregandoAcao(true);
                                            const resposta = await fetch('/api/senhas/reiniciar', {
                                                method: 'POST'
                                            });

                                            if (!resposta.ok) {
                                                const erro = await resposta.json();
                                                throw new Error(erro.message || 'Erro ao reiniciar senhas');
                                            }

                                            setMensagem({
                                                tipo: 'success',
                                                texto: 'Senhas reiniciadas com sucesso!'
                                            });

                                            // Atualizar guichês
                                            const respostaGuiches = await fetch('/api/guiches');
                                            if (respostaGuiches.ok) {
                                                const guichesAtualizados = await respostaGuiches.json();
                                                setGuiches(guichesAtualizados);
                                            }
                                        } catch (error) {
                                            console.error('Erro ao reiniciar senhas:', error);
                                            setMensagem({
                                                tipo: 'error',
                                                texto: error instanceof Error ? error.message : 'Erro ao reiniciar senhas'
                                            });
                                        } finally {
                                            setCarregandoAcao(false);
                                        }
                                    }
                                }}
                                disabled={carregandoAcao}
                                isLoading={carregandoAcao}
                            >
                                Reiniciar Todas as Senhas
                            </Button>
                        </Card>
                    </div>

                    {/* Formulário Lado Direito */}
                    <div className="lg:col-span-1">
                        {guicheParaEditar ? (
                            <Card>
                                <h2 className="text-xl font-semibold mb-4 text-gray-900">Editar Guichê</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-1">
                                            Número do Guichê
                                        </label>
                                        <Input
                                            type="text"
                                            value={`Guichê ${guicheParaEditar.numero}`}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-1">
                                            Status
                                        </label>
                                        <Select
                                            value={novoStatusGuiche}
                                            onChange={(e) => setNovoStatusGuiche(e.target.value as 'DISPONIVEL' | 'OCUPADO' | 'FECHADO')}
                                        >
                                            <option value="DISPONIVEL">DISPONIVEL</option>
                                            <option value="OCUPADO">OCUPADO</option>
                                            <option value="FECHADO">FECHADO</option>
                                        </Select>
                                    </div>

                                    <div className="flex space-x-2">
                                        <Button
                                            onClick={atualizarStatusGuiche}
                                            disabled={carregandoAcao}
                                            isLoading={carregandoAcao}
                                            className="w-full"
                                        >
                                            Salvar
                                        </Button>
                                        <Button
                                            onClick={() => setGuicheParaEditar(null)}
                                            variant="secondary"
                                            className="w-full"
                                        >
                                            Cancelar
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ) : (
                            <Card>
                                <h2 className="text-xl font-semibold mb-4 text-gray-900">Novo Guichê</h2>
                                <form onSubmit={criarGuiche} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-1">
                                            Número do Guichê
                                        </label>
                                        <Input
                                            type="number"
                                            min="1"
                                            max="99"
                                            value={novoGuicheNumero}
                                            onChange={(e) => setNovoGuicheNumero(e.target.value)}
                                            placeholder="Ex: 1"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={carregandoAcao || !novoGuicheNumero}
                                        isLoading={carregandoAcao}
                                        className="w-full"
                                    >
                                        Adicionar Guichê
                                    </Button>
                                </form>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 