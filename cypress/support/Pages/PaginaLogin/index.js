// interação


const el = require('./elements').ELEMENTS

class PaginaLogin {

    preencherEmailLogin(emailLogin){
        cy.get(el.emailLogin).type('emily_vieira5@eventos.com.br')
    }

    preencherPassword(senhaLogin){
        cy.get(el.senhaLogin).type('Senha@123')
    }

    clicarBtnLogin(btnLogin){
        cy.get(el.btnLogin).parent().contains('button', 'Login').click()
    }

    novoCadNome(newCadNome){
        cy.get(el.newCadNome).type('Maria do Bairro')
    }

    novoCadEmail(newCadEmail){
        cy.get(el.newCadEmail).type('tiago-barros244@teravida.com.br')
    }

    novoBtnCad(novoBtnCad){
        cy.get(el.newBtnCadSignup).parent().contains('button', 'Signup').click()
    }

    validarMsgEmailExist(txtErro){
        cy.get(el.txtErro).should('have.text','Email Address already exist!')
    }

    validarLoginInvalido(txtErro){
        cy.get(el.txtErro).should('have.text','Your email or password is incorrect!')
    }

}

export default new PaginaLogin()