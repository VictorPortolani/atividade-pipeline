const { test, expect } = require('@playwright/test');

const {soma, multiplicacao} = require('../src/index.js');
//teste para soma
test('soma de 2 + 2 deve ser igual a 4', () => {
  expect(soma(2, 2)).toBe(4);
});

//teste para multiplicação
test('multiplicação de 3 * 4 deve ser igual a 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});