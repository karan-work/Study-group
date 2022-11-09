describe("authentication flow test script", () => {
  it("validates the correct saucelabs page title", () => {
    cy.visit("https://saucedemo.com");
    cy.title().should("eq", "Swag Labs");
  });

  it("verifies failed authentication error message", () => {
    cy.visit("https://saucedemo.com");
    cy.get("[data-test=username]").type("test@test.com");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=error]").then(($el) => {
      const innerText = $el.text();
      expect(innerText).to.eq(
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });

  it("validates successful authentication using URL", () => {
    cy.visit("https://saucedemo.com");
    cy.get("[data-test=username]").type("standard_user");
    cy.get("[data-test=password]").type("secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.url().should('include', '/inventory.html')
  });
});