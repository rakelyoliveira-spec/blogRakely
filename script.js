const botoes- document.querySelectorAl1("button");

botoes. forEach(function(botao) {
let curtiu = false;
botao. addEventListener("click", botao(licado);
function botaoClicado() {
console.log("fui clicado");
let texto= botaoquerySelector"span");
if (curtiu === false) (
texto.textContent++;
}
}
1);
く
const btnTemaEscuro = document. querySelector(" btn-tema-escuro");
btnTemaEscuro.addEventListener("click", mudaTema);
function mudaTema(){
const corpoPagina = document.body;
if (corpoPagina.classList.contains("tema-escuro")) {
corpoPagina.classList.remove ("tema-escuro");
} else {
corpoPagina.classlist.add("tema-escuro");
}
}  
