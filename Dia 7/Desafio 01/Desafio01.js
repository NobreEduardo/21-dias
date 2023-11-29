/*  Desafio:
Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
    

    *Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos! */



//Resolução

//declarar as váriaveis

let mediaG = 0 // Media geral
let qtH = 0 // Quantidade de homens
let qtMul = 0 //Quantidade de mulher com nota acima de 7
let maiorNotaHomens = 0 //Maior nota entre os homens
let contador = 1


while(contador <= 10){ 
    nota=parseInt(prompt("Digita a nota do " + contador + "º Aluno"))
    sexo = prompt("Qual o seu sexo? (M/F)")

    if (sexo == "M"){
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtH++
    }

    if (sexo == "F" && nota > 7){
        qtMul++
    }

    mediaG += nota  
    contador++
}

mediaG = mediaG / 10

console.log("A media geral de todos os alunos foi: " + mediaG);
console.log ("A quantidade de homens cadastrados foi: "  + qtH);
console.log ("Essa é a quantidade de mulheres que tiveram nota acima de 7: "  + qtMul);
console.log("Essa foi a maior nota entre os homens: " + maiorNotaHomens);

