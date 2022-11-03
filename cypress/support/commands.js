// -- This is a parent command --
Cypress.Commands.add('logoClick', () => { 
    cy.visit('https://work.co')
    cy.get("[data-test-id=global-menu-btn]").click()
 })

 Cypress.Commands.add('verifyUrlRedirect', (dataID, urlString) => {
    cy.get(`[data-test-id=${dataID}]`).click()
    cy.url().should('eq', urlString)
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })