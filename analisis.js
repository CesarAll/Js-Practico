// Funciones Helpers
//verificamos que un numero sea par
function esPar(numerito) {
    return (numerito % 2 === 0);
}

//Calculadora media aritmetica
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
//---------------------------


// Calculadora de mediana
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
  
// Mediana General
const salariosCol = colombia.map(//con map iteramos en el array colombia
  function (personita) {
    return personita.salary;
  }
);
  //ordenamos el array con sort
const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB; //hacemos que nos devulva un num positivo o negativo segun el caso
  }
);

//Calculamos la mediana general
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; //sacamos el 10% del total del array trabajado
const spliceCount = salariosColSorted.length - spliceStart; // 

const salariosColTop10 = salariosColSorted.splice(//metodo para 
  spliceStart,
  spliceCount,
);
  
const medianaTop10Col = medianaSalarios(salariosColTop10);
//..........

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});
