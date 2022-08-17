// Seletores
const button_inicio = document.querySelector("#inicio");
const adicionar = document.querySelector("#adicionar_palavra");
const salvar = document.querySelector("#salvar_palavra");
const cancelar = document.querySelector("#cancelar");
const novoJogo = document.querySelector("#novo_jogo");
const desistir = document.querySelector("#desistir");
const input = document.querySelector("#palavra_nova");
const span = document.querySelector("span");

// Divs Buttons
let div_buttons_inicio = document.querySelector(".btns_inicio");
let div_input = document.querySelector(".div_input");
let div_buttons_salvar = document.querySelector(".btns_salvar");
let div_buttons_jogo = document.querySelector(".btns_jogo");

// Começa o jogo
function inicio_jogo() {
  apareceCanvas();
  desenhar_boneco();
  tracinhos();

  document.onkeydown = verifica_entrada;
}

// Adiciona nova palavra
function adicionar_palavra() {
  div_buttons_inicio.style.display = "none";
  div_input.style.display = "block";
  span.style.display = "flex";
  div_buttons_salvar.style.display = "block";
  div_buttons_jogo.style.display = "none";

  input.focus();
}

// Salva palavra nova no array de palavras
function salvar_palavra() {
  let palavra_nova = input.value.toUpperCase();
  let ehValido = validaTexto.test(palavra_nova);

  if (palavra_nova) {
    if (ehValido) {
      palavras.push(palavra_nova);
      alert("Palavra adicionada");

      div_input.style.display = "none";
      span.style.display = "none";
      div_buttons_salvar.style.display = "none";

      inicio_jogo();
    } else {
      alert("Somente letras são permitidas.");
      palavra_nova = "";
      input.focus();
    }
  } else {
    alert("O campo não pode estar vazio.");
  }
}

// Cancelar jogo
function cancelar_jogo() {
  location.reload();
}

// Novo Jogo
function novo_jogo() {
  location.reload();
}

// Desistir de jogo atual
function desistir_jogo() {
  location.reload();
}

// Chamado de funções dos respectivos botões
button_inicio.onclick = inicio_jogo;
adicionar.onclick = adicionar_palavra;
salvar.onclick = salvar_palavra;
cancelar.onclick = cancelar_jogo;
novoJogo.onclick = novo_jogo;
desistir.onclick = desistir_jogo;
