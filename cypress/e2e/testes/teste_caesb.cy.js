/// <reference types = "Cypress" />

describe('Acessar o CAC TAT', function(){
    this.beforeEach(function(){
        cy.visit('https://t1.homolog.caesb.df.gov.br/seguranca/app/login')
    })
    it.only('Preencher os campos usuario e senha e clicar no botão entrar', function(){
        cy.get('#j_username').type('jacksonmendes')
        cy.get('#j_password').type('Administrador)))')
        cy.get('#btEntrar').click()
     })
    
});

