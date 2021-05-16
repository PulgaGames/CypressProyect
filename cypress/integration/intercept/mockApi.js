
//Mock API responses may be useful during development and testing when live data is either unavailable or unreliable.
// While designing an API, you can use mock APIs to work concurrently on the front and back-end, as well as to gather feedback from developers. 

describe('Intercept Demo', function(){

    it('Initial Validation', function(){
        cy.visit('http://localhost:3000/');
        cy.get('#todo-list li')
        .should('have.length', 2)
        .and('contain', 'test')
        .and('contain', 'wash dishes')
    });

    it('Mocked API Response validation',function(){

        cy.intercept('GET' , '/todos', {fixture: 'intercept/interceptFixture.json'}).as('getTodos-fixture');

        cy.visit('http://localhost:3000/');

        cy.get('#todo-list li')
        .should('have.length', 3)
        .and('contain', 'Cypress assertions video')
        .and('contain', 'Page Object Model Cypress')
        .and('contain', 'Intercept Cypress')

    })

    it('Mocked a ready todo list', function(){

        const stubSample = [{
            "title": "Test Intercept",
            "completed": true,
            "id": "1"
        }]

        cy.intercept('GET' , '/todos', {body: stubSample}).as('getTodos-body');

        cy.visit('http://localhost:3000/');

        cy.get('div label').should('have.css', 'text-decoration', 'line-through solid rgb(217, 217, 217)')

    })




})