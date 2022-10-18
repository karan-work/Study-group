describe('headline copy validation', () => {
  it('navigates to the W&C site and compares the header to a provided string', () => {
    cy.visit('https://work.co')
    cy.get('[data-test-id=header-title-text').should("have.text", "We design and ship digital products that transform companies.")
  })
})