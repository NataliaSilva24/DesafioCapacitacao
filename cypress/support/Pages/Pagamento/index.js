const el = require('./elements').ELEMENTS

class Pagamento {

    preencherNomeCard(txtNameCard){
        cy.get(el.txtNameCard).type('Henrique Victor Felipe Fogaça')
    }

    preencherNumeroCard(txtNumberCard){
        cy.get(el.txtNumberCard).type('5484 2445 9268 9713')
    }

    prenecherCVCCard(txtCVC){
        cy.get(el.txtCVC).type('520')
    }

    preencherExMonth(txtExpirationMonth){
        cy.get(el.txtExpirationMonth).type('11')
    }

    preencherExAno(txtExpirationYear){
        cy.get(el.txtExpirationYear).type('2035')
    }

    clicarPagar(btnPagar){
        cy.get('.payment-information').parent().contains('button','Pay and Confirm Order').click()
        cy.get('[data-qa="order-placed"]').should('have.text','Order Placed!')
    }
    
}

export default new Pagamento()