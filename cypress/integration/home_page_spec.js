describe("My Weather App", () => {
  it("successfully loads", () => {
    cy.visit("/");

    cy.contains("Vancouver, CA");
    cy.get("[data-cy=daycard]").click({ multiple: true });
  });
});
