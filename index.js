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

/* function recebeArray(arrayDeNumeros = []){
    return [(arrayDeNumeros.length)/2, (arrayDeNumeros[0])/2];
}

console.log(recebeArray([1,2,3,4,5,6,7,8,9])); */

/* const professor = {
    nome: 'Vitor',
    idade: 27,
    tarefas:['Dar aula', 'Responder dúvidas'],
    contarPiada: function() {
      console.log('É pa vê ou pa comê?')
   }
  }

  console.log(professor.nome);
  console.log(professor["idade"]);
    professor.nome = "Gabriel";
    console.log(professor.nome); */

/* var filme = {
    nome: "matrix",
    direcao: "nao sei",
    ano: 1999,
    elenco: ["neo", "jesus", "jebus", "ala"],
    visto: true,
}

filme.personagens = ["personagem 1", "personagem 2", "personagem 3", "personagem 4"];

console.log(filme.elenco[0] + " - " + filme.personagens[0]);
console.log(filme.elenco[1] + " - " + filme.personagens[1]);
console.log(filme.elenco[2] + " - " + filme.personagens[2]);
console.log(filme.elenco[3] + " - " + filme.personagens[3]);

filme.elenco[0] = "xuxa";
console.log(filme.elenco[0]);
console.log(filme); */

/* 
console.log(filme.nome);
console.log(filme.direcao);
console.log(filme["ano"]);
console.log(filme["elenco"]);
console.log(filme.visto); */

/* 
var pessoa = {
    nome:"gabriel",
    idade:30,
    generoMusical:"sertanejo",
}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`); 


function exercicio4(objetoPessoa, arrayComidas, objetoMelhorAmigo){
    var novoObjeto = {...objetoPessoa, comidasPreferidas: arrayComidas, melhorAmigo: objetoMelhorAmigo};

    console.log(`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasPreferidas[0]}, ${novoObjeto.comidasPreferidas[1]}, ${novoObjeto.comidasPreferidas[2]}. Seu melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`);
}

exercicio4(pessoa, ["arroz", "feijao", "carne"], {nome: "joao", idade:10});
 */
/*
Crie uma função que:

Recebe 2 números (chamaremos de num1 e num2)
Compara esses números entre si:

Se os números forem iguais, retorna uma mensagem de sucesso

Depois, chame a função com números que foram inseridos pelo usuário através do prompt

*/

/* 
function comparaDoisNumeros (num, num2){
    if(num === num2){console.log("sucesso");}
}
comparaDoisNumeros(prompt("Digite num 1"), prompt("Digite num 2")); */
/* 
function podeDirigir(nome, idade){
    if(idade >= 18){
        return `${nome}, voce pode dirigir`;
    }
}

console.log(podeDirigir(prompt("Digite seu nome"), prompt("digite sua idade"))); */



/* function compararNumeros(num1, num2) {
    if (num1 > num2) {
      return `O primeiro número (${num1}) é maior que o segundo número (${num2}).`;
    } else if (num1 < num2) {
      return `O primeiro número (${num1}) é menor que o segundo número (${num2}).`;
    } else {
      return `Os dois números são iguais: ${num1}.`;
    }
  }
    const num1 = prompt("Digite o primeiro número:");
    const num2 = prompt("Digite o segundo número:");
    const resultado = compararNumeros(num1, num2);
        alert(resultado); */

/* var pokemon = prompt("Escolha seu pokemon");

switch (pokemon) {
    case "Bulbasauro":
        console.log("Planta e veneno");
        break;
    case "Charmander":
        console.log("Fogo");
        break;
    case "Squirtle":
        console.log("Agua");
        break;
    default:
        console.log("Pokemon não encontrado");
        break;
} */



//exercicio 5 

/* function podeEntrarNaFaculdade(ensinoMedio, idade, faculdade){
    if(ensinoMedio === "sim" || ensinoMedio === "Sim"){ensinoMedio = true;}else{ensinoMedio = false;}

    if(faculdade === "sim" || faculdade === "Sim"){faculdade = true;}else{faculdade = false;}

    if(idade >= 18 && ensinoMedio && !faculdade){
        return "Voce pode entrar na faculdade";
    }
    else{return "voce NAO pode entrar na faculdade";}
}
console.log(
podeEntrarNaFaculdade(
    prompt("Voce concluiu o ensino medio?"),
    Number(prompt("qual sua idade?")),
    prompt("voce ja estuda em uma faculdade?")
)
);
 */
function calculaArea(base, altura) {
    return base * altura;
}

function calculaAreaTotal(valores = []) {
    var resultado = valores[0] + valores[1] + valores[2] + valores[3];
    return resultado;
}
function calcularValores(valores = []) {
    valores[0] = Number(valores[0]);
    valores[1] = Number(valores[1]);

    var areaCalculada = calculaArea(valores[0], valores[1])
    var areaTotal = calculaAreaTotal([areaCalculada,areaCalculada,areaCalculada,areaCalculada]);

    return areaTotal;
}

function pegaValores() {
   return calcularValores([prompt("Digite a base"), prompt("Digite a altura")]);
}

console.log(pegaValores());

var array = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,3,4,5,6,7,8,9];
array.forEach(element => {
    console.log(element);
});