let nomeHeroi = "Crash"
let xpHeroi = 8700
let classificacaoHeroi

if(xpHeroi <= 1000){
    classificacaoHeroi = "Ferro"
}else if(xpHeroi <= 2000){
    classificacaoHeroi = "Bronze"
}else if(xpHeroi <= 5000){
    classificacaoHeroi = "Prata"
}else if(xpHeroi <= 7000){
    classificacaoHeroi = "Ouro"
}else if(xpHeroi <= 8000){
    classificacaoHeroi = "Platina"
}else if(xpHeroi <= 9000){
    classificacaoHeroi = "Ascendente"
}else if(xpHeroi <= 1000){
    classificacaoHeroi = "Imortal"
}else{
    classificacaoHeroi = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + classificacaoHeroi);

