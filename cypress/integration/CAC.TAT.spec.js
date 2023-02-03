/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", () => {
    cy.title().should("equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Preenche os campos obrigatórios e envia o formulário", () => {
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

  it("Error Email", () => {
    cy.get("input[name=firstName]").type("testeName");
    cy.get("input[name=lastName]").type("testeName");
    cy.get("input[name=email]").first().type("joao@hotmail");
    cy.get("textarea[name='open-text-area']").type(
      "textAjudaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      { delay: 0 }
    );
    cy.get(".button").click();

    cy.get(".error").then((erro) => {
      expect(erro).to.be.visible;
      expect(erro.text().trim()).be.eq("Valide os campos obrigatórios!");
    });
  });

  it("Erro campo telefone vazio", () => {
    cy.get("input[name=firstName]").type("testeName");
    cy.get("input[name=lastName]").type("testeName");
    cy.get("input[name=email]").first().type("joao@hotmail.com");
    cy.get("textarea[name='open-text-area']").type(
      "textAjudaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      { delay: 0 }
    );
    cy.get("input[name=phone]").first().type("teste");
    cy.get("input[name=phone]").first().should("be.empty");

    cy.get(".button").click();

    cy.get(".success").should("be.visible");
  });

  it("Error Telefone obrigatório", () => {
    cy.get("input[name=firstName]").type("testeName");
    cy.get("input[name=lastName]").type("testeName");
    cy.get("input[name=email]").first().type("joao@hotmail.com");
    cy.get("textarea[name='open-text-area']").type(
      "textAjudaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      { delay: 0 }
    );
    cy.get("input[name=phone]").eq(1).click();
    cy.get(".button").click();

    cy.get(".error").then((erro) => {
      expect(erro).to.be.visible;
      expect(erro.text().trim()).be.eq("Valide os campos obrigatórios!");
    });
  });

  it("Error Sem preencher os campos", () => {
    cy.get(".button").click();

    cy.get(".error").then((erro) => {
      expect(erro).to.be.visible;
      expect(erro.text().trim()).be.eq("Valide os campos obrigatórios!");
    });
  });
  it("Error Sem preencher os campos", () => {
    cy.Form();
  });
});
