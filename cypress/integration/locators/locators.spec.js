//Selectors in Cypress IO and some related methods

let username = 'standard_user';
let password = 'secret_sauce';


describe('Locators in Cypress', function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    })

    it('GET Method', function(){

        //Get is used to GET one or more elements by selector
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="username"]').click();

    });

    it('EQ|First|Last Method', function(){
        //Get A DOM element at a specific index in an array of elements.
        cy.get('input').eq(0).type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').eq(2).click();
    });

    it('FILTER Method', function(){
        //Get the DOM elements that match a specific selector.

        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
    })

    it('FIND Method', function(){

        //Get the descendent DOM elements of a specific selector.
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').eq(2).click();
        
    });

    it('PARENT Method', function(){
        cy.get('form').parent().should('have.class', 'login-box');
    });

})