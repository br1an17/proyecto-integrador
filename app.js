let comprarTicket = document.getElementById("b2");
let comprarTicket2 = document.getElementById("verde");
let serOrador = document.getElementById("b");


function compra() {
  alert("compra");
}

function orador() {
    alert("Llene el formulario al pie de la pagina");
  }


comprarTicket.addEventListener("click", compra);
comprarTicket2.addEventListener("click", compra);
serOrador.addEventListener("click",orador);

