let comprarTicket = document.getElementById("b2");
let comprarTicket2 = document.getElementById("verde");
let serOrador2 = document.getElementById("confe");
let serOrador = document.getElementById("b");
let ticket = document.querySelector(".modal")
let cerrar = document.querySelector(".btn-close")
let valor1 = document.getElementById("flexRadioDefault1")
let valor2 = document.getElementById("flexRadioDefault2")
let valor3 = document.getElementById("flexRadioDefault3")


function compra() {
  ticket.style.display = "block" 
}

function cerrarModal() {
  ticket.style.display = "none" 

}


function orador() {
  alert("Llene el formulario al pie de la pagina");  }


comprarTicket.addEventListener("click", compra);
comprarTicket2.addEventListener("click", compra);
serOrador.addEventListener("click",orador);
serOrador2.addEventListener("click",orador);
cerrar.addEventListener("click",cerrarModal)
