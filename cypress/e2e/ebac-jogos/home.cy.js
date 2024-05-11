/// <reference types="cypress" />

describe('Testes para a home', () => {
  it('Deve renderezizar 4 vagas', () => {
    cy.viewport("macbook-15","portrait")
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
  })
  it('Deve filtrar por fullstack', () => {
    cy.visit('https://ebac-jobs-e2e.vercel.app/')
    cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
    cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1).should('contain', 'fullstack')
  })
})
