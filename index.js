// silence is golden

/* var nome = prompt("Escreva seu nome");
var cor = prompt("Escreva sua cor preferida");

var frase = "A cor favorita de " + nome + " é " + cor + ".";

console.log(frase);

// exercicio 2
var frase2 = prompt("Escreva uma frase");
console.log(frase2.toUpperCase());
console.log(frase2.replaceAll("o", "i"));
console.log(frase2.length);
 */

//exercicio 3

//var cachorros = ["raca 1", "raca 2", "raca 3", "raca 4", "raca 5"];
//var escolha = prompt("Escolha um numero de 0 a 4");
//console.log(cachorros[escolha]);

//console.log(cachorros[prompt("digita 0 a 4")]);

//splice

//var array = ["a", "b", "c", "d", "e", "f", "g", "h"];
//          [ 0,   1,   2,   3,   4,   5,   6,   7 ];
//array.splice(3, 3)
//console.log(array);


//exercicio 4

/* var array = [1,2,3,4,5,6];
console.log(array.length);
array.push(7);
array.splice(3, 2);
console.log(array.length); */

// funcoes exercicio 2
/*
function escreveNome(nome){
    console.log(`Ola ${nome}`);
}

escreveNome("Gabriel");
escreveNome("Joao");
escreveNome("maria");
*/

//funcoes 2

/* const a = 1;

function imprimeVariavel(){
    const b = 2;
    console.log("variavel a:", a);
    console.log("variavel b:", b);
}
imprimeVariavel();

console.log("variavel a:", a);
console.log("variavel b:", b); */

//exercicio 3

/* function somaDoisNumeros(numa, numb){
    return numa + numb;
}
var resultado = somaDoisNumeros(3, 5);
console.log(resultado); */

//exercicio 4

function recebeArray(arrayDeNumeros = []){
    return [(arrayDeNumeros.length)/2, (arrayDeNumeros[0])/2];
}

console.log(recebeArray([1,2,3,4,5,6,7,8,9]));