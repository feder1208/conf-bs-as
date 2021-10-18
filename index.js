
const ticketPrice = 200;

const calculateButton = document.getElementById('botonCalcular');

const totalBuy = document.getElementById('totalCompra');

const categoria = document.getElementById('inputState');

const reset = document.getElementById('boton-borrar');

function resume() {
    const ticketsQuantity = document.getElementById('cantidadEntrada').value;
    const discount = document.getElementById('inputState').value;
    const finalPrice = ticketsQuantity * (ticketPrice - (ticketPrice * discount) / 100);
    console.log(finalPrice);
    const total = totalBuy.innerHTML = `${"Total a Pagar: $" + finalPrice}`;
}

calculateButton.addEventListener('click', resume);

reset.addEventListener('click', function() {
    const resetPrice = totalBuy.innerHTML = `${"Total a Pagar: $"}`;
})

