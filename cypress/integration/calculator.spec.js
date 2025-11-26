describe('Calculadora E2E', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('faz soma na UI', () => {
    cy.get('#a').type('7');
    cy.get('#b').type('8');
    cy.get('#add').click();
    cy.get('#result').should('contain', 'Resultado: 15');
  });

});
