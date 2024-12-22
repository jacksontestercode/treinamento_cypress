/// <reference types = 'Cypress' />

describe('GCOM - Atendimento Comercial e Serviços', function(){
    // O beforeEach será executado antes de cada teste (it)
        beforeEach(function(){
            cy.visit('https://t2.homolog.caesb.df.gov.br/seguranca/app/login')
        })
        it('Fazer login', function(){
             // Realiza o login
             //O símbolo # em seletores CSS é usado para selecionar elementos HTML com base no seu atributo id.
            cy.get('#j_username').type('jacksonmendes') // Seleciona o campo de entrada de username pelo ID e digita o nome de usuário
            cy.get('#j_password').type('Administrador)))') // Seleciona o campo de entrada de senha pelo ID e digita a senha
            cy.get('#btEntrar').click() // Seleciona o botão de login pelo ID e clica nele
        })
    })