/** @jest-environment jsdom */
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/dom';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'), 'utf8');

describe('UI integration', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html;
    require('../../public/app.js'); // carrega os eventos da UI
  });

  test('soma', () => {
    document.querySelector('#a').value = '2';
    document.querySelector('#b').value = '3';
    getByText(document.body, '+').click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 5');
  });

  test('subtração', () => {
    document.querySelector('#a').value = '10';
    document.querySelector('#b').value = '4';
    getByText(document.body, '-').click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 6');
  });

  test('multiplicação', () => {
    document.querySelector('#a').value = '3';
    document.querySelector('#b').value = '5';
    getByText(document.body, '×').click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 15');
  });

  test('divisão', () => {
    document.querySelector('#a').value = '8';
    document.querySelector('#b').value = '2';
    getByText(document.body, '÷').click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 4');
  });

  test('potência', () => {
    document.querySelector('#a').value = '2';
    document.querySelector('#b').value = '3';
    getByText(document.body, '^').click();
    expect(document.querySelector('#result')).toHaveTextContent('Resultado: 8');
  });
});
