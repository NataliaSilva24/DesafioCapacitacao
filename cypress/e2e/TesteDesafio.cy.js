/// <reference types='cypress' />

import PaginaInicial from '../support/Pages/PaginaInicial'
import PaginaLogin from '../support/Pages/PaginaLogin'
import Cadastro from '../support/Pages/Cadastro'
import SelecionarProdutos from '../support/Pages/SelecionarProdutos'
import Pagamento from '../support/Pages/Pagamento'


describe('Teste Desafio Cypress', () => {
  
   beforeEach(() => {

    PaginaInicial.acessarURL()

  })

  it('Realizar Login com Sucesso', () => {
       
    PaginaInicial.acessarPgLogin()
    PaginaLogin.preencherEmailLogin()
    PaginaLogin.preencherPassword()
  })

  it.only('Realizar Cadastro com Sucesso', () => {

    PaginaInicial.acessarPgLogin()
    PaginaLogin.novoCadNome()
    PaginaLogin.novoCadEmail()
    PaginaLogin.novoBtnCad()
    Cadastro.validarPgCadastro()
    Cadastro.preencherNewPasswor()
    Cadastro.preencherFirstName()
    Cadastro.preencherLastName()
    Cadastro.preencherEmpresa()
    Cadastro.preencherEndereco()
    Cadastro.preencherEstado()
    Cadastro.preencherCidade()
    Cadastro.preencherCodigoPostal()
    Cadastro.preencherTelefone()
    Cadastro.clicarCriar()
    Cadastro.validarMsgSucesso()
    
  })

  it('Realizar Cadastro com email já cadastrado', ()=> {

    PaginaInicial.acessarPgLogin()
    PaginaLogin.novoCadNome()
    PaginaLogin.novoCadEmail()
    PaginaLogin.novoBtnCad()
    PaginaLogin.validarMsgEmailExist()
   
  })

  it('Realizar Login com sucesso', ()=> {

    PaginaInicial.acessarPgLogin()
    PaginaLogin.preencherEmailLogin()
    PaginaLogin.preencherPassword()
    PaginaLogin.clicarBtnLogin()
    PaginaInicial.validarLogin()

  })

  it('Informar email invalido Login com sucesso', ()=> {

    PaginaInicial.acessarPgLogin()
    
    cy.get('[data-qa="login-email"]').type('teste@gmail.com')
    
    PaginaLogin.preencherPassword()
    PaginaLogin.clicarBtnLogin()
    PaginaLogin.validarLoginInvalido()
  
  })

    it('Informar senha invalido Login com sucesso', ()=> {

    PaginaInicial.acessarPgLogin()
    PaginaLogin.preencherEmailLogin()

    cy.get('[data-qa="login-password"]').type('987654')
    
    PaginaLogin.clicarBtnLogin()
    PaginaLogin.validarLoginInvalido()
  
  })

  it('Realizar fluxo completo de compra Women', ()=> {

    // Realizar o Login 
    PaginaInicial.acessarPgLogin()
    PaginaLogin.preencherEmailLogin()
    PaginaLogin.preencherPassword()
    PaginaLogin.clicarBtnLogin()
    PaginaInicial.validarLogin()

    //Selecionar produto    
    SelecionarProdutos.selecCatWomen()
    SelecionarProdutos.selecionarItem()
    SelecionarProdutos.continuarComprando()
    SelecionarProdutos.clicarCart()
    SelecionarProdutos.clicarChekout()
    SelecionarProdutos.clicarFazerPedido()

    //Pagamento
    Pagamento.preencherNomeCard()
    Pagamento.preencherNumeroCard()
    Pagamento.prenecherCVCCard()
    Pagamento.preencherExMonth()
    Pagamento.preencherExAno()
    Pagamento.clicarPagar()
  })


})

