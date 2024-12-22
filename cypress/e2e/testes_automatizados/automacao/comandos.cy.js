/// <reference types = "Cypress" />

describe.only('Acessar o CAC TAT', function(){
    this.beforeEach(function(){
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    })
    it('verifica titulo da aplicação', function(){
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    });
    it.only('preenche os campos obrigatorios e envia o formulario', function(){
        cy.get('#firstName').type('Jackson')        
        cy.get('#lastName').type('Mendes')
        cy.get('#email').type('jacksonfla6@gmail.com')
        cy.get('#open-text-area').type('Teste')        
        cy.get('button[type="submit"]').click()
    });
});

