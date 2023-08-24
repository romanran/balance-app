// https://on.cypress.io/api

describe('Balance test', () => {
    it('visits the app root url', () => {
        // cy.intercept('GET', 'http://someapi.net/transactions', { fixture: 'transactions.json' }).as('dataRequest')
        cy.visit('/')
        // cy.wait('@dataRequest')
        cy.get('[data-test="balance"]').should((elem) => {
            expect(elem.text()).to.equal('Total balance: 24 619,14 GBP')
        })
    })
})
