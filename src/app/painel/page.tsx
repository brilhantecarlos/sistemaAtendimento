'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface SenhaChamada {
    codigo: string;
    guiche: string;
    dataChamada: string;
    tipo: 'SP' | 'SG' | 'SE';
}

export default function PainelPage() {
    const router = useRouter();
    const [senhasChamadas, setSenhasChamadas] = useState<SenhaChamada[]>([]);
    const [ultimaSenhaChamada, setUltimaSenhaChamada] = useState<SenhaChamada | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [horarioFuncionamento, setHorarioFuncionamento] = useState<boolean>(true);
    const [mensagem, setMensagem] = useState<{ tipo: 'error'; texto: string } | null>(null);
    const [ultimaAtualizacao, setUltimaAtualizacao] = useState<string | null>(null);

    // Verificar horário de funcionamento (7h às 17h)
    useEffect(() => {
        const verificarHorario = () => {
            const agora = new Date();
            const hora = agora.getHours();
            const emHorarioFuncionamento = hora >= 7 && hora < 17;
            setHorarioFuncionamento(emHorarioFuncionamento);
        };

        verificarHorario();
        const intervalo = setInterval(verificarHorario, 60000); // Verifica a cada minuto

        return () => clearInterval(intervalo);
    }, []);

    // Carregar dados do painel
    useEffect(() => {
        const buscarDadosPainel = async () => {
            try {
                setCarregando(true);

                // Buscar informações do painel
                const resposta = await fetch('/api/painel');

                if (!resposta.ok) {
                    throw new Error('Erro ao buscar dados do painel');
                }

                const painel = await resposta.json();

                // Processar últimas chamadas
                if (painel && painel.ultimasChamadas) {
                    let ultimasChamadas: SenhaChamada[];

                    try {
                        ultimasChamadas = JSON.parse(painel.ultimasChamadas);
                    } catch {
                        // Tentar buscar diretamente da API de senhas se o campo ultimasChamadas estiver inválido
                        const respostaSenhas = await fetch('/api/senhas?status=EM_ATENDIMENTO');

                        if (!respostaSenhas.ok) {
                            throw new Error('Erro ao buscar senhas em atendimento');
                        }

                        const senhasEmAtendimento = await respostaSenhas.json();

                        // Converter para o formato esperado
                        ultimasChamadas = senhasEmAtendimento.map((senha: { codigo: string; guiche?: string; dataChamada: string; tipo: 'SP' | 'SG' | 'SE' }) => ({
                            codigo: senha.codigo,
                            guiche: senha.guiche || 'Sem guichê',
                            dataChamada: senha.dataChamada,
                            tipo: senha.tipo
                        }));
                    }

                    // Verificar se a última senha chamada mudou antes de atualizar o estado
                    if (ultimasChamadas.length > 0) {
                        const novaSenhaChamada = ultimasChamadas[0];

                        // Atualizar apenas se a última senha chamada for diferente da atual
                        if (!ultimaSenhaChamada || ultimaSenhaChamada.codigo !== novaSenhaChamada.codigo) {
                            setUltimaSenhaChamada(novaSenhaChamada);
                            setSenhasChamadas(ultimasChamadas);
                            // Registrar horário da atualização
                            setUltimaAtualizacao(new Date().toLocaleTimeString());
                        }
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar dados do painel:', error);
                setMensagem({
                    tipo: 'error',
                    texto: error instanceof Error ? error.message : 'Erro ao carregar dados do painel.'
                });
            } finally {
                setCarregando(false);
            }
        };

        // Buscar dados iniciais
        buscarDadosPainel();

        // Configurar polling para atualizar a cada 20 segundos (aumentado de 10 para 20)
        const intervalo = setInterval(() => {
            if (horarioFuncionamento) {
                buscarDadosPainel();
            }
        }, 20000);

        return () => clearInterval(intervalo);
    }, [horarioFuncionamento, ultimaSenhaChamada]);

    // Obtém a cor de fundo com base no tipo de senha
    const getColorClass = (tipo: 'SP' | 'SG' | 'SE') => {
        switch (tipo) {
            case 'SP': return 'bg-red-100 border-red-500 text-red-800';
            case 'SG': return 'bg-blue-100 border-blue-500 text-blue-800';
            case 'SE': return 'bg-green-100 border-green-500 text-green-800';
            default: return 'bg-gray-100 border-gray-500 text-gray-800';
        }
    };

    // Formatar o tipo de senha
    const formatarTipoSenha = (tipo: 'SP' | 'SG' | 'SE') => {
        switch (tipo) {
            case 'SP': return 'Prioritária';
            case 'SG': return 'Geral';
            case 'SE': return 'Exames';
            default: return tipo;
        }
    };

    // Reproduzir som de chamada
    const reproduzirSom = () => {
        const audio = new Audio('/sounds/next.mp3');
        audio.play().catch(error => {
            console.error('Erro ao reproduzir som:', error);
        });
    };

    // Reproduzir som quando uma nova senha for chamada
    useEffect(() => {
        if (ultimaSenhaChamada && horarioFuncionamento && ultimaAtualizacao) {
            reproduzirSom();

            // Adicionar feedback visual para a nova senha
            const timeoutId = setTimeout(() => {
                // Efeito visual de "piscando" por 3 segundos
                const elemento = document.getElementById('ultima-senha');
                if (elemento) {
                    elemento.classList.add('transition-colors');
                    elemento.classList.add('animate-pulse');

                    setTimeout(() => {
                        elemento.classList.remove('animate-pulse');
                    }, 3000);
                }
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [ultimaSenhaChamada, horarioFuncionamento, ultimaAtualizacao]);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-5xl">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-4 text-white">Painel de Chamados</h1>
                    <p className="text-gray-300 text-xl mb-2">
                        {horarioFuncionamento
                            ? 'Laboratório em atendimento'
                            : 'Fora do horário de atendimento (7h às 17h)'}
                    </p>
                    <p className="text-gray-400">
                        Horário de funcionamento: 07:00 às 17:00
                    </p>
                    {ultimaAtualizacao && (
                        <p className="text-gray-500 text-sm mt-2">
                            Última atualização: {ultimaAtualizacao}
                        </p>
                    )}
                </div>

                {mensagem && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <p>{mensagem.texto}</p>
                    </div>
                )}

                {carregando ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    </div>
                ) : (
                    <>
                        {/* Senha atual em destaque */}
                        {ultimaSenhaChamada && (
                            <div className="mb-12">
                                <div className="text-center mb-2">
                                    <h2 className="text-2xl text-white">SENHA ATUAL</h2>
                                </div>
                                <div id="ultima-senha" className={`border-4 rounded-lg p-8 text-center ${getColorClass(ultimaSenhaChamada.tipo)}`}>
                                    <div className="text-6xl font-bold mb-4">{ultimaSenhaChamada.codigo}</div>
                                    <div className="text-4xl font-semibold">{ultimaSenhaChamada.guiche}</div>
                                    <div className="text-xl mt-2">{formatarTipoSenha(ultimaSenhaChamada.tipo)}</div>
                                </div>
                            </div>
                        )}

                        {/* Últimas senhas chamadas */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {senhasChamadas.slice(1).map((senha, index) => (
                                <div key={index} className={`border-2 rounded-lg p-4 text-center ${getColorClass(senha.tipo)}`}>
                                    <div className="text-3xl font-bold mb-2">{senha.codigo}</div>
                                    <div className="text-xl font-semibold">{senha.guiche}</div>
                                    <div className="text-sm mt-1">{formatarTipoSenha(senha.tipo)}</div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-8 text-center">
                    <Button
                        onClick={() => router.push('/')}
                        variant="secondary"
                        className="bg-gray-800 hover:bg-gray-700 text-white"
                    >
                        Voltar para Início
                    </Button>
                </div>
            </div>
        </div>
    );
} 