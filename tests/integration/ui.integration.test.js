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
  let calculator;

  beforeEach(() => {
    document.documentElement.innerHTML = html;

    // Importa o módulo da calculadora
    calculator = require('../../src/calculator.js');

    // Preenche os inputs
    document.querySelector('#a').value = '2';
    document.querySelector('#b').value = '3';

    // Configura os botões com os IDs corretos do HTML
    document.querySelector('#add').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.add(2, 3)}`;
    });

    document.querySelector('#sub').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.subtract(2, 3)}`;
    });

    document.querySelector('#mul').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.multiply(2, 3)}`;
    });

    document.querySelector('#div').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.divide(6, 3)}`;
    });

    document.querySelector('#pow').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${calculator.power(2, 3)}`;
    });

    document.querySelector('#clear').addEventListener('click', () => {
      document.querySelector('#result').textContent = 'Resultado: —';
      document.querySelector('#a').value = '';
      document.querySelector('#b').value = '';
    });
  });

  test('clicar em + atualiza resultado', () => {
    const btn = getByText(document.body, '+');
    btn.click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 5');
  });

  test('clicar em - atualiza resultado', () => {
    const btn = getByText(document.body, '-');
    btn.click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: -1');
  });

  test('clicar em × atualiza resultado', () => {
    const btn = getByText(document.body, '×');
    btn.click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 6');
  });

  test('clicar em ÷ atualiza resultado', () => {
    const btn = getByText(document.body, '÷');
    btn.click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 2');
  });

  test('clicar em xʸ atualiza resultado', () => {
    const btn = getByText(document.body, 'xʸ');
    btn.click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 8');
  });

  test('clicar em Limpar limpa inputs e resultado', () => {
    document.querySelector('#a').value = '10';
    document.querySelector('#b').value = '5';
    const btn = getByText(document.body, 'Limpar');
    btn.click();
    expect(document.querySelector('#a').value).toBe('');
    expect(document.querySelector('#b').value).toBe('');
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: —');
  });
});
