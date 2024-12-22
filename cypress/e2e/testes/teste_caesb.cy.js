/// <reference types = "Cypress" />

describe('Acessar o CAC TAT', function(){
    this.beforeEach(function(){
        cy.visit('https://t2.homolog.caesb.df.gov.br/seguranca/app/login')
    })
    it('verifica titulo da aplicação', function(){
        cy.title().should('ERP Caesb')
    });
    it.only('preenche os campos obrigatorios e envia o formulario', function(){
        cy.get('#firstName').type('Jackson')        
        cy.get('#lastName').type('Mendes')
        cy.get('#email').type('jacksonfla6@gmail.com')
        cy.get('#open-text-area').type('Teste')        
        cy.get('button[type="submit"]').click()
    });
});

