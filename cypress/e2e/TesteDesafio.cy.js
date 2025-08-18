/// <reference types='cypress' />

import PaginaInicial from '../support/Pages/PaginaInicial'

describe('Teste Desafio Cypress', () => {
  
   beforeEach(() => {

    PaginaInicial.acessarURL()

   })

  
  it('Cadastro automationexercise', () => {

    PaginaInicial.acessarPgLogin()
  })

})

