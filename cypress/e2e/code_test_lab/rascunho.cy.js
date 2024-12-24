/// <reference types="cypress" />

describe('Atendimento OSVE Pesquisa', function() {
    beforeEach(function() {
        cy.visit('https://t2.homolog.caesb.df.gov.br/seguranca/app/login')
        cy.title().should('contain', 'ERP Caesb')
    })

    it('Fazer login, pesquisar Equipamento, voltar, pesquisar Veículo e Patrimônio', function() {
        // Faz login no sistema
        cy.get('#j_username').type('jacksonmendes')
        cy.get('#j_password').type('Administrador)))')
        cy.get('#btEntrar').click()

        // Navega pelos menus
        cy.get(':nth-child(4) > .menu-button > .menu-button-title').click()
        cy.get(':nth-child(3) > .submenuWrapper > [href="#"] > .label').click()

        // Acessa o menu específico "Pesquisar Atendimento OSVE"
        cy.contains('span.label', 'Pesquisar Atendimento OSVE', { timeout: 10000 }).should('be.visible').click()

        // Verifica se a nova página carregou corretamente
        cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')

        // Seleciona "Equipamento" e clica em "Pesquisar"
        cy.get('#form1\\:j_idt414 > .ui-selectonemenu-trigger > .ui-icon').click()
        cy.contains('li', 'Equipamento').click({ force: true })
        cy.get('button[id="form1:pesquisar"]').click()

        // Aguarda o carregamento da pesquisa
        cy.wait(1000)

        // Clica no botão "Alterar filtro de pesquisa" para voltar
        cy.get('button#form1\\:j_idt427').should('be.visible').click({ force: true })

        // Aguarda 1 segundo para garantir que o botão foi clicado
        cy.wait(1000)

        // Verifica se a URL voltou para a página de pesquisa
        cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')

        // Seleciona "Veículo" e clica em "Pesquisar"
        cy.get('#form1\\:j_idt414 > .ui-selectonemenu-trigger > .ui-icon').click()
        cy.contains('li', 'Veículo').click({ force: true })
        cy.get('button[id="form1:pesquisar"]').click()

        // Aguarda o carregamento da pesquisa de Veículo
        cy.wait(1000)

        // Verifica se a URL contém a pesquisa de Veículo
        cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')

        // Clica no botão "Alterar filtro de pesquisa" para voltar novamente
        cy.get('button#form1\\:j_idt427').should('be.visible').click({ force: true })

        // Seleciona "Selecione..." no campo de Tipo atendimento
        cy.get('#form1\\:j_idt414 > .ui-selectonemenu-trigger > .ui-icon').click()
        cy.contains('li', 'Selecione...').click({ force: true })

        // Verifica se o filtro "Selecione..." foi aplicado
        cy.get('#form1\\:j_idt422_label').should('have.text', 'Selecione...')

        // Aqui, vamos continuar a pesquisa com "Patrimônio" e "Matrícula" sem clicar no botão "Pesquisar" novamente.
        
        // Pesquisa por "Patrimônio" com o código "10366"
        cy.get('#form1\\:j_idt406').clear().type('10366')
        cy.get('button[id="form1:pesquisar"]').click()
        cy.wait(1000) // Aguarda o carregamento da pesquisa de Patrimônio
        cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')

        // Clica no botão "Alterar filtro de pesquisa" para voltar à página de pesquisa
        cy.get('button#form1\\:j_idt427').should('be.visible').click({ force: true })

        // Limpa o campo de Patrimônio
        cy.get('#form1\\:j_idt406').clear()

        // Pesquisa por "Matrícula do Responsável" com o código "800104"
        cy.get('#form1\\:j_idt409').clear().type('800104')
        cy.get('button[id="form1:pesquisar"]').click()
        cy.wait(1000) // Aguarda o carregamento da pesquisa de Matrícula
        cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')

        // Clica no botão "Alterar filtro de pesquisa" para voltar à página de pesquisa
        cy.get('button#form1\\:j_idt427').should('be.visible').click({ force: true })

        // Limpa o campo de Matrícula
        cy.get('#form1\\:j_idt409').clear()

        // Realiza as pesquisas nas seguintes ordens:
        // Recebida, Em execução, Cancelada, Aguardando, Concluída
        
        const situacoes = ['Recebida', 'Em execução', 'Cancelada', 'Aguardando', 'Concluída',]
        
        situacoes.forEach((situacao) => {
            cy.get('#form1\\:j_idt414 > .ui-selectonemenu-trigger > .ui-icon').click()
            cy.contains('li', situacao).click({ force: true })
            cy.get('button[id="form1:pesquisar"]').click()

            // Aguarda o carregamento da pesquisa
            cy.wait(1000)

            // Clica no botão "Alterar filtro de pesquisa" para voltar
            cy.get('button#form1\\:j_idt427').should('be.visible').click({ force: true })

            // Aguarda 1 segundo para garantir que o botão foi clicado
            cy.wait(1000)

            // Verifica se a URL voltou para a página de pesquisa
            cy.url().should('include', '/gcom/app/atendimento/osve/atendimentoOsvePesquisa')
        })

        // Adiciona uma pausa no final
        cy.wait(3000)
    })
})