function writeCards(names,event){
    let thankYou = [];
    for(let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}

function countDown(num){
let i = num;
while (i >= 0){
console.log(i--);
}
}