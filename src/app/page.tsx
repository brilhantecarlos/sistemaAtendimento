'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const router = useRouter();
  const [horarioFuncionamento, setHorarioFuncionamento] = useState<boolean>(true);

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

  // Obtém o status operacional baseado no horário
  const getStatusClass = () => {
    return horarioFuncionamento
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="mb-8 p-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Sistema de Gerenciamento de Senhas</h1>
            <p className="text-gray-900 mb-3">
              Gerencie o atendimento ao cliente de forma eficiente
            </p>

            <div className={`inline-block px-4 py-2 rounded-full ${getStatusClass()} text-sm`}>
              {horarioFuncionamento
                ? 'Laboratório em atendimento'
                : 'Fora do horário de atendimento (7h às 17h)'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-900">Módulos de Atendimento</h2>

              <div className="space-y-3">
                <Button
                  onClick={() => router.push('/totem')}
                  className="w-full h-16 text-lg"
                  variant="primary"
                >
                  Totem de Senhas
                </Button>

                <Button
                  onClick={() => router.push('/atendente')}
                  className="w-full h-16 text-lg"
                  variant="secondary"
                >
                  Área do Atendente
                </Button>

                <Button
                  onClick={() => router.push('/painel')}
                  className="w-full h-16 text-lg"
                  variant="info"
                >
                  Painel de Chamados
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2 text-gray-900">Gestão e Relatórios</h2>

              <div className="space-y-3">
                <Button
                  onClick={() => router.push('/relatorios')}
                  className="w-full h-16 text-lg"
                  variant="primary"
                >
                  Relatórios e Estatísticas
                </Button>

                <Button
                  onClick={() => router.push('/dashboard')}
                  className="w-full h-16 text-lg"
                  variant="secondary"
                >
                  Dashboard
                </Button>

                <Button
                  onClick={() => router.push('/admin')}
                  className="w-full h-16 text-lg"
                  variant="info"
                >
                  Administração
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center text-gray-900 text-sm">
          <p>Horário de funcionamento: Segunda a Sexta, das 07:00 às 17:00</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} - Laboratório Sistema de Senhas v1.0</p>
        </div>
      </div>
    </div>
  );
}
