//TODO(Remember to add this ref component for intellisense or add a jsocnfig.json)
//TODO(also checkout jsconfig.json for vs code configuration and cypress.json for a schema file to help)
/// <reference types="Cypress" />

describe('My first', () => {
    xit('Doesn\'t do much', () => {
        expect(true).to.equal(false)
    })

    it('Visits the kitchen sink', () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
})