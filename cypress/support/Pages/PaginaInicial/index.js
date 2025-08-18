// interação
const el = require('./elements').ELEMENTS

class PaginaInicial {

    acessarURL(){
        cy.visit(el.url)
        cy.get(el.imgAutomation).should('be.visible')
    }

    acessarPgLogin(){
        cy.get(el.pgLogin).dblclick
        cy.get(el.validarPgLogin).should('be.visible')
    }



}

export default new PaginaInicial()