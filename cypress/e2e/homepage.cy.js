// create other file for navigating to work.co site and clicking the logo 

// @TODO
// remove comments and run tests to make sure they pass. push change to the branch and create PR, add em all
describe('navigates to homepage to verify copy and link targets', () => {
    it('validates page title and headline copy', () => {
      cy.visit('https://work.co')
      cy.title().should('eq', 'Work & Co | Digital Product Agency')
      cy.get("[data-test-id=header-title-text]").should('have.text', "We design and ship digital products that transform companies.")
    })
    // click the logo and make sure it goes to https://work.co/grid/
    it ('validates logo redirect', () => {
        cy.visit('https://work.co')
    })
    // click the logo then click on select clients and make sure it goes to https://work.co/clients/
    it ('validates select clients redirect', () => {

    })
    // click the logo then click on expertise and capabilities and make sure it goes to https://work.co/company/
    // on L/XL viewports it'll show, on a different viewport it shows as "Practice Areas" -> default viewport is 1000x660 so use the proper selector at that viewport size
    // set a custom viewport as a cypress config file using the cy.viewport method
    it ('validates expertise list redirect', () => {

    }) 
  })