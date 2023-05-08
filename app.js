let comprarTicket = document.getElementById("b2");
let comprarTicket2 = document.getElementById("verde");
let serOrador2 = document.getElementById("confe");
let serOrador = document.getElementById("b");
let ticket = document.getElementById("comprar");
let gracias = document.getElementById("gracias")
let cerrar = document.querySelector(".btn-close");
let btnComprado = document.getElementById("comprado")

function precioFinal() {
  let entradas = document.getElementById("cantidad").value;
  let comprador = document.getElementById("comprador").value;

  let descuento = (entradas * 1000 * comprador) / 100;
  let precio = entradas * 1000 - descuento;

  document.getElementById("costo").value = precio;
}

function modal() {
  ticket.style.display = "block";
}

function cerrarModal() {
  ticket.style.display = "none";
}

function orador() {
  alert("Llene el formulario al pie de la pagina");
}
function comprado(){
  ticket.style.display = "none";
   gracias.style.display = "block"; 
}



comprarTicket.addEventListener("click", modal);
comprarTicket2.addEventListener("click", modal);
serOrador.addEventListener("click", orador);
serOrador2.addEventListener("click", orador);
cerrar.addEventListener("click", cerrarModal);
btnComprado.addEventListener("click", comprado)

