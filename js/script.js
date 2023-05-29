// BIENVENIDA AL CLIENTE

const nombre = prompt(` Buenas! Por favor, contanos como te llamas :) `);

console.log(`El nombre del cliente es: ${nombre}`);

const msjBienvenida = alert(
  `Bienvenidx ${nombre} a la pagina oficial de ALFAJORES CHIHIRO! Si queres realizar un pedido, por favor presiona ACEPTAR`
);

alert(
  "En este local de alfajores, vos ingresas cuanto dinero queres gastar, y nosotros te decimos que es lo mas caro que te podes comprar y cuánto tenes de vuelto ;) "
);

let continuar = "si"

do{

  // INGRESO DEL DINERO

  let dinero = parseInt(prompt(`¿Cuánto estas dispuesto a gastar?`));

  console.log("El dinero que tiene el cliente es $" + dinero);

  //CALCULADORA PARA AVERIGUAR LA COMPRA Y EL VUELTO

  if (dinero >= 250 && dinero < 350) {
    alert(
      `Podes comprar UN ALFAJOR DE VAINILLA y tenes de vuelto $` +
        vuelto(dinero - 250)
    );
  } else if (dinero >= 350 && dinero < 400) {
    alert(
      `Podes comprar UN ALFAJOR DE VAINILLA BAÑADO EN CHOCOLATE y tenes de vuelto $` +
        (dinero - 350)
    );
  } else if (dinero >= 400 && dinero < 500) {
    alert(
      `Podes comprar UN ALFAJOR DE CHOCOLATE BAÑADO EN CHOCOLATE y tenes de vuelto $` +
        (dinero - 400)
    );
  } else if (dinero >= 500 && dinero < 800) {
    alert(`Podes comprar DOS ALFAJORES y tenes de vuelto $` + (dinero - 500));
  } else if (dinero >= 800 && dinero < 1000) {
    alert(
      `Podes comprar CUATRO ALFAJORES y tenes de vuelto $` + (dinero - 800)
    );
  } else if (dinero >= 1000 && dinero < 1500) {
    alert(
      `Podes comprar MEDIA DOCENA DE ALFAJORES y tenes de vuelto $` +
        (dinero - 1000)
    );
  } else if (dinero >= 1500) {
    alert(
      `Podes comprar UNA DOCENA DE ALFAJORES y tenes de vuelto $` +
        (dinero - 1000)
    );
  } else if(dinero < 250){
    alert(
      `$` +
        dinero +
        ` no es suficiente dinero, por favor volve con mas dinero :)`
    );
  } else{
    alert(
      "por favor, ingresa un numero para continuar"
    )
  }

  let continuar = prompt("¿Queres ingresar otro monto? Por favor, responde con SI o NO");

  if (continuar == "no"){
    break
  }

  

  console.log(continuar);
  
}while(continuar == "si")


alert(
  `MUCHAS GRACIAS POR COMPRAR EN ALFAJORES CHIHIRO, te esperamos pronto :) <3 `
);
