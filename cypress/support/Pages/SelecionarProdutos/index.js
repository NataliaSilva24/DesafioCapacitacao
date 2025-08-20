const el = require('./elements').ELEMENTS

class SelecionarProdutos {

    selecCatWomen(catWomen){
        cy.get(el.catWomen).parent().contains('a', 'Women').click()
        cy.get('a[href="/category_products/1"]').parent().contains('a', 'Dress ').click()
        cy.get('h2[class="title text-center"]').should('exist')
    }

    selecionarItem(btnViewProd){

        cy.get(el.btnViewProd).parent().contains('a','Add to cart').trigger('click')
        cy.get('.modal-content').should('exist')

    }

    botaoCarrinho(btnViewCart){
        cy.get(el.btnViewCart).first().contains('a','View Cart').trigger('click')
    }

    continuarComprando(btnContCompra){
        cy.get(el.btnContCompra).parent().contains('button','Continue Shopping').trigger('click')
    }

    clicarCart(btnViewCart){
        cy.get(el.clicarPgCart).parent().contains('a', ' Cart').click()
        cy.get('a[class="btn btn-default check_out"]').should('exist')
    }

    clicarChekout(btnCheckout){
        cy.get(el.btnCheckout).parent().contains('a','Proceed To Checkout').click()
        cy.get('.step-one').should('exist')
    }

    clicarFazerPedido(btnPlaceOrder){
        cy.get(el.btnPlaceOrder).parent().contains('a','Place Order').click()
    }


}
export default new SelecionarProdutos()