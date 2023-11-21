//Requisitando os valores dos números ao user

let number1 = parseInt(prompt("Informe o primeiro número: "))
    console.log(number1);
let number2 = parseInt(prompt("Informe o segundo número:"))
    console.log(number2);

let operacao = prompt ("Informe a operação matemática entre as opções: X, +, - e /")
    console.log(operacao)


//Montagem do switch para realizar as operações:

    switch(operacao){
        case "X":
            console.log(number1 + " multiplicado por " + number2 +" = " + (number1 * number2))
            document.write(number1 + " multiplicado por " + number2 +  " = " + (number1 * number2))
            break;
        case "+":
            console.log(number1 + " somado com " + number2 + " = " + (number1 + number2))
            document.write(number1 + " somado com " + number2 + " = " + (number1 + number2))
            break;
        case "-":
            console.log(number1 + " menos " + number2 + " = " + (number1 - number2))
            document.write (number1 + " menos " + number2 + "=" + (number1 - number2))
            break;
        case "/":
            console.log(number1 + " dividido por " + number2 + "=" + (number1 / number2))
            document.write(number1 + " dividido por " + number2 + "=" + (number1 / number2))
            break;
        default:
            console.log("Operação invalida")
            document.write("Operação Invalida, favor tentar novamente!")
            break;
    }

