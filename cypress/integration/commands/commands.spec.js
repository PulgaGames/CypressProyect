  // Cypress comes with its own API for creating custom commands
    // and overwriting existing commands. The built in Cypress commands
    // use the very same API that's defined below.

    //First step is creating a new command file under /support/commands.js
    //Why there? since it is loaded before any test files are evaluated via
    //an import statement in your supportFile (cypress/support/index.js by default).

describe('Command Example', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    it('Sucess Login Test', function(){
        cy.typeLogin('standard_user', 'secret_sauce');
        cy.get('.title').should('contain.text', 'Products');
    });

    it('Not Sucess Login Test', function(){
        cy.typeLogin('standard_user', 'dummyPassword');
        cy.get('[data-test="error"]').should('contain.text', "Epic sadface: Username and password do not match any user in this service");
    });
});