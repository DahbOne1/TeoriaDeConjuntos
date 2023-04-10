const arregloA = [];
const arregloB = [];

function agregar(letra1) {
  if (document.getElementById("number").value == "") {
    alert("Introduce un numero valido");
  } else {
    let numero = document.getElementById("number").value;
    var letra = letra1.toString();
    var estado;
    if (letra == "A") {
      estado = comprobar(numero, arregloA);
      if (estado == false) {
        arregloA.push(numero);
        crearTabla("A", arregloA);
      } else if (estado == true) {
        alert("No se puede agregar un numero repetido");
      }
    } else if (letra == "B") {
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

function comprobar(numero, arreglo) {
  var comp = false;
  for (var i = 0; i < arreglo.length; i++) {
    if (numero == arreglo[i]) {
      comp = true;
    }
  }
  return comp;
}

function crearTabla(letra1, arreglo) {
  var letra = letra1.toString();
  var tabla;
  var tabla1;
  if (letra == "A") {
    tabla = document.getElementById("tablaA");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    for (var i = 0; i < arreglo.length; i++) {
      var num = arreglo[i];
    }
    var texto = document.createTextNode(num);
    td.appendChild(texto);
    tr.appendChild(td);
    //Construyendo la tabla
    tabla.appendChild(tr);
  } else if (letra == "B") {
    tabla1 = document.getElementById("tablaB");
    var tr1 = document.createElement("tr");
    var td1 = document.createElement("td");
    for (var i = 0; i < arreglo.length; i++) {
      var num1 = arreglo[i];
    }
    var texto1 = document.createTextNode(num1);
    td1.appendChild(texto1);
    tr1.appendChild(td1);
    //Construyendo la tabla
    tabla1.appendChild(tr1);
  }
}

function union() {
  const union = Array.from(new Set([...arregloA, ...arregloB]));
  let unionSalida = union.toString();
  if (union.length == 0) {
    unionSalida = "Conjunto vacio";
  }
  document.getElementById("union").value = unionSalida;
}

function interseccion() {
  const interseccion = arregloA.filter((x) => arregloB.includes(x));
  let intSalida = interseccion.toString();
  if (interseccion.length == 0) {
    intSalida = "Conjunto vacio";
  }
  document.getElementById("interseccion").value = intSalida;
}

function diferenciaA() {
  const diferencia = arregloA.filter((x) => !arregloB.includes(x));
  let difSalida = diferencia.toString();
  if (diferencia.length == 0) {
    difSalida = "Conjunto vacio";
  }
  document.getElementById("diferenciaA").value = difSalida;
}

function diferenciaB() {
  const diferencia = arregloB.filter((x) => !arregloA.includes(x));
  let difSalida1 = diferencia.toString();
  if (diferencia.length == 0) {
    difSalida1 = "Conjunto vacio";
  }
  document.getElementById("diferenciaB").value = difSalida1;
}

function diferenciaSim() {
  const diferenciaSim = arregloA
    .filter((x) => !arregloB.includes(x))
    .concat(arregloB.filter((x) => !arregloA.includes(x)));
  let difSim = diferenciaSim.toString();
  if (diferenciaSim.length == 0) {
    difSim = "Conjunto vacio";
  }
  document.getElementById("diferenciaSim").value = difSim;
}
