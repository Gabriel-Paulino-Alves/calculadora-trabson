describe('Calculadora E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080'); // URL do seu app
  });

  it('faz soma', () => {
    cy.get('#a').type('7');
    cy.get('#b').type('8');
    cy.get('#add').click();
    cy.get('#result').should('contain.text', 'Resultado: 15');
  });

  it('faz subtração', () => {
    cy.get('#a').type('10');
    cy.get('#b').type('4');
    cy.get('#sub').click();
    cy.get('#result').should('contain.text', 'Resultado: 6');
  });

  it('faz multiplicação', () => {
    cy.get('#a').type('3');
    cy.get('#b').type('5');
    cy.get('#mul').click();
    cy.get('#result').should('contain.text', 'Resultado: 15');
  });

  it('faz divisão', () => {
    cy.get('#a').type('20');
    cy.get('#b').type('4');
    cy.get('#div').click();
    cy.get('#result').should('contain.text', 'Resultado: 5');
  });

  it('faz potência', () => {
    cy.get('#a').type('2');
    cy.get('#b').type('3');
    cy.get('#pow').click();
    cy.get('#result').should('contain.text', 'Resultado: 8');
  });

  it('limpa inputs e resultado', () => {
    cy.get('#a').type('12');
    cy.get('#b').type('7');
    cy.get('#clear').click();
    cy.get('#a').should('have.value', '');
    cy.get('#b').should('have.value', '');
    cy.get('#result').should('contain.text', 'Resultado: —');
  });

  it('não permite divisão por zero', () => {
    cy.get('#a').type('10');
    cy.get('#b').type('0');
    cy.get('#div').click();
    // ajuste conforme sua UI. Se script.js mostra '—' quando divisão por zero:
    cy.get('#result').should('contain.text', 'Resultado: Erro: divisão por zero');
    //cy.get('#result').should('contain.text', 'Resultado: —');
    // Se mostrar 'Erro: divisão por zero', troque para:
    // cy.get('#result').should('contain.text', 'Resultado: Erro: divisão por zero');
  });
});
