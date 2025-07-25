const notas = [];

document.querySelector("#botaoAdicionar").addEventListener("click", adicionarNota);
document.querySelector("#botaoMedia").addEventListener("click", calcularMedia);

function adicionarNota() {
  const inputNota = document.querySelector("#nota").value.replace(',', '.').trim();
  const textarea = document.querySelector("#listaNotas");
  const resultado = document.querySelector("#media");

  if (inputNota === '') {
    alert("Por favor, insira uma nota.");
    return;
  }

  const notaInserida = parseFloat(inputNota);


  if (isNaN(notaInserida) || notaInserida < 0 || notaInserida > 10) {
    alert("A nota inserida é inválida!");
    return;
  }

  notas.push(notaInserida);

  textarea.value += `A nota ${notas.length} foi ${notaInserida}\n`;
  document.querySelector("#nota").value = ''
}

function calcularMedia() {
  const resultado = document.querySelector("#media");

  if (notas.length === 0) {
    resultado.textContent = "Nenhuma nota foi adicionada.";
    return;
  }

  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  const media = soma / notas.length;
  resultado.textContent = "A média é: " + media.toFixed(2);
}
