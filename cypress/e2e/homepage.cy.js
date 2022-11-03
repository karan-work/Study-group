describe('navigates to homepage to verify copy and link targets', () => {
    it('validates page title and headline copy', () => {
      cy.visit('https://work.co')
      cy.title().should('eq', 'Work & Co | Digital Product Agency')
      cy.get("[data-test-id=header-title-text]").should('have.text', "We design and ship digital products that transform companies.")
    })
    
    it ('validates logo redirect URL', () => {
        cy.logoClick()
        cy.url().should('eq', 'https://work.co/grid/')
    })

    it ('validates select clients redirect', () => {
        cy.logoClick()
        cy.verifyUrlRedirect('grid-select-clients-link', 'https://work.co/clients/')
    }) 
  
    it ('validates expertise list redirect', () => {
      cy.logoClick()
      cy.verifyUrlRedirect('grid-practice-areas-link', 'https://work.co/company/')
    }) 
  })