// Code your solutions in this file

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(name, event) {
    let thankYouCards =[]
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(number) {
    let i = 10;
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number); 
}