//::PRUEBA ANTES DE CREAR UNA FUNCION
// const lista1 = [
//     100,
//     200,
//     300,
//     400,
//     500,
//     600,
//     700,
// ];

// let sumaLista1 = 0;

// for(let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista = sumaLista1 / lista1.length;

function calculaMediaAritmetica(lista) {

    //::FORMA 1:::

    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    //::forma 2:::
    //utilizamos el metodo reduce
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//:::MODA
const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1,2,2,2,1
];

const lista1Count = {};
//Con map recorremos el elemento
lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) { //si el elemento ya existe en el arreglo lo sumamos en el conteo
            lista1Count[elemento] += 1;
        }else{ //si no lo agregamos en el conteo
            lista1Count[elemento] = 1;
        }
    }
)
//convertimos lista1Conun en un array
const lista1Array = Object.entries(lista1Count).sort( //sort para ordenar
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; //1 porque en lista1Count es la posicion que mas se repite
    }
);
const moda = lista1Array[lista1Array.length -1 ];