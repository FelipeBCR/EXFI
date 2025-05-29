document.addEventListener('DOMContentLoaded', () => {
    const allQuestions = [
        {
            question: "A execução de despesas por meio de Suprimento de Fundos pode ser realizada em qual caráter?",
            options: [
                "Exclusivamente em caráter de rotina.",
                "Em caráter de excepcionalidade, devidamente justificada.",
                "Em caráter de emergência, sem necessidade de justificativa.",
                "Apenas para despesas de grande vulto."
            ],
            answer: "Em caráter de excepcionalidade, devidamente justificada.",
            explanation: "Conforme o Módulo 8.1, a execução de despesas por Suprimento de Fundos somente poderá ser realizada em caráter de excepcionalidade, devidamente justificada pelo Ordenador de Despesas."
        },
        {
            question: "Quais são os estágios da despesa orçamentária pública que a concessão de suprimento de fundos deve respeitar?",
            options: [
                "Planejamento e Execução.",
                "Empenho, Liquidação e Pagamento.",
                "Autorização e Liberação.",
                "Contratação e Comprovação."
            ],
            answer: "Empenho, Liquidação e Pagamento.",
            explanation: "O Módulo 8.1 e 8.2 afirmam que a concessão de suprimento de fundos deverá respeitar os estágios da despesa orçamentária pública: empenho, liquidação e pagamento."
        },
        {
            question: "Qual subelemento da despesa orçamentária é utilizado para registrar a concessão de suprimento de fundos na liquidação?",
            options: [
                "Subelemento 01 (Despesa Corrente).",
                "Subelemento 96 (Pagamento Antecipado).",
                "Subelemento 50 (Material de Consumo).",
                "Subelemento 70 (Serviços de Terceiros)."
            ],
            answer: "Subelemento 96 (Pagamento Antecipado).",
            explanation: "De acordo com o Módulo 8.1, a concessão será classificada no subelemento 96 (PAGAMENTO ANTECIPADO), que será registrada na liquidação."
        },
        {
            question: "Por quanto tempo o saldo do subelemento 96 pode permanecer após o prazo de aplicação sem gerar restrição contábil?",
            options: [
                "Até 10 dias.",
                "Até 30 dias.",
                "Até 60 dias.",
                "Indefinidamente."
            ],
            answer: "Até 30 dias.",
            explanation: "O Módulo 8.1 indica que o saldo do subelemento 96 poderá permanecer até 30 (trinta) dias após o prazo de aplicação."
        },
        {
            question: "Em favor de quem a Nota de Empenho é emitida para Suprimento de Fundos, exceto quando sigiloso?",
            options: [
                "Em favor da UNIDADE APOIADA.",
                "Em favor da UG.",
                "Em favor do suprido.",
                "Em favor do Ordenador de Despesas."
            ],
            answer: "Em favor do suprido.",
            explanation: "O Módulo 8.1 estabelece que a Nota de Empenho será emitida em favor do suprido, exceto quando se tratar de Suprimento de Fundos Sigiloso, para o qual deverá ser emitida em favor da UG."
        },
        {
            question: "Qual documento hábil e situação devem ser utilizados no CPR para apropriação da despesa com Suprimento de Fundos CPGF (Cartão de Pagamento do Governo Federal) não sigiloso?",
            options: [
                "DH: OB e Situação: SPF001.",
                "DH: SF e Situação: SPF003.",
                "DH: NE e Situação: SPF005.",
                "DH: DD e Situação: SPF002."
            ],
            answer: "DH: SF e Situação: SPF003.",
            explanation: "O Módulo 8.1 especifica que para CPGF não sigiloso, o Documento Hábil é 'SF' e a Situação é 'SPF003'."
        },
        {
            question: "Qual vinculação só poderá ser utilizada para pagamento da fatura do cartão de pagamento ou para os saques a serem efetivados nos terminais do Banco do Brasil?",
            options: [
                "Vinculação 100 (Recursos Livres).",
                "Vinculação 412 (CARTÃO DE PAGAMENTO).",
                "Vinculação 200 (Convênios).",
                "Vinculação 300 (Diárias)."
            ],
            answer: "Vinculação 412 (CARTÃO DE PAGAMENTO).",
            explanation: "Conforme o Módulo 8.1, a vinculação 412 'CARTÃO DE PAGAMENTO' só poderá ser utilizada para pagamento da fatura do cartão de pagamento ou para os saques."
        },
        {
            question: "Em quais situações o Suprimento de Fundos é aplicável?",
            options: [
                "Apenas para despesas de grande vulto.",
                "Somente para despesas rotineiras e programadas.",
                "Situações de despesas expressamente definidas em lei e que não possam subordinar-se ao processo normal de aplicação.",
                "Qualquer despesa, desde que aprovada pelo Ordenador de Despesas."
            ],
            answer: "Situações de despesas expressamente definidas em lei e que não possam subordinar-se ao processo normal de aplicação.",
            explanation: "O Módulo 8.2 define que o Suprimento de Fundos é aplicável às situações de despesas expressamente definidas em lei e consiste na entrega de numerário para realizar despesas que não possam subordinar-se ao processo normal de aplicação."
        },
        {
            question: "Qual o limite máximo para cada ato de concessão de Suprimento de Fundos com uso do CPGF para outros serviços e compras em geral, de acordo com a Portaria nº 95/MF de 2002?",
            options: [
                "R$ 3.300,00.",
                "R$ 17.600,00.",
                "R$ 33.000,00.",
                "R$ 176.000,00."
            ],
            answer: "R$ 17.600,00.",
            explanation: "O Módulo 8.2 informa que o limite máximo para outros serviços e compras em geral com CPGF é de R$ 17.600,00."
        },
        {
            question: "Qual o limite máximo para realização de cada despesa de pequeno vulto com CPGF para obras e serviços de engenharia?",
            options: [
                "R$ 33.000,00.",
                "R$ 17.600,00.",
                "R$ 3.300,00.",
                "R$ 1.760,00."
            ],
            answer: "R$ 3.300,00.",
            explanation: "De acordo com o Módulo 8.2, o limite máximo para despesa de pequeno vulto com CPGF para obras e serviços de engenharia é de R$ 3.300,00."
        },
        {
            question: "Qual o limite máximo para concessão de Suprimento de Fundos com uso da conta tipo 'B' para obras e serviços de engenharia?",
            options: [
                "R$ 33.000,00.",
                "R$ 17.600,00.",
                "R$ 16.500,00.",
                "R$ 8.800,00."
            ],
            answer: "R$ 16.500,00.",
            explanation: "O Módulo 8.2 estabelece que o limite máximo para concessão de Suprimento de Fundos com uso da conta tipo 'B' para obras e serviços de engenharia é de R$ 16.500,00."
        },
        {
            question: "Qual o prazo para o detentor apresentar o Balancete de Prestação de Contas de Suprimento de Fundos após o encerramento do prazo de aplicação?",
            options: [
                "Até 10 dias.",
                "Até 30 dias.",
                "Até 60 dias.",
                "Indefinidamente."
            ],
            answer: "Até 30 dias.",
            explanation: "O Módulo 8.2 indica que o Balancete de Prestação de Contas deverá ser apresentado em até 30 (trinta) dias após o encerramento do prazo de aplicação."
        },
        {
            question: "Por quanto tempo a Prestação de Contas de Suprimento de Fundos deve ficar arquivada no Setor de Controle Interno?",
            options: [
                "Mínimo de 1 ano.",
                "Mínimo de 3 anos.",
                "Mínimo de 5 anos.",
                "Mínimo de 10 anos."
            ],
            answer: "Mínimo de 5 anos.",
            explanation: "O Módulo 8.2 estabelece que a Prestação de Contas de Suprimento de Fundos ficará à disposição dos Órgãos de Controle Interno ou Externo pelo mínimo de 5 (cinco) anos."
        },
        {
            question: "Qual documento comprobatório é utilizado para compras de material?",
            options: [
                "Recibo de pagamento.",
                "Nota fiscal de venda ao consumidor.",
                "Contrato de serviço.",
                "Ordem de compra."
            ],
            answer: "Nota fiscal de venda ao consumidor.",
            explanation: "O Módulo 8.2 lista a nota fiscal de venda ao consumidor como documento comprobatório para compras de material."
        },
        {
            question: "Qual o prazo para a UNIDADE DE APOIO concedente promover a conferência e aprovação da prestação de contas?",
            options: [
                "Até 10 dias.",
                "Até 15 dias.",
                "Até 30 dias.",
                "Até 60 dias."
            ],
            answer: "Até 30 dias.",
            explanation: "O Módulo 8.2 informa que a UNIDADE DE APOIO concedente deverá promover a conferência e a aprovação da prestação de contas em até 30 (trinta) dias."
        },
        {
            question: "Qual o nome do aplicativo utilizado pelas UG EXEC para tramitação do Demonstrativo Creditício Financeiro (DCF) e do Demonstrativo Gerencial de Custos (DGC)?",
            options: [
                "Sistema de Gestão Financeira (SGF).",
                "Aplicativo Eletrônico de Contas - SEFA (AEC-SEFA).",
                "Portal de Transparência.",
                "Sistema Integrado de Administração Financeira (SIAFI)."
            ],
            answer: "Aplicativo Eletrônico de Contas - SEFA (AEC-SEFA).",
            explanation: "O documento 'Segundo.pdf' e 'cap neto.pdf' mencionam que as UG EXEC utilizarão o 'Aplicativo Eletrônico de Contas - SEFA' (AEC-SEFA) para a tramitação do DCF e DGC."
        },
        {
            question: "Quem é o responsável pela emissão do Demonstrativo Creditício-Financeiro (DCF) nas UG EXEC e UG CRED?",
            options: [
                "Ordenador de Despesas.",
                "Agente de Controle Interno.",
                "Gestor de Finanças.",
                "Chefe da Seção de Almoxarifado."
            ],
            answer: "Gestor de Finanças.",
            explanation: "O documento 'Segundo.pdf' e 'cap neto.pdf' indicam que o Gestor de Finanças é responsável pela emissão do DCF."
        },
        {
            question: "O que deve ser feito com os DCF equilibrados (diferença entre disponibilidade financeira e compromissos nula)?",
            options: [
                "Devem ser enviados à DIREF em versão digitalizada.",
                "Devem ser devidamente assinados e arquivados na UG.",
                "Devem ser publicados no Portal da Transparência.",
                "Devem ser descartados imediatamente."
            ],
            answer: "Devem ser devidamente assinados e arquivados na UG.",
            explanation: "O documento 'Segundo.pdf' e 'cap neto.pdf' afirmam que os DCF equilibrados não deverão ser enviados à DIREF pelo AEC-SEFA, devendo ser devidamente assinados e arquivados na UG."
        },
        {
            question: "Qual o valor limite para instauração de TCE (Tomada de Contas Especial) quando esgotadas as medidas administrativas para ressarcimento ao Erário?",
            options: [
                "Qualquer valor, desde que haja dano.",
                "Valor fixado para instauração de TCE.",
                "R$ 1.000,00.",
                "R$ 10.000,00."
            ],
            answer: "Valor fixado para instauração de TCE.",
            explanation: "O documento 'cap neto.pdf' menciona que a instauração de TCE ocorre quando o valor atualizado do dano for igual ou superior ao valor fixado para instauração de TCE."
        },
        {
            question: "Em qual sistema o procedimento de TCE deve ser registrado no âmbito do COMAER?",
            options: [
                "SIAFI.",
                "Contratos.gov.br.",
                "Sistema e-TCE.",
                "SILOMS."
            ],
            answer: "Sistema e-TCE.",
            explanation: "O documento 'cap neto.pdf' detalha que o procedimento de TCE deve ser registrado no sistema E-TCE."
        },
        {
            question: "Qual o prazo para registro dos dados gerais no Sistema e-TCE após a instauração do procedimento de TCE?",
            options: [
                "Até 2 dias úteis.",
                "Até 5 dias úteis.",
                "Até 10 dias úteis.",
                "Até 15 dias úteis."
            ],
            answer: "Até 5 dias úteis.",
            explanation: "O documento 'cap neto.pdf' especifica que o registro dos dados gerais no Sistema e-TCE deve ocorrer em até cinco dias úteis após a instauração."
        },
        {
            question: "Quem pode determinar a instauração de TCE, independentemente das medidas administrativas adotadas?",
            options: [
                "Ordenador de Despesas.",
                "Agente de Controle Interno.",
                "Tribunal de Contas da União (TCU).",
                "UNIDADE DE APOIO."
            ],
            answer: "Tribunal de Contas da União (TCU).",
            explanation: "O documento 'cap neto.pdf' afirma que o TCU, independentemente das medidas administrativas adotadas, também poderá determinar a instauração de TCE."
        },
        {
            question: "Qual a conta contábil para registro da responsabilidade do agente suprido na concessão do adiantamento?",
            options: [
                "1.1.1.1.2.20.01 (Limite de Saque com Vinculação de Pagamento).",
                "1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento).",
                "2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal).",
                "3.3.9.0.30 (Material de Consumo)."
            ],
            answer: "1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento).",
            explanation: "O Módulo 8.1 indica que a concessão do adiantamento fará o registro da responsabilidade do agente suprido apenas na conta contábil 1.1.3.1.1.02.00."
        },
        {
            question: "Qual o tipo de Ordem Bancária deve ser emitida para pagamento da fatura do cartão de pagamento?",
            options: [
                "OB Simples.",
                "OB Fatura.",
                "OB Saque.",
                "OB Transferência."
            ],
            answer: "OB Fatura.",
            explanation: "O Módulo 8.1 afirma que para pagamento da fatura do cartão de pagamento deverá ser emitida Ordem Bancária do tipo Fatura (OB Fatura)."
        },
        {
            question: "Qual a situação utilizada na aba 'DEDUÇÃO' para pagamento de fatura CPGF?",
            options: [
                "DSP973.",
                "DOB005.",
                "DOB029.",
                "DVL973."
            ],
            answer: "DOB029.",
            explanation: "O Módulo 8.1 especifica que a situação DOB029 é utilizada na aba Dedução para pagamento de fatura CPGF."
        },
        {
            question: "Qual documento hábil e situação são utilizados para reaver a despesa paga em caso de apuração de responsabilidade sobre acréscimos e recolhimento de GRU?",
            options: [
                "DH: DT e Situação: DSP973.",
                "DH: DD e Situação: DVL973.",
                "DH: NP e Situação: PSO047.",
                "DH: DU e Situação: EST014."
            ],
            answer: "DH: DD e Situação: DVL973.",
            explanation: "O Módulo 8.1 indica que o gestor deverá incluir um documento hábil do tipo 'DD', com a situação 'DVL973', para reaver a despesa paga."
        },
        {
            question: "Qual documento hábil e situação são utilizados para regularizar OBs canceladas de pagamentos de faturas do CPGF, para efetuar novo pagamento?",
            options: [
                "DH: SF e Situação: SPF003.",
                "DH: DT e Situação: PSO002.",
                "DH: DU e Situação: EST014.",
                "DH: NP e Situação: PSO047."
            ],
            answer: "DH: DT e Situação: PSO002.",
            explanation: "O Módulo 8.1 estabelece que para efetuar novo pagamento, a UG deverá utilizar o documento hábil 'DT' com a situação 'PSO002'."
        },
        {
            question: "Qual a conta contábil onde o SIAFI buscará saldo para gerar uma OB Saque Cartão na UG em que o portador do cartão esteja cadastrado?",
            options: [
                "1.1.1.1.2.20.01 (Limite de Saque com Vinculação de Pagamento).",
                "1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento).",
                "2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal).",
                "1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar)."
            ],
            answer: "2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal).",
            explanation: "O Módulo 8.1 detalha que o sistema buscará saldo na conta 2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal) no CPF do portador do cartão."
        },
        {
            question: "Qual o código da GRU (Guia de Recolhimento de Receitas da União) para devolução de Suprimento de Fundos no Exercício, em caso de saldo não aplicado em espécie?",
            options: [
                "12345-6.",
                "68808-8.",
                "98765-4.",
                "54321-0."
            ],
            answer: "68808-8.",
            explanation: "O Módulo 8.1 informa que o código da GRU para devolução de Suprimento de Fundos no Exercício é 68808-8."
        },
        {
            question: "Qual a situação utilizada na aba 'Despesa a Anular' para anulação da despesa no mesmo DH de concessão do SF, quando o saldo não aplicado conste no limite do cartão (CPGF Sigiloso)?",
            options: [
                "ASP003.",
                "ASP002.",
                "DED009.",
                "EST014."
            ],
            answer: "ASP002.",
            explanation: "O Módulo 8.1 indica que para CPGF Sigiloso, a situação para anulação da despesa é ASP002."
        },
        {
            question: "Qual o prazo máximo de aplicação de Suprimento de Fundos, estabelecido pelo Ordenador de Despesas?",
            options: [
                "Até 30 dias.",
                "Até 60 dias.",
                "Até 90 dias.",
                "Até 120 dias."
            ],
            answer: "Até 90 dias.",
            explanation: "O Módulo 8.2 estabelece que o período de aplicação do Suprimento de Fundos será em até 90 (noventa) dias."
        },
        {
            question: "Quando o CPGF não aceita a realização de despesas?",
            options: [
                "Com parcelamento de pagamento.",
                "Com saques em espécie.",
                "Com compras em estabelecimentos credenciados.",
                "Com pagamento de faturas."
            ],
            answer: "Com parcelamento de pagamento.",
            explanation: "O Módulo 8.2 afirma que o CPGF não aceita a realização de despesas com parcelamento de pagamento."
        },
        {
            question: "Qual o vencimento das faturas referentes a compras nos estabelecimentos credenciados com CPGF?",
            options: [
                "Dia 1º de cada mês.",
                "Dia 5 de cada mês.",
                "Dia 10 de cada mês.",
                "Dia 20 de cada mês."
            ],
            answer: "Dia 10 de cada mês.",
            explanation: "O Módulo 8.2 informa que as faturas referentes a compras nos estabelecimentos credenciados têm vencimento no dia 10 (dez) de cada mês."
        },
        {
            question: "Qual a justificativa para a inadimplência por atraso no pagamento de faturas de CPGF?",
            options: [
                "Falta ou atraso no recebimento da fatura pelos Correios.",
                "Não há justificativa, pois é possível a emissão de segunda via.",
                "Problemas técnicos no sistema do Banco do Brasil.",
                "Ausência do portador do cartão."
            ],
            answer: "Não há justificativa, pois é possível a emissão de segunda via.",
            explanation: "O Módulo 8.2 esclarece que não é justificável a inadimplência pela falta ou atraso no recebimento da fatura pelos Correios, uma vez que é possível a emissão de segunda via de fatura pelo AASP do Banco do Brasil."
        },
        {
            question: "Em quais situações o Suprimento de Fundos com utilização de conta corrente bancária Tipo 'B' deve ocorrer, exclusivamente?",
            options: [
                "Para despesas de pequeno vulto.",
                "Para despesas de grande vulto.",
                "Nos casos de peculiaridades militares e serviços de inteligência, bem como as de caráter sigiloso.",
                "Para qualquer tipo de despesa, desde que justificada."
            ],
            answer: "Nos casos de peculiaridades militares e serviços de inteligência, bem como as de caráter sigiloso.",
            explanation: "O Módulo 8.2 estabelece que a realização de despesas por meio de suprimento de fundos, com utilização de conta corrente bancária Tipo 'B', deverá ocorrer, exclusivamente, nos casos de peculiaridades militares e serviços de inteligência, bem como as de caráter sigiloso."
        },
        {
            question: "Qual o limite máximo para realização de cada despesa de pequeno vulto com conta tipo 'B' para outros serviços e compras em geral?",
            options: [
                "R$ 825,00.",
                "R$ 440,00.",
                "R$ 1.760,00.",
                "R$ 8.800,00."
            ],
            answer: "R$ 440,00.",
            explanation: "O Módulo 8.2 informa que o limite máximo para despesa de pequeno vulto com conta tipo 'B' para outros serviços e compras em geral é de R$ 440,00."
        },
        {
            question: "Qual o prazo para o ACI (Agente de Controle Interno) da UNIDADE DE APOIO proceder à análise do Suprimento de Fundos ao receber o balancete?",
            options: [
                "Até 5 dias.",
                "Até 10 dias.",
                "Até 15 dias.",
                "Até 30 dias."
            ],
            answer: "Até 15 dias.",
            explanation: "O Módulo 8.2 estabelece que o ACI da UNIDADE DE APOIO, ao receber o balancete, procederá à análise do Suprimento de Fundos em até 15 (quinze) dias."
        },
        {
            question: "Qual o prazo para o Suprido efetuar eventuais correções e/ou apresentar justificativas para as observações registradas no Relatório de Verificação?",
            options: [
                "Até 5 dias.",
                "Até 10 dias.",
                "Até 15 dias.",
                "Até 30 dias."
            ],
            answer: "Até 15 dias.",
            explanation: "O Módulo 8.2 informa que o Suprido tem até 15 (quinze) dias para efetuar eventuais correções e/ou apresentar justificativas."
        },
        {
            question: "Qual a modalidade de licitação utilizada na Nota de Empenho nº 926, de 2024, para a SUKOI ALIMENTOS LTDA?",
            options: [
                "Dispensa.",
                "Inexigibilidade.",
                "Pregão.",
                "Concorrência."
            ],
            answer: "Pregão.",
            explanation: "Conforme a Nota de Empenho nº 926 no documento 'EXFI PF.pdf', a Modalidade de Licitação é 'PREGAO'."
        },
        {
            question: "Qual a Natureza da Despesa da Nota de Empenho nº 971, de 2024, para a QUALICICLO AGRICOLA S/A.?",
            options: [
                "339030.",
                "449051.",
                "339039.",
                "339147."
            ],
            answer: "339030.",
            explanation: "A Nota de Empenho nº 971 no documento 'EXFI PF.pdf' mostra que a Natureza da Despesa é '339030'."
        },
        {
            question: "Qual o valor total da Nota Fiscal Eletrônica nº 9718 da SUKOI ALIMENTOS LTDA?",
            options: [
                "R$ 2.550,00.",
                "R$ 2.700,00.",
                "R$ 2.600,00.",
                "R$ 7.850,00."
            ],
            answer: "R$ 7.850,00.",
            explanation: "A Nota Fiscal Eletrônica nº 9718 no documento 'EXFI PF.pdf' indica o 'VALOR TOTAL R$ 7.850,00'."
        },
        {
            question: "Qual o CNPJ do favorecido na Nota de Empenho nº 1873, de 2023, para a CONSERVA DE ESTRADAS LTDA?",
            options: [
                "00.394.429/0002-91.",
                "16.661.910/0001-55.",
                "04.784.681/0001-87.",
                "08.407.726/0001-55."
            ],
            answer: "16.661.910/0001-55.",
            explanation: "A Nota de Empenho nº 1873 no documento 'EXFI PF.pdf' mostra o CNPJ do favorecido como '16.661.910/0001-55'."
        },
        {
            question: "Qual o NCM/SH do produto 'CALCARIO AGRICOLA DOLOMITAMIX (TON)' na Nota Fiscal nº 000.058.868?",
            options: [
                "19021100.",
                "21069021.",
                "25181000.",
                "31059090."
            ],
            answer: "25181000.",
            explanation: "A Nota Fiscal nº 000.058.868 no documento 'EXFI PF.pdf' indica o NCM/SH do produto como '25181000'."
        },
        {
            question: "Qual o valor total da Nota de Empenho nº 970, de 2024, para a SEMENTEK COMERCIO E REPRESENTACOES LTDA?",
            options: [
                "R$ 26.762,00.",
                "R$ 63.147,00.",
                "R$ 124.737,32.",
                "R$ 1.009.352,91."
            ],
            answer: "R$ 124.737,32.",
            explanation: "A Nota de Empenho nº 970 no documento 'EXFI PF.pdf' mostra o 'Valor' como '124.737,32'."
        },
        {
            question: "Qual o objetivo principal do documento 'Segundo.pdf'?",
            options: [
                "Apresentar o novo sistema de acesso ao SIAFI.",
                "Detalhar os procedimentos para solicitação de recursos financeiros.",
                "Conhecer a documentação pertinente à prestação de contas relacionada à execução financeira da despesa.",
                "Explicar como preencher notas fiscais eletrônicas."
            ],
            answer: "Conhecer a documentação pertinente à prestação de contas relacionada à execução financeira da despesa.",
            explanation: "A página 2 do documento 'Segundo.pdf' estabelece como objetivo: 'Conhecer a documentação pertinente à prestação de contas relacionada à execução financeira da despesa'."
        },
        {
            question: "Segundo o 'Segundo.pdf', qual o papel do Tesouro Gerencial no preenchimento dos Demonstrativos da Execução Contábil?",
            options: [
                "Ele é o sistema onde os Demonstrativos são gerados diretamente.",
                "Ele fornece consultas para subsidiar o preenchimento dos Demonstrativos.",
                "Ele é responsável por validar os Demonstrativos antes do envio.",
                "Ele armazena os Demonstrativos após a aprovação."
            ],
            answer: "Ele fornece consultas para subsidiar o preenchimento dos Demonstrativos.",
            explanation: "A página 6 do 'Segundo.pdf' menciona: 'A fim de subsidiar o preenchimento dos Demonstrativos da Execução Contábil, disponíveis na página da DIREF, que compõem o processo de prestação de contas mensal, há consultas construídas no Tesouro Gerencial'."
        },
        {
            question: "De acordo com o 'Primeiro.pdf', qual o principal objetivo de conhecer a sistemática de execução de despesas por meio de Suprimento de Fundos?",
            options: [
                "Apenas identificar os limites de valores.",
                "Conhecer os casos para os quais ele é concedido e as formas de controle.",
                "Aprender a preencher formulários de solicitação.",
                "Gerar relatórios de auditoria."
            ],
            answer: "Conhecer os casos para os quais ele é concedido e as formas de controle.",
            explanation: "A página 2 do 'Primeiro.pdf' lista como objetivos: '1. Conhecer a sistemática de execução de despesas por meio de Suprimento de Fundos e os casos para os quais ele é concedido' e '2. Identificar as etapas para realização da despesa por intermédio do suprimento de fundos e as formas de controle'."
        },
        {
            question: "Qual a conta contábil que não pode ter saldo na passagem de um mês para o outro, para evitar restrição contábil para o COMAER, quando se concede suprimento de fundos na modalidade de depósito em conta corrente?",
            options: [
                "1.1.1.1.2.20.01 (Limite de Saque com Vinculação de Pagamento).",
                "2.1.8.9.1.03.00 (Suprimentos de Fundos a Pagar).",
                "1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento).",
                "2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal)."
            ],
            answer: "2.1.8.9.1.03.00 (Suprimentos de Fundos a Pagar).",
            explanation: "A página 12 do 'Primeiro.pdf' (Módulo 8.1) afirma que não pode haver saldo na conta 2.1.8.9.1.03.00 (Suprimentos de Fundos a Pagar) na passagem de um mês para o outro."
        },
        {
            question: "Qual o prazo para o Gestor de Finanças realizar o pagamento (emissão da Ordem Bancária para depósito na conta tipo B) dentro do mesmo mês da liquidação da despesa?",
            options: [
                "Até o dia 5 do mês seguinte.",
                "Até o dia 10 do mês seguinte.",
                "Dentro do mesmo mês da liquidação.",
                "Em até 30 dias após a liquidação."
            ],
            answer: "Dentro do mesmo mês da liquidação.",
            explanation: "A página 17 do 'Primeiro.pdf' (Módulo 8.1) estabelece que o Gestor de Finanças deverá realizar o pagamento (emissão da Ordem Bancária para depósito na conta tipo B) dentro do mesmo mês da liquidação da despesa."
        },
        {
            question: "Qual a situação utilizada na aba 'PRINCIPAL SEM ORÇAMENTO' para pagamento de fatura do exercício anterior de Suprimento de Fundos?",
            options: [
                "PSO002.",
                "DSP973.",
                "PSO047.",
                "DVL973."
            ],
            answer: "PSO047.",
            explanation: "A página 24 do 'Primeiro.pdf' (Módulo 8.1) indica que a situação 'PSO047' é utilizada na aba 'PRINCIPAL SEM ORÇAMENTO' para pagamento de fatura do exercício anterior."
        },
        {
            question: "Qual a conta contábil onde o SIAFI gerará uma OB Saque Cartão em caso de saque bancário indevido antes da respectiva liquidação da despesa de suprimento de fundo?",
            options: [
                "1.1.1.1.2.20.01 (Limite de Saque com Vinculação de Pagamento).",
                "2.1.8.9.1.36.09 (Saque-Cartão de Pagamento do Governo Federal).",
                "1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar).",
                "1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento)."
            ],
            answer: "1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar).",
            explanation: "A página 32 do 'Primeiro.pdf' (Módulo 8.1) informa que o SIAFI gerará uma OB Saque Cartão na conta 1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar)."
        },
        {
            question: "Qual o limite máximo para cada ato de concessão de Suprimento de Fundos, com uso do CPGF, para execução de obras e serviços de engenharia, de acordo com a Portaria nº 95/MF de 2002?",
            options: [
                "R$ 17.600,00.",
                "R$ 33.000,00.",
                "R$ 176.000,00.",
                "R$ 330.000,00."
            ],
            answer: "R$ 33.000,00.",
            explanation: "A página 58 do 'Primeiro.pdf' (Módulo 8.2) estabelece o limite de R$ 33.000,00 para obras e serviços de engenharia com CPGF."
        },
        {
            question: "Qual o limite máximo para realização de cada despesa de pequeno vulto com CPGF para outros serviços e compras em geral, de acordo com a Portaria MF nº 95 de 2020?",
            options: [
                "R$ 1.760,00.",
                "R$ 3.300,00.",
                "R$ 17.600,00.",
                "R$ 33.000,00."
            ],
            answer: "R$ 1.760,00.",
            explanation: "A página 61 do 'Primeiro.pdf' (Módulo 8.2) indica o limite de R$ 1.760,00 para outros serviços e compras em general de pequeno vulto com CPGF."
        },
        {
            question: "Qual o limite máximo para concessão de Suprimento de Fundos para enfrentamento de emergência de saúde pública com CPGF, para compras em general e outros serviços?",
            options: [
                "R$ 17.600,00.",
                "R$ 33.000,00.",
                "R$ 176.000,00.",
                "R$ 330.000,00."
            ],
            answer: "R$ 176.000,00.",
            explanation: "A página 62 do 'Primeiro.pdf' (Módulo 8.2) define o limite de R$ 176.000,00 para compras em geral e outros serviços em emergência de saúde pública com CPGF."
        },
        {
            question: "Qual o tipo de Centro de Custo utilizado para execução de despesas sigilosas com CPGF, com cartão emitido 'com' o brasão oficial e identificação do portador?",
            options: [
                "Tipo '0'.",
                "Tipo '1'.",
                "Tipo '2'.",
                "Tipo '3'."
            ],
            answer: "Tipo '2'.",
            explanation: "A página 66 do 'Primeiro.pdf' (Módulo 8.2) descreve o Tipo '2' para despesas sigilosas com brasão oficial e identificação do portador."
        },
        {
            question: "Qual o conteúdo que deve constar no ato formal de concessão de Suprimento de Fundos, publicado em Boletim Interno da UG?",
            options: [
                "Apenas o nome do responsável e o valor.",
                "Exercício financeiro, classificação da despesa, nome/matrícula/CPF do responsável, importância a ser empenhada, período de aplicação e prazo de comprovação, limite para cada modalidade de uso do CPGF, situação prevista para a concessão, finalidade básica e circunstâncias que justificam a despesa.",
                "Somente a data de emissão e o número da Nota de Empenho.",
                "Apenas a descrição detalhada dos itens a serem adquiridos."
            ],
            answer: "Exercício financeiro, classificação da despesa, nome/matrícula/CPF do responsável, importância a ser empenhada, período de aplicação e prazo de comprovação, limite para cada modalidade de uso do CPGF, situação prevista para a concessão, finalidade básica e circunstâncias que justificam a despesa.",
            explanation: "As páginas 69 e 70 do 'Primeiro.pdf' (Módulo 8.2) detalham todo o conteúdo que deve constar no ato de concessão."
        },
        {
            question: "Qual o limite máximo para cada ato de concessão de Suprimento de Fundos, com uso da conta tipo 'B', para outros serviços e compras em general?",
            options: [
                "R$ 8.800,00.",
                "R$ 16.500,00.",
                "R$ 440,00.",
                "R$ 825,00."
            ],
            answer: "R$ 8.800,00.",
            explanation: "A página 83 do 'Primeiro.pdf' (Módulo 8.2) estabelece o limite de R$ 8.800,00 para outros serviços e compras em geral com conta tipo 'B'."
        },
        {
            question: "Qual o limite máximo para realização de cada despesa de pequeno vulto com conta tipo 'B' para execução de obras e serviços de engenharia?",
            options: [
                "R$ 440,00.",
                "R$ 825,00.",
                "R$ 1.760,00.",
                "R$ 3.300,00."
            ],
            answer: "R$ 825,00.",
            explanation: "A página 85 do 'Primeiro.pdf' (Módulo 8.2) indica o limite de R$ 825,00 para obras e serviços de engenharia de pequeno vulto com conta tipo 'B'."
        },
        {
            question: "Qual o documento comprobatório utilizado para prestações de serviços por pessoa física?",
            options: [
                "Nota fiscal de venda ao consumidor.",
                "Nota fiscal de prestação de serviços.",
                "Recibo com nome, CPF e número de inscrição no INSS do prestador de serviço.",
                "DDR (Demonstrativo de Despesas Relacionadas)."
            ],
            answer: "Recibo com nome, CPF e número de inscrição no INSS do prestador de serviço.",
            explanation: "A página 91 do 'Primeiro.pdf' (Módulo 8.2) especifica o recibo com nome, CPF e número de inscrição no INSS do prestador de serviço para pessoa física."
        },
        {
            question: "Qual o prazo para a UNIDADE APOIADA encaminhar a primeira via da Prestação de Contas à UNIDADE DE APOIO após a conferência e aprovação?",
            options: [
                "Até 5 dias.",
                "Até 10 dias.",
                "Até 15 dias.",
                "Até 30 dias."
            ],
            answer: "Até 10 dias.",
            explanation: "A página 87 do 'Primeiro.pdf' (Módulo 8.2) informa que a UNIDADE APOIADA deverá encaminhar a primeira via à UNIDADE DE APOIO em até 10 (dez) dias."
        },
        {
            question: "Qual o prazo para a UNIDADE APOIADA informar à UNIDADE DE APOIO o novo prazo de entrega e o motivo da devolução da Prestação de Contas, em caso de atraso no envio?",
            options: [
                "No mesmo dia.",
                "No prazo máximo de dois dias úteis.",
                "Em até 5 dias úteis.",
                "Em até 10 dias úteis."
            ],
            answer: "No prazo máximo de dois dias úteis.",
            explanation: "A página 89 do 'Primeiro.pdf' (Módulo 8.2) estabelece que a UNIDADE APOIADA deverá informar à UNIDADE DE APOIO o novo prazo de entrega e o motivo da devolução, no prazo máximo de dois dias úteis."
        },
        {
            question: "Quem é o responsável pelo acompanhamento e fiscalização do cumprimento da concessão, aplicação e comprovação dos suprimentos de fundos?",
            options: [
                "O detentor do Suprimento de Fundos.",
                "O Ordenador de Despesas da UNIDADE APOIADA.",
                "As UNIDADE DE APOIO concedentes.",
                "O Tribunal de Contas da União (TCU)."
            ],
            answer: "As UNIDADE DE APOIO concedentes.",
            explanation: "A página 95 do 'Primeiro.pdf' (Módulo 8.2) afirma que as UNIDADE DE APOIO concedentes são responsáveis pelo acompanhamento e pela fiscalização."
        },
        {
            question: "Qual o prazo para o Ordenador de Despesas da UNIDADE DE APOIO concedente aprovar ou impugnar as contas prestadas pelo Suprido?",
            options: [
                "Até 15 dias.",
                "Até 30 dias.",
                "Até 60 dias.",
                "Até 90 dias."
            ],
            answer: "Até 30 dias.",
            explanation: "A página 96 do 'Primeiro.pdf' (Módulo 8.2) indica que o Ordenador de Despesas deverá, expressamente, no prazo de trinta dias, aprovar as contas prestadas pelo Suprido ou impugná-las."
        },
        {
            question: "O que deve ser feito em caso de omissão de comprovação do Suprimento de Fundos no prazo estipulado?",
            options: [
                "O detentor será notificado para regularização.",
                "O processo será arquivado sem penalidades.",
                "Imediata adoção de providências administrativas internas para apuração de responsabilidades e imposição de penalidades.",
                "O valor será automaticamente estornado."
            ],
            answer: "Imediata adoção de providências administrativas internas para apuração de responsabilidades e imposição de penalidades.",
            explanation: "A página 89 do 'Primeiro.pdf' (Módulo 8.2) estabelece que a omissão de comprovação, no prazo estipulado, implica imediata adoção, pelo Dirigente Máximo da UNIDADE APOIADA, das providências administrativas internas para apuração das responsabilidades e imposição das penalidades cabíveis."
        },
        {
            question: "Qual o limite para despesas comprovadas por meio de documentos automatizados (como cupons fiscais, bilhetes de passagens) para serem relacionadas no DDR?",
            options: [
                "Até R$ 176,00.",
                "Até R$ 440,00.",
                "Até R$ 825,00.",
                "Até R$ 1.760,00."
            ],
            answer: "Até R$ 176,00.",
            explanation: "A página 92 do 'Primeiro.pdf' (Módulo 8.2) informa que o DDR é utilizado para despesas cujos valores estejam situados em até 0,1% (R$ 176,00) do previsto na letra 'a' do inciso II do artigo 23 da Lei 8.666/93."
        },
        {
            question: "Qual o prazo para o ACI da UNIDADE DE APOIO encaminhar o PAG ao Ordenador de Despesas para aprovar as contas prestadas, na ausência de impropriedades?",
            options: [
                "Até 15 dias.",
                "Até 30 dias.",
                "Até 60 dias.",
                "Até 90 dias."
            ],
            answer: "Até 30 dias.",
            explanation: "A página 100 do 'Primeiro.pdf' (Módulo 8.2) indica que o ACI encaminhará o PAG ao Ordenador de Despesas para aprovar as contas prestadas pelo Suprido, no prazo de 30 dias a contar da data de comprovação."
        },
        {
            question: "Quais os tipos de despesas que o Suprimento de Fundos não pode ser concedido, ressalvadas as situações de peculiaridades militares e serviços de inteligência?",
            options: [
                "Despesas eventuais em viagens.",
                "Aquisição de material permanente ou outra mutação patrimonial, aquisição de bens ou prestação de serviços de forma continuada, bens/serviços com contratos de fornecimento existentes, e assinaturas de periódicos.",
                "Despesas de pequeno vulto.",
                "Apoio a missões no exterior."
            ],
            answer: "Aquisição de material permanente ou outra mutação patrimonial, aquisição de bens ou prestação de serviços de forma continuada, bens/serviços com contratos de fornecimento existentes, e assinaturas de periódicos.",
            explanation: "As páginas 54 e 55 do 'Primeiro.pdf' (Módulo 8.2) listam as vedações para concessão de suprimento de fundos."
        },
        {
            question: "Em que situação o Ordenador de Despesas não concederá Suprimento de Fundos a um responsável?",
            options: [
                "Se o responsável tiver apenas um suprimento.",
                "Se o responsável tiver prestado contas no prazo.",
                "Se o responsável tiver a seu cargo a guarda ou utilização do material a adquirir, salvo exceções.",
                "Se o responsável exercer funções administrativas."
            ],
            answer: "Se o responsável tiver a seu cargo a guarda ou utilização do material a adquirir, salvo exceções.",
            explanation: "A página 52 do 'Primeiro.pdf' (Módulo 8.2) estabelece essa vedação, com a ressalva de que não houver outro servidor na repartição."
        },
        {
            question: "Qual o nome do sistema onde a Nota de Empenho é emitida?",
            options: [
                "SIAFI.",
                "SILOMS.",
                "Contratos.gov.br.",
                "AEC-SEFA."
            ],
            answer: "Contratos.gov.br.",
            explanation: "A página 7 do 'Primeiro.pdf' (Módulo 8.1) informa que a Nota de Empenho será emitida por meio do 'Contratos.gov.br'."
        },
        {
            question: "Qual a modalidade de empenho utilizada para Suprimentos de Fundos?",
            options: [
                "Estimativo.",
                "Global.",
                "Por estimativa.",
                "Ordinário."
            ],
            answer: "Global.",
            explanation: "A Nota de Empenho nº 926 no documento 'EXFI PF.pdf' e a página 7 do 'Primeiro.pdf' (Módulo 8.1) indicam a modalidade 'Global' ou '09 Suprimentos de Fundos'."
        },
        {
            question: "Qual o amparo legal para as despesas de pequeno vulto na Nota de Empenho?",
            options: [
                "Decreto 93.872/86, inciso 01.",
                "Decreto 93.872/86, inciso 02.",
                "Decreto 93.872/86, inciso 03.",
                "Lei 8.666/93."
            ],
            answer: "Decreto 93.872/86, inciso 03.",
            explanation: "A página 7 do 'Primeiro.pdf' (Módulo 8.1) especifica que o amparo legal para despesas de pequeno vulto é o Decreto 93.872/86 e o inciso '03'."
        },
        {
            question: "Qual a natureza de despesa para contratação de serviços prestados por pessoa física, visando atender despesas com contribuição previdenciária patronal?",
            options: [
                "33.90.30 (Material de Consumo).",
                "33.90.39 (Outros Serviços de Terceiros - Pessoa Jurídica).",
                "33.91.47 (Obrigações Tributárias e de Contribuições).",
                "44.90.51 (Obras e Instalações)."
            ],
            answer: "33.91.47 (Obrigações Tributárias e de Contribuições).",
            explanation: "A página 8 do 'Primeiro.pdf' (Módulo 8.1) indica a natureza de despesa 33.91.47 para serviços de pessoa física com contribuição previdenciária patronal."
        },
        {
            question: "Qual a conta corrente da conta contábil 1.1.3.1.1.02.00 (Suprimento de fundos - Adiantamento) caso o suprimento seja sigiloso?",
            options: [
                "000.",
                "999.",
                "100.",
                "500."
            ],
            answer: "999.",
            explanation: "A página 9 do 'Primeiro.pdf' (Módulo 8.1) estabelece que a conta corrente desta conta contábil deverá ser '999' para suprimento sigiloso."
        },
        {
            question: "Qual a situação utilizada na aba 'PRINCIPAL COM ORÇAMENTO' para despesas com juros/encargos de mora referente a aquisição de bens e serviços?",
            options: [
                "DOB029.",
                "DSP973.",
                "DOB005.",
                "DVL973."
            ],
            answer: "DSP973.",
            explanation: "A página 20 do 'Primeiro.pdf' (Módulo 8.1) indica a situação DSP973 para despesas com juros/encargos de mora."
        },
        {
            question: "Qual a conta contábil onde o SIAFI gerará uma OB Saque Cartão na UG em que o portador do cartão esteja cadastrado, em caso de saque indevido?",
            options: [
                "1.1.1.1.2.20.01.",
                "2.1.8.9.1.36.09.",
                "1.1.3.8.1.06.07.",
                "1.1.3.1.1.02.00."
            ],
            answer: "1.1.3.8.1.06.07.",
            explanation: "A página 32 do 'Primeiro.pdf' (Módulo 8.1) informa que o SIAFI gerará uma OB Saque Cartão na conta 1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar) em caso de saque indevido."
        },
        {
            question: "Qual a situação utilizada na aba 'Dedução' para regularização da conta 1.1.3.8.1.06.07 (Saques por Cartão de Pagamento a Classificar) por meio da emissão de um documento hábil do tipo 'SF'?",
            options: [
                "SPF003 ou SPF005, mais a situação DED009.",
                "DSP973.",
                "DOB005.",
                "DVL973."
            ],
            answer: "SPF003 ou SPF005, mais a situação DED009.",
            explanation: "A página 33 do 'Primeiro.pdf' (Módulo 8.1) especifica que a regularização da conta 1.1.3.8.1.06.07 ocorre com 'SF' e uma das situações SPF003 ou SPF005, mais a situação DED009."
        },
        {
            question: "Qual a situação utilizada na aba 'Despesa a Anular' para anulação da despesa no mesmo DH de concessão do SF, quando o saldo não aplicado conste no limite do cartão (CPGF Ostensivo)?",
            options: [
                "ASP003.",
                "ASP002.",
                "DED009.",
                "EST014."
            ],
            answer: "ASP003.",
            explanation: "A página 35 do 'Primeiro.pdf' (Módulo 8.1) indica que para CPGF Ostensivo, a situação para anulação da despesa é ASP003."
        }
    ];

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let selectedAnswer = null;
    let isAnswerSubmitted = false;
    let score = 0;
    let incorrectAnswers = [];
    let questionsPerRound = 10;
    let quizStarted = false;
    let showReview = false;
    let message = '';

    const rootElement = document.getElementById('root');

    // Function to shuffle an array
    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    // Function to render the UI
    const render = () => {
        let content = '';

        if (!quizStarted) {
            content = `
                <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Configurações do Quiz</h2>
                    <div class="mb-6">
                        <label for="numQuestions" class="block text-gray-700 text-lg font-medium mb-2">
                            Número de questões por rodada:
                        </label>
                        <input
                            type="number"
                            id="numQuestions"
                            value="${questionsPerRound}"
                            min="1"
                            max="${allQuestions.length}"
                            class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
                        />
                    </div>
                    <button
                        id="startQuizButton"
                        class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                    >
                        Iniciar Quiz
                    </button>
                </div>
            `;
        } else if (showReview) {
            content = `
                <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Revisão da Rodada</h2>
                    <p class="text-xl text-gray-700 mb-6 text-center">Você acertou ${score} de ${currentQuestions.length} questões.</p>

                    ${incorrectAnswers.length > 0 ? `
                        <div class="space-y-8">
                            <h3 class="text-2xl font-semibold text-red-600 border-b pb-2 mb-4">Questões Incorretas:</h3>
                            ${incorrectAnswers.map((item, index) => `
                                <div class="bg-red-50 p-6 rounded-lg border border-red-200">
                                    <p class="text-lg font-medium text-gray-900 mb-2">
                                        <span class="font-bold">Questão:</span> ${item.question}
                                    </p>
                                    <p class="text-base text-red-700 mb-1">
                                        <span class="font-bold">Sua Resposta:</span> ${item.yourAnswer}
                                    </p>
                                    <p class="text-base text-green-700 mb-1">
                                        <span class="font-bold">Resposta Correta:</span> ${item.correctAnswer}
                                    </p>
                                    <p class="text-base text-gray-800 mt-3">
                                        <span class="font-bold">Explicação:</span> ${item.explanation}
                                    </p>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <p class="text-xl text-green-600 text-center">Parabéns! Você acertou todas as questões!</p>
                    `}
                    <div class="mt-8 text-center">
                        <button
                            id="restartQuizButton"
                            class="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                        >
                            Reiniciar Quiz
                        </button>
                    </div>
                </div>
            `;
        } else {
            const currentQuestion = currentQuestions[currentQuestionIndex];
            if (!currentQuestion) return; // Safeguard

            content = `
                <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
                    <p class="text-lg text-gray-600 mb-4 text-right">
                        Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}
                    </p>
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">
                        ${currentQuestion.question}
                    </h2>
                    <div class="space-y-4">
                        ${currentQuestion.options.map((option, index) => `
                            <button
                                class="option-button w-full text-left p-4 rounded-lg border-2 transition duration-200 ease-in-out
                                    ${selectedAnswer === option
                                        ? 'bg-blue-200 border-blue-500'
                                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                                    }
                                    ${isAnswerSubmitted && option === currentQuestion.answer
                                        ? 'bg-green-100 border-green-500 font-semibold'
                                        : isAnswerSubmitted && selectedAnswer === option && selectedAnswer !== currentQuestion.answer
                                            ? 'bg-red-100 border-red-500 font-semibold'
                                            : ''
                                    }
                                    text-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                    ${isAnswerSubmitted ? 'cursor-not-allowed' : ''}
                                "
                                data-option="${option}"
                                ${isAnswerSubmitted ? 'disabled' : ''}
                            >
                                ${option}
                            </button>
                        `).join('')}
                    </div>

                    ${isAnswerSubmitted ? `
                        <div class="mt-6 p-4 rounded-lg bg-gray-100 border border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Explicação:</h3>
                            <p class="text-gray-700">
                                ${currentQuestion.explanation}
                            </p>
                        </div>
                    ` : ''}

                    <div class="mt-8 flex justify-between">
                        ${!isAnswerSubmitted ? `
                            <button
                                id="submitAnswerButton"
                                class="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                            >
                                Submeter Resposta
                            </button>
                        ` : `
                            <button
                                id="nextQuestionButton"
                                class="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                            >
                                ${currentQuestionIndex < currentQuestions.length - 1 ? 'Próxima Questão' : 'Ver Resultados'}
                            </button>
                        `}
                    </div>
                </div>
            `;
        }

        rootElement.innerHTML = `
            <h1 class="text-5xl font-extrabold text-blue-800 mb-8 text-center">CepaSalva</h1>
            ${content}
            ${message ? `
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div class="bg-white p-6 rounded-lg shadow-xl text-center">
                        <p class="text-lg mb-4">${message}</p>
                        <button
                            id="messageBoxOk"
                            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            OK
                        </button>
                    </div>
                </div>
            ` : ''}
        `;

        attachEventListeners();
    };

    // Function to attach event listeners
    const attachEventListeners = () => {
        if (!quizStarted) {
            const numQuestionsInput = document.getElementById('numQuestions');
            if (numQuestionsInput) {
                numQuestionsInput.addEventListener('change', (e) => {
                    questionsPerRound = parseInt(e.target.value) || 0;
                });
            }
            const startQuizButton = document.getElementById('startQuizButton');
            if (startQuizButton) {
                startQuizButton.addEventListener('click', startQuiz);
            }
        } else if (showReview) {
            const restartQuizButton = document.getElementById('restartQuizButton');
            if (restartQuizButton) {
                restartQuizButton.addEventListener('click', restartQuiz);
            }
        } else {
            document.querySelectorAll('.option-button').forEach(button => {
                button.addEventListener('click', (e) => handleAnswerSelect(e.target.dataset.option));
            });

            const submitAnswerButton = document.getElementById('submitAnswerButton');
            if (submitAnswerButton) {
                submitAnswerButton.addEventListener('click', handleSubmitAnswer);
            }

            const nextQuestionButton = document.getElementById('nextQuestionButton');
            if (nextQuestionButton) {
                nextQuestionButton.addEventListener('click', handleNextQuestion);
            }
        }

        const messageBoxOk = document.getElementById('messageBoxOk');
        if (messageBoxOk) {
            messageBoxOk.addEventListener('click', () => {
                message = '';
                render();
            });
        }
    };

    // Quiz control functions
    const startQuiz = () => {
        if (questionsPerRound < 1 || questionsPerRound > allQuestions.length) {
            message = `Por favor, insira um número entre 1 e ${allQuestions.length} para o número de questões por rodada.`;
            render();
            return;
        }
        message = '';
        const shuffledQuestions = shuffleArray([...allQuestions]).slice(0, questionsPerRound);
        currentQuestions = shuffledQuestions;
        currentQuestionIndex = 0;
        score = 0;
        incorrectAnswers = [];
        selectedAnswer = null;
        isAnswerSubmitted = false;
        quizStarted = true;
        showReview = false;
        render();
    };

    const handleAnswerSelect = (option) => {
        if (!isAnswerSubmitted) {
            selectedAnswer = option;
            render(); // Re-render to show selected option
        }
    };

    const handleSubmitAnswer = () => {
        if (selectedAnswer === null) {
            message = 'Por favor, selecione uma resposta antes de submeter.';
            render();
            return;
        }
        message = '';
        isAnswerSubmitted = true;
        const currentQuestion = currentQuestions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: currentQuestion.question,
                yourAnswer: selectedAnswer,
                correctAnswer: currentQuestion.answer,
                explanation: currentQuestion.explanation
            });
        }
        render(); // Re-render to show answer feedback
    };

    const handleNextQuestion = () => {
        selectedAnswer = null;
        isAnswerSubmitted = false;
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            render();
        } else {
            showReview = true;
            render();
        }
    };

    const restartQuiz = () => {
        quizStarted = false;
        showReview = false;
        currentQuestions = [];
        questionsPerRound = 10; // Reset to default
        render();
    };

    // Initial render
    render();
});
