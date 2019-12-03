/// <reference types="Cypress" />

context("Settings", () => {
  beforeEach(() => {
    cy.visit("/settings");
  });

  it("has the Settings header", () => {
    cy.get("header").should("contain", "Settings");
  });

  it("has 2 inputs and 2 text areas and one button", () => {
    cy.get("input").should("have.length", 2);
    cy.get("textarea").should("have.length", 2);
    cy.get("button")
      .contains("Create")
      .should("have.length", 1);
  });

  it("creates a new card", () => {
    cy.get("label")
      .contains("Title")
      .find("input")
      .type("TestHeadline");

    cy.get("label")
      .contains("Question")
      .find("textarea")
      .type("TestQuestion");

    cy.get("label")
      .contains("Answer")
      .parent()
      .find("textarea")
      .type("TestAnswer");

    cy.get("label")
      .contains("Tags")
      .find("input")
      .type("test, tag");

    cy.get("button")
      .contains("Create card")
      .click();

    cy.visit("/");
    cy.get("h2").contains("TestHeadline");

    cy.request("http://localhost:3333/cards/delete-test-cards").then(res => {
      cy.wrap(res.body.success).should("be.true");
    });
  });
});
