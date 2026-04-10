// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

export function classificarIdade(idade) {
  if (idade >= 18) {
    return ('adulto');
  } else if (idade >= 12) {
    return ('adolescente');
  } else {
    return ('criança');
  }
}

export function calcularDesconto(preco, percentual) {
  const valorDesconto = (preco * percentual) / 100;
  return preco - valorDesconto;
}

export function verificarAprovacao(nota) {
  if (nota >= 60) {
    return ('aprovado');
  } else if (nota >= 40 && nota < 60) {
    return ('recuperação');
  } else {
    return ('reprovado');
  }
}

export function somarPares(numeros) {
  let soma = 0;
  for (let numero of numeros) {
    if (numero % 2 === 0) {
      soma += numero;
    }
  }
  return soma;
}

export function contarLetra(texto, letra) {
  let contador = 0;
  for (let caractere of texto) {
    if (caractere === letra) {
      contador++;
    }
  }
  return contador;
}