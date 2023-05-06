var tamanhoDoMapa = 3;
var mapaDeMinas = [];

function iniciar() {
  console.log("Iniciando jogo...");
  gerarMapa();
  desenharMapa();
}

function gerarMapa() {
  console.log("Gerando mapa de minas...");

  // Cria o array preenchido com zeros
  for (var i = 0; i < tamanhoDoMapa; i++) {
    mapaDeMinas[i] = Array(tamanhoDoMapa).fill(0);
  }

  for (var coluna = 0; coluna < tamanhoDoMapa; coluna++) {
    for (var linha = 0; linha < tamanhoDoMapa; linha++) {
      mapaDeMinas[linha][coluna] = Math.floor(Math.random() * 2); // gera valores de 0 a 1
    }
  }

  console.log("Mapa gerado:", mapaDeMinas);
}

function desenharMapa() {
  console.log("Desenhando na tela...");

  var linhasDaTabela = "";

  for (var linha = 0; linha < tamanhoDoMapa; linha++) {
    linhasDaTabela += "<tr>";
    for (var coluna = 0; coluna < tamanhoDoMapa; coluna++) {
      linhasDaTabela += `<td class='botao' onclick='cliqueDoUsuario(${linha}, ${coluna})'></td>`;
    }
    linhasDaTabela += "</tr>";
  }

  var tabela = document.querySelector("table");
  tabela.innerHTML = linhasDaTabela;

  console.log("Desenhado");
}

function cliqueDoUsuario(linha, coluna) {
  console.log("clique do usuario na linha", linha, "coluna", coluna);

  var tabela = document.querySelector("table");

  if (mapaDeMinas[linha][coluna] === 0) {
    tabela.rows[linha].cells[coluna].className = "botao-aberto";
    // COLOCAR A LOGICA PRA SABER SE O USUARIO GANHOU
  } else if (mapaDeMinas[linha][coluna] === 1) {
    tabela.rows[linha].cells[coluna].className = "botao-bomba";
    // COLOCAR A LOGICA PRA SABER SE O USUARIO PERDEU
    alert('perdeu!')
  }
}
