/// <reference types = "Cypress" />

describe('Testes GCOM', function(){
    this.beforeEach(function(){
        cy.visit('https://t2.homolog.caesb.df.gov.br/seguranca/app/login')
    })
    it('Fazer login', function(){
        cy.get('#j_username').type('jacksonmendes')
        cy.get('#j_password').type('Administrador)))')
        cy.get('#btEntrar').click()

        cy.get(':nth-child(4) > .menu-button > .menu-button-title').click()
        cy.get(':nth-child(3) > .submenuWrapper > [href="#"] > .label').click()
        cy.contains('span.label', 'Pesquisar Atendimento', { timeout: 10000 }).should('be.visible').click()    
        cy.get('#formAtendimentoPesquisa\\:j_idt411', { timeout: 20000 }).should('be.visible').type('2024122233162291')
        cy.get('span.ui-button-text.ui-c').contains('Pesquisar').click()
        cy.get('span.ui-button-icon-left.ui-icon.ui-c.ui-icon-triangle-1-s').click()
        cy.contains('span.ui-menuitem-text', 'Editar').click()
     })
    
});