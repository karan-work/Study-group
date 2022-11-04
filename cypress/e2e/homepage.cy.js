// create export module to visit work.co
/* 
  then create another function to both click on the logo and pass in the data-test-id to click (but it always uses
  the logo data-test-id to bring up the grid) 

  and then valudate the urls individually
*/


describe('navigates to homepage to verify copy and link targets', () => {
    it('validates page title and headline copy', () => {
      cy.visit('https://work.co')
      cy.title().should('eq', 'Work & Co | Digital Product Agency')
      cy.get("[data-test-id=header-title-text]").should('have.text', "We design and ship digital products that transform companies.")
    })
    
    it ('validates logo redirect URL', () => {
        cy.visit('https://work.co')
        cy.get("[data-test-id=global-menu-btn]").click()
        cy.url().should('eq', 'https://work.co/grid/')
    })
    
    it ('validates select clients redirect', () => {
        cy.visit('https://work.co')
        cy.get("[data-test-id=global-menu-btn]").click()
        cy.get("[data-test-id=grid-select-clients-link]").click()
        cy.url().should('eq', 'https://work.co/clients/')
    }) 
  
    it ('validates expertise list redirect', () => {
      cy.visit('https://work.co')
      cy.get("[data-test-id=global-menu-btn]").click()
      cy.get("[data-test-id=grid-practice-areas-link]").click()
      cy.url().should('eq', 'https://work.co/company/')
    }) 
  })