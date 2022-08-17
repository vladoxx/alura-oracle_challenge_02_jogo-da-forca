// Arrays de Letras
const letrasCorretas = [];
const letrasIncorretas = [];

//iteração do contador de tentativas
let contador = 0;

// Array de palavras
const palavras = ["WEB", "ORACLE", "TI", "CURSO", "DESIGN", "ONE", "ALURA", "HTML", "CSS"];

// Palavra aleatoria
const palavraAleatoria =
  palavras[Math.round(Math.random() * (palavras.length - 1))]

// Validação das teclas
const validaTexto = /[A-Za-z]/;

// Verifica a vitória
function verificarVitoria() {
  if (letrasCorretas.length === palavraAleatoria.length) {
    vitoria();
  }
}

// Verifica as letras corretas & incorretas
function verifica_entrada(evento) {
  const letra = evento.key.toUpperCase();
  let ehValido = validaTexto.test(letra);

  if (letrasIncorretas.includes(letra) || letrasCorretas.includes(letra)) {
  } else if (ehValido && palavraAleatoria.includes(letra)) {
    for (let i = 0; i < palavraAleatoria.length; i++) {
      let x = 40 * i;

      if (letra === palavraAleatoria[i]) {
        aparece_letra_correta(letra, x);
        letrasCorretas.push(letra);
        verificarVitoria();
      }
    }
  } else if (!ehValido || letra.length > 1) {
    alert("Somente letras maiúsculas são permitidas.");
  } else {
    contador = contador + 40;
    aparece_letra_incorreta(letra, contador);
    letrasIncorretas.push(letra);
    desenhar_boneco();
  }
}
