/// <reference types="Cypress" />

describe("News tests class", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  Cypress._.times(5, () => {
    it("Run tests very times", () => {
      cy.title().should("equal", "Central de Atendimento ao Cliente TAT");
    });
  });

  it("exibe e esconde as mensagens de sucesso e erro usando o .invoke", () => {
    cy.get(".success")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Mensagem enviada com sucesso.")
      .invoke("hide")
      .should("not.be.visible");
    cy.get(".error")
      .should("not.be.visible")
      .invoke("show")
      .should("be.visible")
      .and("contain", "Valide os campos obrigatórios!")
      .invoke("hide")
      .should("not.be.visible");
  });

  it("Test use request", () => {
    cy.request("https://cac-tat.s3.eu-central-1.amazonaws.com/index.html").then(
      (response) => {
        const { status, statusText, body } = response;
        expect(status).to.equal(200);
        expect(statusText).to.equal("OK");
        expect(body).to.include("CAC TAT");
      }
    );
  });

  it.only("find the cat", () => {
    cy.request("https://cac-tat.s3.eu-central-1.amazonaws.com/index.html").then(
      (response) => {
        const { body } = response;
        expect(body).to.include("🐈");
      }
    );
  });

  it.only("Find the cat 2", () => {
    cy.get("#cat").invoke("show").should("be.visible");
  });
});
