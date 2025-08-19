/// <reference types='cypress' />

import PaginaInicial from '../support/Pages/PaginaInicial'
import PaginaLogin from '../support/Pages/PaginaLogin'
import Cadastro from '../support/Pages/Cadastro'


describe('Teste Desafio Cypress', () => {
  
   beforeEach(() => {

    PaginaInicial.acessarURL()

   })

  
  it('Realizar Login com Sucesso', () => {
       
    PaginaInicial.acessarPgLogin()
    PaginaLogin.preencherEmailLogin()
    PaginaLogin.preencherPassword()
  })

  it.only('Realizar Cadastro Mr com Sucesso', () => {

    PaginaInicial.acessarPgLogin()
    PaginaLogin.novoCadNome()
    PaginaLogin.novoCadEmail()
    PaginaLogin.novoBtnCad()
    Cadastro.validarPgCadastro()
    Cadastro.preencherTitleMr()
   // Cadastro.preencherDiaAniv()
   // Cadastro.preencherMesAniv()
   // Cadastro.preencherAnoAniv()
    //Cadastro.preencherFirstName()
    //Cadastro.preencherLastName()
    //Cadastro.preencherEmpresa()
    //Cadastro.preencherEndereco()

    
  })

})

