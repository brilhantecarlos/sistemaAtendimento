'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';

export default function TotemPage() {
    const router = useRouter();
    const [senhaGerada, setSenhaGerada] = useState<string | null>(null);
    const [tipoSenha, setTipoSenha] = useState<string | null>(null);
    const [mensagem, setMensagem] = useState<{ tipo: 'success' | 'error' | 'warning'; texto: string } | null>(null);
    const [horarioFuncionamento, setHorarioFuncionamento] = useState<boolean>(true);
    const [carregando, setCarregando] = useState<boolean>(false);

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

    const gerarSenha = async (tipo: 'SP' | 'SG' | 'SE') => {
        if (!horarioFuncionamento) {
            setMensagem({
                tipo: 'error',
                texto: 'Fora do horário de atendimento (7h às 17h)'
            });
            return;
        }

        try {
            setCarregando(true);

            const response = await fetch('/api/senhas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tipo })
            });

            if (!response.ok) {
                const erro = await response.json();
                throw new Error(erro.message || 'Erro ao gerar senha');
            }

            const novaSenha = await response.json();
            setSenhaGerada(novaSenha.codigo);
            setTipoSenha(novaSenha.tipo);
            setMensagem({
                tipo: 'success',
                texto: 'Senha gerada com sucesso!'
            });

            // Simular impressão da senha
            console.log('Imprimindo senha:', novaSenha.codigo);

            // Armazenar dados na sessionStorage para persistir durante a navegação
            sessionStorage.setItem('ultimaSenhaGerada', JSON.stringify({
                codigo: novaSenha.codigo,
                tipo: novaSenha.tipo,
                dataCriacao: novaSenha.dataCriacao
            }));

        } catch (error) {
            console.error('Erro ao gerar senha:', error);
            setMensagem({
                tipo: 'error',
                texto: error instanceof Error ? error.message : 'Erro ao gerar senha. Tente novamente.'
            });
        } finally {
            setCarregando(false);
        }
    };

    // Recuperar última senha gerada ao carregar a página
    useEffect(() => {
        const ultimaSenha = sessionStorage.getItem('ultimaSenhaGerada');
        if (ultimaSenha) {
            try {
                const dados = JSON.parse(ultimaSenha);
                setSenhaGerada(dados.codigo);
                setTipoSenha(dados.tipo);
            } catch (e) {
                console.error('Erro ao recuperar última senha:', e);
                sessionStorage.removeItem('ultimaSenhaGerada');
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <Card className="w-full max-w-md p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Totem de Atendimento</h1>
                    <p className="text-gray-600">
                        Selecione o tipo de senha desejada
                    </p>

                    {!horarioFuncionamento && (
                        <Alert
                            variant="warning"
                            message="Fora do horário de atendimento (7h às 17h)"
                            className="mt-4"
                        />
                    )}
                </div>

                {mensagem && (
                    <Alert
                        variant={mensagem.tipo}
                        message={mensagem.texto}
                        className="mb-6"
                        onClose={() => setMensagem(null)}
                    />
                )}

                {senhaGerada ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-center">
                        <h2 className="text-lg font-semibold mb-2">Sua senha:</h2>
                        <div className="text-4xl font-bold mb-2">{senhaGerada}</div>
                        <div className="text-sm text-gray-600 mb-4">
                            {tipoSenha === 'SP' && 'Senha Prioritária'}
                            {tipoSenha === 'SG' && 'Senha Geral'}
                            {tipoSenha === 'SE' && 'Senha para Exames'}
                        </div>

                        <div className="text-xs text-gray-500 mb-4">
                            {tipoSenha === 'SP' && 'Tempo médio de atendimento: ~15 minutos'}
                            {tipoSenha === 'SG' && 'Tempo médio de atendimento: ~5 minutos'}
                            {tipoSenha === 'SE' && 'Tempo médio de atendimento: ~1 minuto'}
                        </div>

                        <Button
                            onClick={() => {
                                setSenhaGerada(null);
                                setTipoSenha(null);
                                sessionStorage.removeItem('ultimaSenhaGerada');
                            }}
                            className="mt-2"
                        >
                            Nova Senha
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        <Button
                            onClick={() => gerarSenha('SP')}
                            className="h-20 text-lg bg-red-600 hover:bg-red-700"
                            disabled={!horarioFuncionamento || carregando}
                            isLoading={carregando}
                        >
                            Senha Prioritária (SP)
                        </Button>

                        <Button
                            onClick={() => gerarSenha('SG')}
                            className="h-20 text-lg"
                            disabled={!horarioFuncionamento || carregando}
                            isLoading={carregando}
                        >
                            Senha Geral (SG)
                        </Button>

                        <Button
                            onClick={() => gerarSenha('SE')}
                            className="h-20 text-lg bg-green-600 hover:bg-green-700"
                            disabled={!horarioFuncionamento || carregando}
                            isLoading={carregando}
                        >
                            Retirada de Exames (SE)
                        </Button>
                    </div>
                )}

                <div className="mt-6 text-center">
                    <Button
                        onClick={() => router.push('/')}
                        variant="secondary"
                    >
                        Voltar para Início
                    </Button>
                </div>
            </Card>
        </div>
    );
} 