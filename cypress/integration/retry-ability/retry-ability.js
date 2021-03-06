//What is the retry ability in Cypress
//-> The retry-ability allows the tests to complete each command as soon as the assertion passes, 
//without hard-coding waits. If your application takes a few milliseconds or even seconds to render each DOM element - no big deal, 
//the test does not have to change at all.

describe('Retry-Ability Session', function(){

    beforeEach(function(){
        cy.visit('http://192.168.0.13:8888/#/'); // Command
    });

    //✅ If the assertion that follows the cy.get() command passes, then the command finishes successfully.
    //🚨 If the assertion that follows the cy.get() command fails, then the cy.get() command will requery the application’s DOM again. 
    //Then Cypress will try the assertion against the elements yielded from cy.get(). If the assertion still fails, cy.get() will try requerying the DOM again, 
    //and so on until the cy.get() command timeout is reached.

    //In the example, Within a few milliseconds after the DOM updates, cy.get() finds two elements and the should('have.length', 2) assertion passes.

    it('should create two items', () => {

        //Get -> Get one or more DOM elements by selector or alias.
        cy.get('.new-todo')                 // command
          .type('todo A{enter}')            // command
          .type('todo B{enter}')            // command
      
        cy.get('.todo-list li')             // command
          .should('have.length', 2)         // assertion
      })
})