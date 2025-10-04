var typed = new Typed(".typing", {
  strings: ["Estudante", "Programadora", "Designer", "Desenvolvedora"], 
  typeSpeed: 120,  
  backSpeed: 65,   
  loop: true        
});

function abrirAba(id) {
  document.querySelectorAll('.aba').forEach(div => div.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
