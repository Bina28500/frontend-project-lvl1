import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';
import {greeting} from './brain-games.js'
console.log('Find the greatest common divisor of given numbers.');
let i = 0;
for(;i<3; i++){
    let firstNumber = Math.floor(Math.random()*100);
    let secondNumber = Math.floor(Math.random()*100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    let answer = readlineSync.question('Your answer:');
    let gcd
    while(firstNumber != secondNumber){
        if(firstNumber > secondNumber){
            firstNumber = firstNumber - secondNumber;
        } else{
            secondNumber = secondNumber - firstNumber;
        }
    }
    gcd = firstNumber;
    if(answer == gcd){
        console.log('Correct!');
        continue;
    } else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.
        Let's try again, ${name}!`);
    };
};
if(i==3){
    console.log(`Congratulations, ${name}!`)
};