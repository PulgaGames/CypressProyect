describe("Modulo de pruerbas ",function(){


    it("Modulo de prueba 1 ",function(){

        cy.visit("www.google.com")
    })

    it("Verificar que estoy en google ",function(){

        cy.title.should("eq","Google")
    })






})