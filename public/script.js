import { add, subtract, multiply, divide, power } from "./browser-calculator.js";

const a = document.getElementById("a");
const b = document.getElementById("b");
const result = document.getElementById("result");

function show(v) {
  result.textContent = `Resultado: ${v}`;
}

document.getElementById("add").onclick = () => show(add(a.value, b.value));
document.getElementById("sub").onclick = () => show(subtract(a.value, b.value));
document.getElementById("mul").onclick = () => show(multiply(a.value, b.value));
document.getElementById("div").onclick = () => {
  try {
    show(divide(a.value, b.value));
  } catch (e) {
    show("Erro: divisão por zero"); // ou "—" se preferir
  }
};
document.getElementById("pow").onclick = () => show(power(a.value, b.value));

document.getElementById("clear").onclick = () => {
  a.value = "";
  b.value = "";
  show("—");
};
