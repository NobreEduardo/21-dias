//declarando Variaveis
let nome = "" ;
let idade = 0;
let peso = 0;
let altura = 0;


//Coletando informações com o user
nome = prompt("Informe seu Nome: ");
idade = parseInt (prompt ("Informe sua idade: "));
altura = parseFloat (prompt ("Informe sua altura: "));
peso = parseInt (prompt ("Informe seu peso: "));


//calculando ano de nascimento e  IMC
let anoDeNascimento = 0
anoDeNascimento = 2023 - idade


let imc = 0
imc = peso / (altura * altura);



let resultado = console.log("olá" + nome + ", você tem " + idade + "anos, nasceu em " + anoDeNascimento  + ", tem " + altura + "de altura, pesa " + peso + "KG, e seu IMC É: " + imc + "kg/m2!");

//prompt (resultado)