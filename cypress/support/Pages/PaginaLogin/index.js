// interação


const el = require('./elements').ELEMENTS

class PaginaLogin {

    preencherEmailLogin(emailLogin){
        cy.get(el.emailLogin).type('m@m.com')
    }

    preencherPassword(senhaLogin){
        cy.get(el.senhaLogin).type('12345')
    }

    clicarBtnLogin(btnLogin){
        cy.get(el.btnLogin).click
    }

    novoCadNome(newCadNome){
        cy.get(el.newCadNome).type('Maria do Bairro')
    }

    novoCadEmail(newCadEmail){
        cy.get(el.newCadEmail).type('emily_vieira@eventos.com.br')
    }

    novoBtnCad(novoBtnCad){
        cy.get(el.newBtnCadSignup).parent().contains('button', 'Signup').click()
    }

    




}

export default new PaginaLogin()