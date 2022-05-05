// //Codigo del cuadrado
// console.group('cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log('El perímetro es: ' + perimetroCuadrado + ' cm^2');

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log('El área es: ' + areaCuadrado + ' cm^2');
// console.groupEnd();

// //Codigo del triangulo
// console.group('Triangulos');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log('El lado a del triangulo mide: ' + ladoTriangulo1 + ' cm');
// console.log('El lado b del triangulo mide: ' + ladoTriangulo2 + ' cm');
// console.log('La base del triangulo mide: ' + baseTriangulo + ' cm');
// console.log('La altura del triangulo mide: ' + alturaTriangulo + ' cm');

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log('El perímetro del triangulo es: ' + perimetroTriangulo + ' cm');
// const areaTriangulo = ( baseTriangulo * alturaTriangulo) / 2;
// console.log('El área del triangulo es: ' + areaTriangulo + ' cm^2');
// console.groupEnd();

// //Codigo del circulo
// console.group('Circulos');
// //Radio
// const radioCirculo = 4;
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// //PI
// const PI = Math.PI;

// //Perimetro
// const perimetroCirculo = diametroCirculo * PI;
// console.log('El perímetro del circulo es: ' + perimetroCirculo + ' cm');
// //Area
// const areaCirculo = Math.pow(radioCirculo,2) * PI;
// console.log('El área del circulo es: ' + areaCirculo + ' cm^2');

// console.groupEnd();
const PI = Math.PI;
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areCuadrado(lado) {
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(altura, base) {
    return (base * altura) / 2 ;
}

function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return Math.pow(radio,2) * PI;
}

//::::Interacciones con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areCuadrado(value);
    alert(area);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}