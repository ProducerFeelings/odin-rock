console.log("HI")


const options = ['rock','paper', 'scissors'];

function getComputerChoice() {
    const choice = options [Math.floor(Math.random() * options.length)];
    return choice;

getComputerChoice();