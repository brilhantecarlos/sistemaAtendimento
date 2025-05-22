// AG Agente sistema - Emite senhas e responde aos comandos da atendente.
//AA agente Atendente - Responsável por acionar o sistema e efetuar o seu atendimento ao cliente em seu guichê.
// AC Agente Cliente - Interessado no atendimento aciona um totem para emitir seu número de senha e aguarda o número ser chamado no painel, onde também é informado
// para qual guichê se dirigir.

// todos concorrem pela boia execução do serviço de Atendimento.

//SP - senha prioritária.
//SG - Senha Geral.
//SE - Senha para retirada de Exames.

// TM - Tempo médio de atendimento, exclusivamente para senhas SP e SG, sendo 5 minutos para a SG e de 15 minutos para a SP.

//A senha SE não tem prioridade,  por ser mais rápido seu tempo médio de atendimento é de 1 minutos para baixo. 

// A cada novo serviço de atendimento SA deverá ser chamada uma nova senha de prioridade diferente daquela chamada anteriormente de acordo com o diagrama abaixo:
// O DIAGRAMA FICA ASSIM = [SP] -> [SE][SG]-> [SP] -> [SE][SG]

//O sistemas de chamadas de senhas deverão ser feitas apenas durante o expediente de trabalho sendo de 7 da manhã até as 17 horas da tarde.

//No painel de informações deverá ser exibido o número da senha chamada, pelo menos das 5 últimas senhas chamadas.
//não haverá guichê especifico, qualquer um poderá atender qualquer senha.

//Em geral % de todas as senhas emitidas não serão chamadas por motivos diversos, sob responsabilidade da AC, então essas deverão ser descartadas sem que execute o SA.

//CADA SENHA DEVERÁ APRESENTAR ESTE MODELO  " YYMMDD-PPSQ "   YY - ano de emissão, MM - mês de emissão, DD - dia de emissão, PP - tipo da senha com 2 caracteres.
// SQ - Sequencia de senha por prioridade, reinício diário.






// A AA vai  chamar o AG quando o AC contatar ele, seguinte modelo : O CLIENTE CHAMA A ATENDENTE E PEDE UM NÚMERO AC - AA , A ATENDENTE CHAMA O SISTEMA PARA EMITIR A SENHA 
// AA - AG .  
// Uma lista de números ( senhas ) precisa existir, nela tem que constar sempre os 5 últimos números chamados e o número atual, se é um número SG ou um Número SP.
// Nessa senha tem que vir no formato (YYMMDD-PPSQ) e a sequência de senhas tem que ser reiniciada a cada dia, ou seja, a cada dia o número de senhas começa do zero novamente.
//No final do dia é preciso ter uma lista do quantitavo de senhas omitidas, de senhas atentidas, de senhas atendidas por prioridade, relátorio detalhado contendo a numeração da 
// senha, o tipo da senha, a data e hora de emissão, a data e hora de atendimento, o tempo médio de atendimento, o guichê que atendeu e o status da senha (atendida ou não atendida).
// caso não tenha sido atendida os campos ficarão em branco.
// Relatório no TM que devido a variação pode mudar.
