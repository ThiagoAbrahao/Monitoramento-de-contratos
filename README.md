# Monitoramento-de-contratos
  Trabalho como auxíliar administrativo e vi a necessidade de automatizar algumas tarefas trabalhosas que tenho por aqui, então decidi criar uma planilha do excel do próprio google, usando a própria API (AppScript) para gerenciar e emitir alertas de vencimento de contratos de aluguéis via email. É um projeto pessoal que implementei ao meu trabalho com a aprovação do meu gesto. 

- A planilha é bem simples de usar, bastar criar a quantidade de linhas necessárias (a quantidade de contratos que necessita ser monitorado), copiar o script presente em células já feitas e aplicar nas novas células.

- Após essa etapa, basta preencher com as informações necessárias como nome do contrato, fornecedor/cliente, a data de vencimento do contrato e o email para qual o aviso será enviado (pode ser mais de um neste campo, basta separa-los por vírgulas). 

- Logo após isso, será mostrado quantos dias falta para o vencimento. Será emitido um aviso em 60, 30, 15, 7, 1 dias, onde os campos ficam em vermelho para ter algo mais visual, intuitivo e fácil de ser visto.

- Após a emissão do primeiro aviso, ficará marcado em um campo a mensagem de que o aviso foi enviado com exito, sendo necessário a limpeza deste campo de forma manual (excluíndo o texto) para a emissão dos outros alertas.

<img width="1450" height="227" alt="Screenshot_3" src="https://github.com/user-attachments/assets/cb6925f9-2714-435e-af3b-582c7dbb5821" />
*obs: alguns nomes e valores foram usados para demonstrar como funciona.


- A imagem a seguir é uma mensagem da API do google informando de que o programa rodou, enviou a mensagem e parou de rodar com êxito, demonstrando assim que o alerta foi eviado de forma efetiva.
 
<img width="1376" height="214" alt="Screenshot_2" src="https://github.com/user-attachments/assets/9f10fae0-879a-493a-8f21-066a26a11bf0" />

- Ao enviar o alerta, chegará o email descrevendo a mensagem, mostrando nome, data e quantos dias faltam para o encerramento do contrato, como mostra a imagem abaixo:

<img width="919" height="464" alt="Screenshot_1" src="https://github.com/user-attachments/assets/e5573061-2119-47da-8ec8-80f1e8d62f03" />

*Trabalho pensado e desenvolvido por mim em vista de solucionar uma necessidade e automatizar alguns processos.

