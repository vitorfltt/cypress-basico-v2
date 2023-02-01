Cypress.Commands.add("Form", function () {
  cy.get("input[name=firstName]").type("testeName");
  cy.get("input[name=lastName]").type("testeName");
  cy.get("input[name=email]").first().type("joao@hotmail.com");
  cy.get("textarea[name='open-text-area']").type(
    "textAjudaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    { delay: 0 }
  );
  cy.get(".button").click();

  cy.get(".success").should("be.visible");
});
