const el = require('./elements').ELEMENTS

class Cadastro {

    validarPgCadastro(sucessoLogin){
        cy.get(el.sucessoLogin).should('exist')
    }

    preencherTitleMr(selecTitleMr){
        cy.get(el.selecTitleMr).click
    }

    preencherTitleMrs(selecTitleMrs){
        cy.get(el.selecTitleMrs).check
    }

    preencherNewPasswor(newCadPassword){
        cy.get(el.newCadPassword).type('Senha@123')
    }

    preencherDiaAniv(diaAniv){
        cy.get(el.diaAniv).click
        cy.get('option[value="2"]').click
    }

    preencherMesAniv(mesAniv){
        cy.get(el.mesAniv).click
        cy.get('option[value="2"]').click
    }

    preencherAnoAniv(anoAviv){
        cy,get(el.anoAviv).click
        cy.get('option[value="2000"]').click
    }

    selecionarNewsletter(checkNewsletter){
        cy.get(el.checkNewsletter).check
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

    preencherPais(cadCountry){
        cy.get(el.cadCountry).click
        cy.get('option[value="Israel"]').click
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
    
}

export default new Cadastro()