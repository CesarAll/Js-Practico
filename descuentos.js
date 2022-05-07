// const precioOriginal = 100;
// const porcentajeDescuento = 12;



// console.log({
//     precioOriginal,
//     porcentajeDescuento,
//     pocentajePrecioConDescuento,
//     precioConDescuento
// })
const coupons = [
    "DESC15",
    "DESC20",
    "DESC25",
    
];
function calcularPrecioConDescuento(precio, porcentajeDescuento) {
    
    const pocentajePrecioConDescuento = 100 - porcentajeDescuento;
    const precioConDescuento = (precio * pocentajePrecioConDescuento) / 100;//regla de tres

    return precioConDescuento;
}

function priceDiscount(){
   const inputPrice =   document.getElementById("InputPrecio");
   const priceValue = inputPrice.value;
   const inputCupon = document.getElementById("InputCupon");
   const couponValue = inputCupon.value;
   
   let descuento;

   switch(couponValue) {
     case coupons[0]: 
       descuento = 15;
     break;
     case coupons[1]: 
       descuento = 20;
     break;
     case coupons[2]: 
       descuento = 25;
     break;
   }
   const resultado = calcularPrecioConDescuento(priceValue, descuento);

   const resultP = document.getElementById("Resultado");
   resultP.innerText = "El precio final del producto es : $ " + resultado;




}