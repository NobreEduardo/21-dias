/* Desafio:
Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).


REGRAS: 
    1- Considere iniciar a variável saldo com algum valor

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo. */


//Declarando váriaveis

let saldo = 100;
let maiorValor = 0;
let mediaValores = 0;
let totalTransacoes = 0;
let continuar = false

 //

do{
        const nome = prompt ("Informe seu nome: ");
        const cpf = prompt ("Informe seu CPF: ");
        const valor = Number(prompt("Digite o valor da transação: "));
        const operacao = prompt ("Qual operação deseja realizar? (Deposito / Saque)")
    
    if (valor < 0 ){
        console.log("Operação invalida, tente novamente")
    } else if ( operacao == "Saque" && valor > saldo){
        console.log ("Valor maior que o saldo disponível, tente outro valor")
    } else if (operacao == "Saque"){
        console.log("Olá " + nome + " " + cpf + ", seu saldo é de R$" + saldo);
        saldo -= valor;
        totalTransacoes++;
        mediaValores += valor;
        if(valor > maiorValor) {
            maiorValor = valor;
        }
        console.log("Transação realizada com sucesso. Seu novo saldo é de R$" + saldo);
    } else {
        console.log("Olá " + nome + " " + cpf + ", seu saldo atual é R$" + saldo);
        saldo += valor;
        totalTransacoes++
        mediaValores += valor
        if (valor > maiorValor){
            maiorValor = valor;
        }
        console.log("Transação realizada com sucesso. Seu salto atual é R$" + saldo);
        
    }

    const opcao = prompt("Desaja continuar? 1 para continuar, 2 para parar: ");
    if (opcao == "1"){
        continuar = true
    } else if (opcao == "2"){
        continuar = false
    } else {
        console.log ("Opção inválida. Retornaremos ao menu. ");
        continuar = false
    }

} while (continuar)

console.log("Saldo final: R$" + saldo);
console.log("Maior valor inserido: R$" + maiorValor);
console.log("Media dos valores inseridos: R$" + mediaValores);







