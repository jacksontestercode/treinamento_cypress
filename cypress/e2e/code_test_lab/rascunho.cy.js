/// <reference types = "cypress"/>

describe('Rascunho', function(){
    this.beforeEach(function(){
        cy.visit('google.com.br')
        cy.title().should('contain',"Google")
    })
})