//criando váriaveis com as informações fornecidas pelo usuario

const fome = prompt("Você está com fome? (Sim/Não)");
const dinheiro = prompt("Você tem dinheiro? (Sim/Não)");
const restaurante = prompt("O restaurante está aberto?  (Sim/Não)")



// if e else com 3 cenários utilizando as váriaveis criadas anteriormente.
if(fome == "Não" || dinheiro == "Não"){
    console.log ("Hoje a janta será em casa")
}else if(fome == "Sim" && dinheiro == "Sim" && restaurante == "Não"){
    console.log ("Peça na Nativa")
} if (fome == "Sim" && dinheiro == "Sim" && restaurante == "Sim"){
    console.log("Hoje o jantar vai ser PF")
}
