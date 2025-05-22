'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Select from '@/components/ui/Select';

interface Senha {
    id: number;
    codigo: string;
    tipo: 'SP' | 'SG' | 'SE';
    dataCriacao: string;
    dataChamada?: string | null;
    guiche?: string | null;
    tempoAtendimento?: number | null;
    status: 'NAO_ATENDIDA' | 'EM_ATENDIMENTO' | 'ATENDIDA' | 'DESISTENCIA';
}

interface SenhaEmAtendimento {
    senha: Senha;
    guiche: string;
    inicio: Date;
    tempoEstimado: number;
}

export default function AtendentePage() {
    const router = useRouter();
    const [senhasEmEspera, setSenhasEmEspera] = useState<Senha[]>([]);
    const [senhaAtual, setSenhaAtual] = useState<SenhaEmAtendimento | null>(null);
    const [guicheSelecionado, setGuicheSelecionado] = useState('1');
    const [carregando, setCarregando] = useState(true);
    const [carregandoAcao, setCarregandoAcao] = useState(false);
    const [mensagem, setMensagem] = useState<{ tipo: 'success' | 'error' | 'warning'; texto: string } | null>(null);
    const [horarioFuncionamento, setHorarioFuncionamento] = useState<boolean>(true);
    const [senhasAtendidas, setSenhasAtendidas] = useState<Senha[]>([]);
    const [atualizandoLista, setAtualizandoLista] = useState(false);

    useEffect(() => {
        const verificarHorario = () => {
            const agora = new Date();
            const hora = agora.getHours();
            const emHorarioFuncionamento = hora >= 7 && hora < 17;
            setHorarioFuncionamento(emHorarioFuncionamento);
        };

        verificarHorario();
        const intervalo = setInterval(verificarHorario, 60000);

        return () => clearInterval(intervalo);
    }, []);

    const buscarSenhas = useCallback(async () => {
        try {
            setAtualizandoLista(true);

            const respostaNaoAtendidas = await fetch('/api/senhas?status=NAO_ATENDIDA');
            if (!respostaNaoAtendidas.ok) {
                throw new Error('Erro ao buscar senhas em espera');
            }
            const senhasNaoAtendidas = await respostaNaoAtendidas.json();
            setSenhasEmEspera(senhasNaoAtendidas);

            const respostaEmAtendimento = await fetch(`/api/senhas?status=EM_ATENDIMENTO&guiche=Guichê ${guicheSelecionado}`);
            if (!respostaEmAtendimento.ok) {
                throw new Error('Erro ao buscar senha em atendimento');
            }
            const senhasEmAtendimento = await respostaEmAtendimento.json();

            if (senhasEmAtendimento.length > 0) {
                const senhaAtualDoGuiche = senhasEmAtendimento[0];
                setSenhaAtual({
                    senha: senhaAtualDoGuiche,
                    guiche: `Guichê ${guicheSelecionado}`,
                    inicio: senhaAtualDoGuiche.dataChamada ? new Date(senhaAtualDoGuiche.dataChamada) : new Date(),
                    tempoEstimado: calcularTempoAtendimento(senhaAtualDoGuiche.tipo) * 60
                });
            } else if (senhaAtual) {
                setSenhaAtual(null);
            }

            const hoje = new Date().toISOString().split('T')[0];
            const respostaAtendidas = await fetch(`/api/senhas?status=ATENDIDA&data=${hoje}`);
            if (!respostaAtendidas.ok) {
                throw new Error('Erro ao buscar senhas atendidas');
            }
            const todasSenhasAtendidas = await respostaAtendidas.json();
            setSenhasAtendidas(todasSenhasAtendidas.slice(0, 5));

        } catch (error) {
            console.error('Erro ao buscar senhas:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao carregar senhas.'
            });
        } finally {
            setCarregando(false);
            setAtualizandoLista(false);
        }
    }, [guicheSelecionado, senhaAtual]);

    useEffect(() => {
        buscarSenhas();

        const intervalo = setInterval(() => {
            buscarSenhas();
        }, 60000);

        return () => clearInterval(intervalo);
    }, [buscarSenhas]);

    const calcularTempoAtendimento = (tipo: 'SP' | 'SG' | 'SE'): number => {
        switch (tipo) {
            case 'SP': return 15;
            case 'SG': return 5;
            case 'SE': return 1;
            default: return 5;
        }
    };

    const chamarProximaSenha = async () => {
        if (!horarioFuncionamento) {
            setMensagem({
                tipo: 'warning',
                texto: 'Fora do horário de atendimento (7h às 17h)'
            });
            return;
        }

        if (senhaAtual) {
            setMensagem({
                tipo: 'warning',
                texto: 'Finalize o atendimento atual antes de chamar nova senha.'
            });
            return;
        }

        try {
            setCarregandoAcao(true);

            // Chamar próxima senha via API
            const resposta = await fetch('/api/senhas/proxima', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ guiche: `Guichê ${guicheSelecionado}` })
            });

            if (!resposta.ok) {
                if (resposta.status === 404) {
                    setMensagem({
                        tipo: 'warning',
                        texto: 'Não há senhas em espera.'
                    });
                    return;
                }

                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao chamar próxima senha');
            }

            const proximaSenha = await resposta.json();

            // Atualizar estado
            setSenhaAtual({
                senha: proximaSenha,
                guiche: `Guichê ${guicheSelecionado}`,
                inicio: new Date(),
                tempoEstimado: calcularTempoAtendimento(proximaSenha.tipo) * 60 // convertendo para segundos
            });

            // Remover da lista de espera
            setSenhasEmEspera(prev => prev.filter(s => s.codigo !== proximaSenha.codigo));

            setMensagem({
                tipo: 'success',
                texto: `Senha ${proximaSenha.codigo} chamada com sucesso!`
            });

            // Atualizar lista de senhas após chamar
            await buscarSenhas();

        } catch (error) {
            console.error('Erro ao chamar próxima senha:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao chamar próxima senha.'
            });
        } finally {
            setCarregandoAcao(false);
        }
    };

    // Finalizar atendimento atual
    const finalizarAtendimento = async () => {
        if (!senhaAtual) {
            setMensagem({
                tipo: 'warning',
                texto: 'Não há senha em atendimento para finalizar.'
            });
            return;
        }

        try {
            setCarregandoAcao(true);

            // Calcular tempo de atendimento em segundos
            const inicio = senhaAtual.inicio;
            const fim = new Date();
            const tempoAtendimento = Math.round((fim.getTime() - inicio.getTime()) / 1000);

            // Atualizar status da senha via API
            const resposta = await fetch(`/api/senhas/${senhaAtual.senha.codigo}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: 'ATENDIDA',
                    tempoAtendimento
                })
            });

            if (!resposta.ok) {
                const erro = await resposta.json();
                throw new Error(erro.message || 'Erro ao finalizar atendimento');
            }

            const senhaFinalizada = await resposta.json();

            // Atualizar lista de senhas atendidas
            setSenhasAtendidas(prev => [senhaFinalizada, ...prev].slice(0, 5));

            // Limpar senha atual
            setSenhaAtual(null);

            setMensagem({
                tipo: 'success',
                texto: `Atendimento da senha ${senhaFinalizada.codigo} finalizado com sucesso!`
            });

            // Atualizar lista de senhas
            await buscarSenhas();

        } catch (error) {
            console.error('Erro ao finalizar atendimento:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao finalizar atendimento.'
            });
        } finally {
            setCarregandoAcao(false);
        }
    };

    // Calcular tempo restante estimado
    const calcularTempoRestante = (): string => {
        if (!senhaAtual) return '00:00';

        const agora = new Date();
        const inicio = senhaAtual.inicio;
        const tempoDecorrido = Math.round((agora.getTime() - inicio.getTime()) / 1000); // em segundos
        const tempoRestante = Math.max(0, senhaAtual.tempoEstimado - tempoDecorrido);

        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;

        return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Atendimento ao Cliente</h1>
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

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Coluna do Atendente */}
                    <div className="md:col-span-1">
                        <Card className="mb-6">
                            <h2 className="text-lg font-semibold mb-4">Configuração</h2>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Guichê:
                                </label>
                                <Select
                                    value={guicheSelecionado}
                                    onChange={(e) => setGuicheSelecionado(e.target.value)}
                                    disabled={!!senhaAtual || carregandoAcao}
                                >
                                    <option value="1">Guichê 1</option>
                                    <option value="2">Guichê 2</option>
                                    <option value="3">Guichê 3</option>
                                    <option value="4">Guichê 4</option>
                                    <option value="5">Guichê 5</option>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Button
                                    onClick={chamarProximaSenha}
                                    disabled={!horarioFuncionamento || !!senhaAtual || carregandoAcao || senhasEmEspera.length === 0}
                                    isLoading={carregandoAcao}
                                >
                                    Chamar Próxima Senha
                                </Button>

                                <Button
                                    onClick={finalizarAtendimento}
                                    disabled={!senhaAtual || carregandoAcao}
                                    isLoading={carregandoAcao}
                                    variant="success"
                                >
                                    Finalizar Atendimento
                                </Button>

                                <Button
                                    onClick={buscarSenhas}
                                    disabled={atualizandoLista}
                                    isLoading={atualizandoLista}
                                    variant="secondary"
                                >
                                    Atualizar Lista
                                </Button>
                            </div>
                        </Card>

                        <Card>
                            <h2 className="text-lg font-semibold mb-4">Últimos Atendimentos</h2>

                            {senhasAtendidas.length === 0 ? (
                                <p className="text-gray-500 text-sm">Nenhum atendimento finalizado hoje.</p>
                            ) : (
                                <div className="space-y-2">
                                    {senhasAtendidas.map((senha, index) => (
                                        <div
                                            key={index}
                                            className="p-2 bg-gray-50 rounded border border-gray-200 text-sm"
                                        >
                                            <div className="font-medium">{senha.codigo}</div>
                                            <div className="text-xs text-gray-500">
                                                Atendido em: {senha.guiche} •
                                                Tempo: {senha.tempoAtendimento ? `${Math.floor(senha.tempoAtendimento / 60)}:${(senha.tempoAtendimento % 60).toString().padStart(2, '0')}` : 'N/A'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </div>

                    {/* Coluna do Atendimento Atual */}
                    <div className="md:col-span-2">
                        <Card className="h-full">
                            <h2 className="text-lg font-semibold mb-4">Atendimento Atual</h2>

                            {senhaAtual ? (
                                <div className="flex flex-col items-center justify-center h-full py-8">
                                    <div className="text-lg mb-2">Senha:</div>
                                    <div className="text-5xl font-bold mb-4">{senhaAtual.senha.codigo}</div>

                                    <div className="mb-6">
                                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${senhaAtual.senha.tipo === 'SP' ? 'bg-red-100 text-red-800' :
                                            senhaAtual.senha.tipo === 'SG' ? 'bg-blue-100 text-blue-800' :
                                                'bg-green-100 text-green-800'
                                            }`}>
                                            {senhaAtual.senha.tipo === 'SP' ? 'Prioritária' :
                                                senhaAtual.senha.tipo === 'SG' ? 'Geral' : 'Exames'}
                                        </span>
                                    </div>

                                    <div className="text-gray-600 mb-1">Em atendimento no</div>
                                    <div className="text-xl font-semibold mb-6">{senhaAtual.guiche}</div>

                                    <div className="text-gray-600 mb-1">Tempo restante estimado:</div>
                                    <div className="text-2xl font-mono">{calcularTempoRestante()}</div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full py-12 text-gray-500">
                                    <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p className="text-xl">Nenhum atendimento em andamento</p>
                                    <p className="mt-2">Clique em &quot;Chamar Próxima Senha&quot; para iniciar</p>
                                </div>
                            )}
                        </Card>
                    </div>

                    {/* Coluna da Fila de Espera */}
                    <div className="md:col-span-1">
                        <Card className="h-full">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Fila de Espera</h2>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${senhasEmEspera.length > 10 ? 'bg-red-100 text-red-800' :
                                    senhasEmEspera.length > 5 ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-green-100 text-green-800'
                                    }`}>
                                    {senhasEmEspera.length} {senhasEmEspera.length === 1 ? 'senha' : 'senhas'}
                                </span>
                            </div>

                            {carregando ? (
                                <div className="flex justify-center items-center h-64">
                                    <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                                </div>
                            ) : senhasEmEspera.length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    <p>Não há senhas em espera</p>
                                </div>
                            ) : (
                                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                                    {senhasEmEspera.map((senha, index) => (
                                        <div
                                            key={index}
                                            className={`p-3 rounded border ${senha.tipo === 'SP' ? 'border-red-200 bg-red-50' :
                                                senha.tipo === 'SG' ? 'border-blue-200 bg-blue-50' :
                                                    'border-green-200 bg-green-50'
                                                }`}
                                        >
                                            <div className="font-medium">{senha.codigo}</div>
                                            <div className="text-xs text-gray-500">
                                                Emitida: {new Date(senha.dataCriacao).toLocaleTimeString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
} 