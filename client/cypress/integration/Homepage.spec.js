/// <reference types="Cypress" />

context("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has the right App title", () => {
    cy.title().should("include", "Flashcards");
  });

  it("has a header saying Homepage", () => {
    cy.get("header").should("have.text", "Homepage");
  });

  it("has filters", () => {
    cy.get("button")
      .contains("all")
      .next("button")
      .should("have.text", "js");
  });

  it("has some cards", () => {
    cy.get("h2")
      .should("have.length.gt", 3)
      .parent("section")
      .find("p")
      .should("have.length.gt", 5)
      .parent("section")
      .find("ul li")
      .should("have.length.gte", 1);
  });

  it("has a Navigation", () => {
    cy.get("nav").should("have.length", 1);
  });
});
