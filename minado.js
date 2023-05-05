var tamanhoDoMapa = 3;
var mapaDeMinas = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function iniciar() {
  console.log("Iniciando jogo...");
  montarMapa();
  desenharMapa();
}

function montarMapa() {
  console.log("Montando mapa de minas...");
  for (var coluna = 0; coluna < tamanhoDoMapa; coluna++) {
    for (var linha = 0; linha < tamanhoDoMapa; linha++) {
      mapaDeMinas[linha][coluna] = Math.floor(Math.random() * 2); // gera valores de 0 a 1
    }
  }
  console.log("Mapa montado:", mapaDeMinas);
}

function desenharMapa() {
  console.log("Desenhando na tela...");
  for (var coluna = 0; coluna < mapaDeMinas.length; coluna++) {
    for (var linha = 0; linha < mapaDeMinas[coluna].length; linha++) {
      var elemento = document.getElementById(`botao-${linha}-${coluna}`);
      elemento.innerHTML = mapaDeMinas[linha][coluna];
    }
  }
}
