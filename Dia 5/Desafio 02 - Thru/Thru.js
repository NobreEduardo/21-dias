let valor
let quantidade
let posto = prompt("Favor escolher uma das opções" +
"\n1- Abastecer com gasolina ; \n2- Abastecer com Alcool ;  \n3- Calibrar os pneus")



switch (posto) {
    case "1":
        valor = parseInt(prompt("Favor informar o valor para abastecer com gasolina"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina! Boa viagem");
        document.write("Foram abastecidos " + quantidade + "L de gasolina! Boa viagem")
        break;
    case "2":
        valor = parseInt(prompt("Favor informar o valor para abastecer com alcool:"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de álcool! Boa viagem");
        document.write("Foram abastecidos " + quantidade + "L de álcool! Boa viagem")
        break;
    case "3":
        console.log ("Pneus calibrados com sucesso! Boa viagem!!")
        document.write("Pneus calibrados com sucesso! Boa viagem!!")
        break;
     default:
        console.log("Escolha invalida, tente novamente!");
        document.write("Escolha invalida, tente novamente!");
        break;
}