# Monitoramento-de-contratos-e-boletos
  Trabalho como auxíliar administrativo e vi a necessidade de automatizar algumas tarefas trabalhosas que tenho por aqui, então decidi criar uma planilha usando o google sheets, usando a própria API (Apps Script) para gerenciar e emitir alertas de vencimento de contratos e boletos de aluguéis via email. É um projeto pessoal que implementei ao meu trabalho com a aprovação do meu gestor. 

  ## 1. Índice:
  1. [Aprendendo a implementar o script](#aprendendo-a-implementar-o-script)
  2. [Configurando a planilha](#configurando-a-planilha)

## 1. Aprendendo a implementar o script:

  1- Você irá precisar clicar em expansões e depois em Apps Script.
  <div align = "center">
  <img width="307" height="168" alt="Screenshot_4" src="https://github.com/user-attachments/assets/ec5963cf-ae6d-4dce-90dc-5d1f30272a8e" />
  </div>
  
  2- Após o passo anterior, você irá entrar no Apps Script, nesta tela será onde você ira colar o código.
  
  <div align = "center">
  <img width="1476" height="751" alt="Screenshot_7" src="https://github.com/user-attachments/assets/24361e78-fb46-4d9f-8a9f-816d6343537d" />
  </div>
  
  3- Ali em cima de azul, é onde você vai clicar para integrar o código a sua planilha (basta confirmar todas as etapas). 
  
  <div align = "center">
  <img width="964" height="291" alt="Screenshot_5" src="https://github.com/user-attachments/assets/b9e81847-c066-4ab4-a38e-4d6d87fb8c1a" />
  </div>
  
  4- Detalhe importante, no seu código é preciso ter uma váriavel com o mesmo nome da PÁGINA da planilha para todo o sistema funcionar corretamente.
  
  <div align = "center">
  <img width="673" height="328" alt="Screenshot_8" src="https://github.com/user-attachments/assets/50b03f6e-0e75-4640-ad20-31fe0b722409" />
  </div>
  
  <div align = "center">
  <img width="800" height="615" alt="Screenshot_9" src="https://github.com/user-attachments/assets/cb31b3a2-4608-4b7e-b78c-cc8efa8a8a95" />
  </div>
  
  5- Você agora irá clicar em "acionadores" para definir um timer para que o programa rode de forma automática.
  
  <div align = "center">
  <img width="791" height="476" alt="Screenshot_10" src="https://github.com/user-attachments/assets/cbed2903-524b-467a-82d1-a3242acdaf45" />
  </div>
  6- Crie um novo acionador e copie essas configurações ( o tempo pode ser de sua escolha, será o horário que o email automático será enviado).
  
  <div align = "center">
  <img width="1536" height="608" alt="Screenshot_11" src="https://github.com/user-attachments/assets/1417bd18-af42-474a-9c0e-f66f40a662ce" />
  </div>
  
  <div align = "center">
  <img width="748" height="681" alt="Screenshot_12" src="https://github.com/user-attachments/assets/75bb0997-f2a3-45e0-ae4b-4373afa17887" />
  </div>
  
  7- Após esses passos, volte para essa tela e salve tudo. Caso já tenha preenchido a própria planilha (ensino nos próximos passos) com as informações e quiser um       teste, execute o botão "executar" e veja o resultado (aconselho botar um email teste para configurar tudo antes).
  <div align = "center">
  <img width="1562" height="734" alt="Screenshot_13" src="https://github.com/user-attachments/assets/fd819772-b66c-4884-8d74-88bbc630699e" />
  </div>

## 2. Configurando a planilha: 
  
-   A planilha é bem simples de usar, bastar criar a quantidade de linhas necessárias (a quantidade de contratos que necessita ser monitorado), copiar o script presente em células já feitas e aplicar nas novas células.

- Após essa etapa, basta preencher com as informações necessárias como nome do contrato, fornecedor/cliente, a data de vencimento do contrato e o email para qual o aviso será enviado (pode ser mais de um neste campo, basta separa-los por vírgulas), e sua data de vencimento do último boleto referente a cobrança mensal do aluguél. 

- Logo após isso, será mostrado quantos dias falta para o vencimento. Será emitido um aviso em 60, 30, 15, 7, 1 dias, onde os campos ficam em vermelho para ter algo mais visual, intuitivo e fácil de ser visto.

- Após a emissão do primeiro aviso, ficará marcado em um campo a mensagem de que o aviso foi enviado com exito, sendo necessário a limpeza deste campo de forma manual (excluíndo o texto) para a emissão dos outros alertas.

<div align = "center">
<img width="1450" height="227" alt="Screenshot_3" src="https://github.com/user-attachments/assets/cb6925f9-2714-435e-af3b-582c7dbb5821" />
</div>

*obs: alguns nomes e valores foram usados para demonstrar como funciona.

- A imagem a seguir é uma mensagem da API do google informando de que o programa rodou, enviou a mensagem e parou de rodar com êxito, demonstrando assim que o alerta foi eviado de forma efetiva.

<div align = "center">
<img width="1376" height="214" alt="Screenshot_2" src="https://github.com/user-attachments/assets/9f10fae0-879a-493a-8f21-066a26a11bf0" />
</div>

- Ao enviar o alerta, chegará o email descrevendo a mensagem, mostrando nome, data e quantos dias faltam para o encerramento do contrato e informando sobre o vencimento do último boleto da cobrança de aluguel , como mostra a imagem abaixo:

<div align = "center">
<img width="919" height="464" alt="Screenshot_1" src="https://github.com/user-attachments/assets/e5573061-2119-47da-8ec8-80f1e8d62f03" />
</div>

*obs: O conteúdo da mensagem pode ser mudado para adaptar-se ao desejo da empresa, pessoa jurídica e afins.

- Trabalho pensado e desenvolvido por mim em vista de solucionar uma necessidade e automatizar alguns processos.

