const NOME_DA_ABA = "Página1"; 

const DIAS_PARA_NOTIFICAR_CONTRATO = [60, 30, 15, 7, 1];

const DIAS_PARA_NOTIFICAR_BOLETO = [60, 30, 15, 7, 1];


function executarTodasAsVerificacoes() {
  verificarVencimentosDeContratos();
  verificarVencimentosDeBoletos();
}


function verificarVencimentosDeContratos() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheetByName(NOME_DA_ABA);
  if (!aba) {
    Logger.log(`Erro: A aba com o nome "${NOME_DA_ABA}" não foi encontrada.`);
    return;
  }
  
  const dados = aba.getRange(2, 1, aba.getLastRow() - 1, aba.getLastColumn()).getValues();

  dados.forEach(function(linha, index) {
    const nomeContrato = linha[0]; // Coluna A
    const dataVencimento = new Date(linha[2]); // Coluna C
    const emailResponsavel = linha[3]; // Coluna D
    const diasParaVencer = linha[4]; // Coluna E
    const statusNotificacao = linha[5]; // Coluna F

    if (!nomeContrato || !emailResponsavel || diasParaVencer === '') return;

    DIAS_PARA_NOTIFICAR_CONTRATO.forEach(function(diaAlerta) {

      if (Math.round(diasParaVencer) == diaAlerta && !statusNotificacao.includes(`Notificado para ${diaAlerta} dias`)) {
        const diasRestantes = Math.round(diasParaVencer);
        const assunto = `ALERTA DE CONTRATO: "${nomeContrato}" vence em ${diasRestantes} dias!`;
        const corpoEmail = `
          <p>Olá,</p>
          <p>Este é um aviso automático de que o contrato abaixo está próximo do seu vencimento:</p>
          <ul>
            <li><strong>Contrato:</strong> ${nomeContrato}</li>
            <li><strong>Data de Vencimento:</strong> ${dataVencimento.toLocaleDateString('pt-BR', {timeZone: 'GMT'})}</li>
            <li><strong>Dias Restantes:</strong> ${diasRestantes}</li>
          </ul>
          <p>Atenciosamente,<br>Sistema de Notificação Automática</p>
        `;
        try {
          MailApp.sendEmail({ to: emailResponsavel, subject: assunto, htmlBody: corpoEmail });
          const statusAnterior = statusNotificacao ? statusNotificacao + " | " : "";
          const novoStatus = statusAnterior + `Notificado para ${diaAlerta} dias`;
          aba.getRange(index + 2, 6).setValue(novoStatus);
          Logger.log(`E-mail de alerta de contrato enviado para ${emailResponsavel}.`);
        } catch (e) {
          Logger.log(`Erro ao enviar e-mail de contrato para ${emailResponsavel}: ${e.toString()}`);
        }
      }
    });
  });
}

function verificarVencimentosDeBoletos() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheetByName(NOME_DA_ABA);
   if (!aba) {
    Logger.log(`Erro: A aba com o nome "${NOME_DA_ABA}" não foi encontrada.`);
    return;
  }

  const dados = aba.getRange(2, 1, aba.getLastRow() - 1, aba.getLastColumn()).getValues();

  dados.forEach(function(linha, index) {

    const nomeContrato = linha[0]; // Coluna A
    const emailResponsavel = linha[3]; // Coluna D
    const proximoBoletoData = new Date(linha[7]); // Coluna H
    const diasParaBoleto = linha[8]; // Coluna I
    const statusNotificacaoBoleto = linha[9]; // Coluna J

    if (!nomeContrato || !emailResponsavel || diasParaBoleto === '') return;

    DIAS_PARA_NOTIFICAR_BOLETO.forEach(function(diaAlerta) {

      if (Math.round(diasParaBoleto) == diaAlerta && !statusNotificacaoBoleto.includes(`Notificado para ${diaAlerta} dias`)) {
        const diasRestantes = Math.round(diasParaBoleto);
        const assunto = `ALERTA DE BOLETO: Emissão para o contrato "${nomeContrato}" em ${diasRestantes} dias`;
        const corpoEmail = `
          <p>Olá,</p>
          <p>Este é um aviso automático para a emissão do próximo boleto referente ao contrato abaixo:</p>
          <ul>
            <li><strong>Contrato:</strong> ${nomeContrato}</li>
            <li><strong>Data para Emissão do Próximo Boleto:</strong> ${proximoBoletoData.toLocaleDateString('pt-BR', {timeZone: 'GMT'})}</li>
            <li><strong>Dias Restantes:</strong> ${diasRestantes}</li>
          </ul>
          <p>Atenciosamente,<br>Sistema de Notificação Automática</p>
        `;
        try {
          MailApp.sendEmail({ to: emailResponsavel, subject: assunto, htmlBody: corpoEmail });
          const statusAnterior = statusNotificacaoBoleto ? statusNotificacaoBoleto + " | " : "";
          const novoStatus = statusAnterior + `Notificado para ${diaAlerta} dias`;
          aba.getRange(index + 2, 10).setValue(novoStatus);
          Logger.log(`E-mail de alerta de boleto enviado para ${emailResponsavel}.`);
        } catch (e) {
          Logger.log(`Erro ao enviar e-mail de boleto para ${emailResponsavel}: ${e.toString()}`);
        }
      }
    });
  });
}