// Code your solutions in this file
const cards= ["Guadalupe", "Ollie", " Aki"];

function writeCards(cards){
    const array=[];
    for (let i=0; i<cards.length;i++){
        const messages=`Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        array.push(messages) }
        return array; 
    
}
writeCards(cards);
console.log(writeCards(cards));

function countDown(){
    let i=10; while (i>=0){
        console.log(i);i--
    }
    return i;
}
countDown();