/// <reference types = "Cypress" />

describe('Acessar o CAC TAT', function(){
    it.only('Deve acessar a página CAC TAT com sucesso', function(){
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    });
});