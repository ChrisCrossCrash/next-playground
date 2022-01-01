declare namespace Cypress {
  interface Chainable<Subject = any> {
    getInputByLabel(value: string): Chainable<Subject>
  }
}
