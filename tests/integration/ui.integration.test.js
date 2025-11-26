/** @jest-environment jsdom */

require('@testing-library/jest-dom/extend-expect');
const { getByText } = require('@testing-library/dom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../../public/index.html'),
  'utf8'
);

describe('UI integration', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html;

    // Importa o módulo como CommonJS
    const calculator = require('../../src/calculator.js');

    // Coloca valores nos inputs
    document.querySelector('#a').value = '2';
    document.querySelector('#b').value = '3';

    // Atribui comportamento aos botões
    document.querySelector('#add').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.add(2, 3)}`;
    });
  });

  test('clicar em + atualiza resultado', () => {
    const btn = getByText(document.body, '+');
    btn.click();
    expect(document.querySelector('#result'))
      .toHaveTextContent('Resultado: 5');
  });
});
