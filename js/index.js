const arregloA = [];
const arregloB = [];

//funcion para agregar el numero a uno de los arreglos (A o B)
function agregar(letra1) {
  if (document.getElementById("number").value == "") {//Evaluamos que la entrada no este vacia
    alert("Introduce un número valido");
  } else {
    let numero = document.getElementById("number").value;
    var letra = letra1.toString();
    var estado;
    if (letra == "A") {//Evaluamos a que arreglo agregamos el numero
      estado = comprobar(numero, arregloA);
      if (estado == false) {
        arregloA.push(numero);
        crearTabla("A", arregloA);
      } else if (estado == true) {
        alert("No se puede agregar un numero repetido");
      }
    } else if (letra == "B") {//Evaluamos a que arreglo agregamos el numero
      estado = comprobar(numero, arregloB);
      if (estado == false) {
        arregloB.push(numero);
        crearTabla("B", arregloB);
      } else if (estado == true) {
        alert("No se puede agregar un numero repetido");
      }
    }
  }
}

//Verificamos que el numero no sea repetido
function comprobar(numero, arreglo) {
  var comp = false;
  for (var i = 0; i < arreglo.length; i++) {
    if (numero == arreglo[i]) {
      comp = true;
    }
  }
  return comp;
}

//funcion para crear las tablas
function crearTabla(letra1, arreglo) {
  var letra = letra1.toString();
  var tabla;
  var tabla1;
  if (letra == "A") {
    tabla = document.getElementById("tablaA");
    var tr = document.createElement("tr");
    var td = document.createElement("th");
    for (var i = 0; i < arreglo.length; i++) {
      var num = arreglo[i];
    }
    var texto = document.createTextNode(num);
    td.appendChild(texto);
    td.classList.add('bg-gray-800');
    td.classList.add('py-1');
    tr.appendChild(td);
    //Agregando estilos a la columna de la tabla
    //tr.classList.add('px-6 py-4 font-medium text-gray-400 whitespace-nowrap');
    //Construyendo la tabla
    tabla.appendChild(tr);
  } else if (letra == "B") {
    tabla1 = document.getElementById("tablaB");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("th");
    //td1.classList.add('px-6 py-4 font-medium text-gray-400 whitespace-nowrap');
    for (var i = 0; i < arreglo.length; i++) {
      var num1 = arreglo[i];
    }
    var texto1 = document.createTextNode(num1);
    td1.appendChild(texto1);
    td1.classList.add('bg-gray-800');
    td1.classList.add('py-1');
    tr1.appendChild(td1);
    //Construyendo la tabla
    tabla1.appendChild(tr1);
  }
}

//Funcion para realizar las operaciones con los conjuntos
function calcularOperaciones(){
  //funcion para crear el arreglo de union
  const union = Array.from(new Set([...arregloA, ...arregloB]));
  let unionSalida = union.toString();
  if (union.length == 0) {
    unionSalida = "Conjunto vacio";
  }
  document.getElementById("union").value = unionSalida;

  //funcion para crear el arreglo de interseccion
  const interseccion = arregloA.filter((x) => arregloB.includes(x));
  let intSalida = interseccion.toString();
  if (interseccion.length == 0) {
    intSalida = "Conjunto vacio";
  }
  document.getElementById("interseccion").value = intSalida;

  //funcion para crear el arreglo de diferencia A
  const diferenciaA = arregloA.filter((x) => !arregloB.includes(x));
  let difSalidaA = diferenciaA.toString();
  if (diferenciaA.length == 0) {
    difSalidaA = "Conjunto vacio";
  }
  document.getElementById("diferenciaA").value = difSalidaA;
  
  //funcion para crear el arreglo de direfencia B
  const diferenciaB = arregloB.filter((x) => !arregloA.includes(x));
  let difSalidaB = diferenciaB.toString();
  if (diferenciaB.length == 0) {
    difSalidaB = "Conjunto vacio";
  }
  document.getElementById("diferenciaB").value = difSalidaB;

  //funcion para crear el arreglo de diferencia simetrica
  const diferenciaSim = arregloA
    .filter((x) => !arregloB.includes(x))
    .concat(arregloB.filter((x) => !arregloA.includes(x)));
  let difSim = diferenciaSim.toString();
  if (diferenciaSim.length == 0) {
    difSim = "Conjunto vacio";
  }
  document.getElementById("diferenciaSim").value = difSim;

}