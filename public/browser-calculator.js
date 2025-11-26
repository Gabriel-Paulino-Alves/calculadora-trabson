export function add(a, b) { return Number(a) + Number(b); }
export function subtract(a, b) { return Number(a) - Number(b); }
export function multiply(a, b) { return Number(a) * Number(b); }
export function divide(a, b) {
  if (Number(b) === 0) return "Erro: divisão por zero";
  return Number(a) / Number(b);
}
export function power(a, b) { return Math.pow(Number(a), Number(b)); }
