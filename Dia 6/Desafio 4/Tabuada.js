//Definindo o número base para calculo da tabuada:

let tab = Number(prompt("informe um número para calcular a tabuada:"))

// Configuração do for para atender os calculos da tabuada até x10
for(let contador = 0; contador <= 10; contador ++){
    console.log(tab*contador)
    document.write(tab + " x " + contador + " = " + tab*contador + " | ");
}
