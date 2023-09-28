describe('Location Demo', function(){

    beforeEach(function(){
        cy.visit('https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login');
    });

    it('should have title tag with value GeoAseo', function(){
        cy.title().should('eq','GeoAseo');
    });

    it('URL should be https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login/', function(){
        cy.url().should('eq', 'https://gas-uat.apps.cloud.sigmaingenieria.net/content-layout/login');
    })

    it('should be HTTPS',function(){
        cy.location('protocol').should('contains', 'https');
    });

    it('should login Geoaseo ', function(){
        cy.get('select#sistema').select("GeoAseo Pruebas")

        cy.get("#inputUsuario").type('juli');
        cy.get('#inputPass').type('juli');
        cy.get('#login > div > div > div > div > div.card-body > div > form > div.form-group.botones-login > div > div > button').click();
        cy.wait(5000);
        cy.location('pathname').should('eq', '/administracion') 
        
    })

})