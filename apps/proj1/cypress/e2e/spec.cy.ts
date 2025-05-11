describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Home').click();
    cy.url().should('include', '/home');
    cy.get('h1').contains('Home Page');
  });
});
