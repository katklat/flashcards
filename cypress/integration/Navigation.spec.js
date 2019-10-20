/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has 4 navigation points', () => {
    cy.get('nav a').should('have.length', 4)
  })

  it('can navigate to Practice page', () => {
    cy.get('nav a')
      .contains('Practice')
      .click()

    cy.get('header').should('contain', 'Practice')
  })

  it('can navigate to Bookmarks page', () => {
    cy.get('nav a')
      .contains('Bookmarks')
      .click()

    cy.get('header').should('contain', 'Bookmarks')
  })

  it('can navigate to Settings page', () => {
    cy.get('nav a')
      .contains('Settings')
      .click()

    cy.get('header').should('contain', 'Settings')
  })

  it('highlights the selected navigation point', () => {
    cy.get('nav a')
      .contains('Settings')
      .click()
      .should('have.css', 'background-color', 'rgb(255, 105, 180)')

    cy.get('nav a')
      .contains('Home')
      .should('have.css', 'background-color', 'rgb(128, 128, 128)')
  })
})
