/**
 * @jest-environment jsdom
 */

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

    const { add } = require('../../src/calculator.js');

    document.querySelector('#a').value = '2';
    document.querySelector('#b').value = '3';

    document.querySelector('#add').addEventListener('click', () => {
      document.querySelector('#result').textContent =
        `Resultado: ${add(2, 3)}`;
    });
  });

  test('clicar em + atualiza resultado', () => {
    const btn = getByText(document.body, '+');
    btn.click();
    expect(document.querySelector('#result'))
      .toHaveTextContent('Resultado: 5');
  });

});
