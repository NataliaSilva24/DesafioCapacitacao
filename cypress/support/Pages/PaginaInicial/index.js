// interação
const el = require('./elements').ELEMENTS

class PaginaInicial {

    acessarURL(){
        cy.visit(el.url)
        cy.get(el.imgAutomation).should('be.visible')
    }

    acessarPgLogin(clicarPgLogin){
        cy.get(el.clicarPgLogin).parent().contains('a', 'Login').click()
        cy.get('h2[class="or"]').should('be.visible')
    }

    preencherEmailLogin(emailLogin){
        cy.get(el.emailLogin).type('m@m.com')
    }

    preencherPassword(senhaLogin){
        cy.get(el.senhaLogin).type('12345')
    }

    validarLogin(validarLogin){
        cy.get(el.validarLogin).should('exist')
    }
    


}

export default new PaginaInicial()