const el = require('./elements').ELEMENTS

class Cadastro {

    validarPgCadastro(sucessoLogin){
        cy.get(el.sucessoLogin).should('exist')
    }

    preencherNewPasswor(newCadPassword){
        cy.get(el.newCadPassword).type('Senha@123')
    }

    preencherFirstName(cadFirstName){
        cy.get(el.cadFirstName).type('Maria')
    }

    preencherLastName(cadLastName){
        cy.get(el.cadLastName).type('do Bairro')
    }

    preencherEmpresa(cadCompany){
        cy.get(el.cadCompany).type('Minsait')
    }

    preencherEndereco(cadAddress){
        cy.get(el.cadAddress).type('Descubra')
    }

    preencherEstado(cadState){
        cy.get(el.cadState).type('Ariel')
    }

    preencherCidade(cadCity){
        cy.get(el.cadCity).type('Jerusalém')
    }

    preencherCodigoPostal(cadZipcode){
        cy.get(el.cadZipcode).type('1234567')
    }

    preencherTelefone(cadMobileNumber){
        cy.get(el.cadMobileNumber).type('972 98562558')
    }

    clicarCriar(btnCadCreate){
        cy.get(el.btnCadCreate).parent().contains('button', 'Create Account').click()
    }

    validarMsgSucesso(txtCadSucesso){
        cy.get(el.txtCadSucesso).should('have.text','Account Created!')
    }
   
}

export default new Cadastro()