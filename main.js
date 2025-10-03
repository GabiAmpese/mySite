// Animação de digitação usando Typed.js
var typed = new Typed(".typing", {
  strings: ["Estudante", "Programadora", "Designer", "Desenvolvedora"], 
  typeSpeed: 120,   // velocidade de digitação
  backSpeed: 65,    // velocidade de apagar
  loop: true        // repetir para sempre
});

// Função para abrir abas
function abrirAba(id) {
  // esconde todas
  document.querySelectorAll('.aba').forEach(div => div.style.display = 'none');
  // mostra só a clicada
  document.getElementById(id).style.display = 'block';
}

