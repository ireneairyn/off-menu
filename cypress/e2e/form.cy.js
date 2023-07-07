/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("form page", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000/form");
  });

  it("click on logo navigates to form", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('input[name="water"]').type("Madrid tap water");
    cy.get('input[name="poppabread"]').type("Poppadoms!");
    cy.get('input[name="starter"]').type("bla");
    cy.get('input[name="mainCourse"]').type("ble");
    cy.get('input[name="sideDish"]').type("bli");
    cy.get('input[name="drink"]').type("blo");
    cy.get('input[name="dessert"]').type("blu");
    cy.get("button").click();

    cy.location('href').should(
      "eq",
      "http://localhost:3000/menu?water=Madrid+tap+water&poppabread=Poppadoms%21&starter=bla&mainCourse=ble&sideDish=bli&drink=blo&dessert=blu"
    );
  });
});
