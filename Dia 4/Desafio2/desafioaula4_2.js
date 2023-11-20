//Criando variaveis
let nome
let idade;
let cnh = false;
let carro = false;

//Coletando informações vindas do usuário

nome = prompt("Informe seu nome:");
idade = parseInt(prompt("Qual a sua idade?"));
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == "s"){
    cnh = true
};
let opcaoCarro = prompt("Você tem carro? (s/n)");
if(opcaoCarro == "s"){
    carro = true
};



//Criando a estrututa if e else para completar o desafio e exibir as informações no console e na tela.

if(idade < 18 || !cnh) {
    console.log(nome + ", você não pode dirigir.");
    document.write(nome + ", você não pode dirigir.");
}
else if (idade >= 18 && cnh && !carro ) {
    console.log(nome + ", você pode dirigir porém não tem carro.");
    document.write(nome + ", você pode dirigir porém não tem carro.");

} else {
    console.log(nome + ", você será um motorista.");
    document.write(nome + ", você será um motorista.");
}


