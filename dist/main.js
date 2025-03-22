"use strict";

// Array de objetos com nomes e notas de alunos
var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 4
}];

// Função que retorna apenas os alunos aprovados (nota >= 6)
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Exemplo de uso da função
var aprovados = alunosAprovados(alunos);
console.log(aprovados);
// Saída esperada:
// [ { nome: 'João', nota: 7 }, { nome: 'Pedro', nota: 8 }, { nome: 'Ana', nota: 6 } ]