/// <reference types="cypress" />

context('searchInShop', () => {
  beforeEach(() => {
    cy.visit('/');
      cy.on('uncaught:exception', (err, runnable) => {
        //expect(err.message).to.include('Script error')
        return false
      })
  })

  it('click and navigate to the Shop on the home page', () => {
    cy.viewport(1920,1080);
    cy.findAllByText('Shop').first().click();
    cy.get('.header-module--search--2pvSW [type="search"]').first().type('Heart of Oxford');
    cy.on('uncaught:exception', (err, runnable) => {
     // expect(err.message).to.include('AssertionError')
      return false
    }) 
    cy.get('.tile-module--tile--1ZeJx').its('length').should('be.gte',2)   
    const indexOfTile= Math.floor(Math.random() * (Cypress.$('.tile-module--tile--1ZeJx').length-1))
    cy
      .get('.tile-module--tile--1ZeJx').eq(indexOfTile)
      .invoke('attr','href')
      .then(href=>{
        cy
          .request(href)
          .its('status')
          .should('eq',200)
      })   
  }) 
})
