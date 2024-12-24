/// <reference types ="cypress"/>

describle('Treinamento diario', function(){
    beforeEach(function(){
        cy.visit('https://www.youtube.com/')
       
    })
    it('Teste acessar a párina do google',function(){
        cy.title().should('contain','YouTube')

    })
})