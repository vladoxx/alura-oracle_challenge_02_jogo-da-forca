// Desenhando Tabuleiro do jogo
const tela = document.querySelector("#myCanvas");
const pincel = tela.getContext("2d");
tela.width = 900;
tela.height = 460;

// Eixo Y
const y = 400;
// Cor principal do Jogo
const cor = "#0A3871";

// Desenha o canvas na tela
function apareceCanvas() {
  pincel.fillStyle = "white";
  pincel.fillRect(0, 0, 900, 460);

  div_buttons_inicio.style.display = "none";
  div_buttons_jogo.style.display = "block";

  tela.style.display = "block";
}

// Mostra traços da palavra secreta
function tracinhos() {
  for (let i = 0; i < palavraAleatoria.length; i++) {
    let x = 40 * i;

    pincel.beginPath();
    pincel.strokeStyle = cor;
    pincel.lineWidth = 2;
    pincel.moveTo(x + 350, y);
    pincel.lineTo(x + 380, y);
    pincel.stroke();
  }
}

// Escreve Letra que pertece à palavra secreta
function aparece_letra_correta(letra, x) {
  pincel.font = "32px sans-serif";
  pincel.fillStyle = cor;
  pincel.fillText(letra, x + 355, y - 5);
}

// Escreve Letra errada
function aparece_letra_incorreta(letra, x) {
  pincel.font = "28px sans-serif";
  pincel.fillStyle = cor;
  pincel.fillText(letra, x + 280, y + 35);
}

// Desenha ao boneco na tela
function desenhar_boneco() {
  const tentativas = letrasIncorretas.length;

  // Base
  pincel.fillStyle = cor;
  pincel.fillRect(350, 330, 200, 5);

  // Soporte Principal Vertical
  pincel.strokeStyle = cor;
  pincel.beginPath();
  pincel.lineWidth = 3;
  pincel.moveTo(400, 70);
  pincel.lineTo(400, 330);
  pincel.stroke();

  // Soporte Principal Horizontal
  pincel.fillStyle = cor;
  pincel.fillRect(300, 100, 300, 3);

  if (tentativas === 1) {
    // Cabeça
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.arc(500, 150, 20, 0, 2 * 3.14);
    pincel.stroke();
  } else if (tentativas === 2) {
    // Corpo
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.moveTo(500, 170);
    pincel.lineTo(500, 250);
    pincel.stroke();
  } else if (tentativas === 3) {
    // Perna Izquerda
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(500, 170);
    pincel.lineTo(470, 210);
    pincel.stroke();
  } else if (tentativas === 4) {
    // Perna Direita
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(500, 170);
    pincel.lineTo(530, 210);
    pincel.stroke();
  } else if (tentativas === 5) {
    // Braço Izquerdo
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(500, 250);
    pincel.lineTo(470, 295);
    pincel.stroke();
  } else if (tentativas === 6) {
    // Braço Direito
    pincel.strokeStyle = cor;
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.lineCap = "round";
    pincel.moveTo(500, 250);
    pincel.lineTo(530, 295);
    pincel.stroke();
  } else if (tentativas === 7) {
    // Corda
    pincel.strokeStyle = cor;
    pincel.moveTo(500, 100);
    pincel.lineTo(500, 130);
    pincel.lineWidth = 2;
    pincel.stroke();
    derrota();
  }
}

// Anuncie a vitória
function vitoria() {
  pincel.font = "bold 40px sans-serif";
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "green";
  pincel.fillText("Você vai viver um pouco mais!", 165, 50);
  setInterval(novo_jogo, 3000);
}

// Anunciar derrota
function derrota() {
  pincel.font = "bold 40px sans-serif";
  pincel.lineCap = "round";
  pincel.lineJoin = "round";
  pincel.fillStyle = "red";
  pincel.fillText("Você morreu!", 330, 50);
  setInterval(novo_jogo, 2000);
}
