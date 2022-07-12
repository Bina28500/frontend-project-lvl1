import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';
import {greeting} from './brain-games.js'
console.log('What is the result of the expression?');
let i = 0;
for(;i<3; i++){
    let operators = '*+-';
    let max_pos = operators.length - 1;
    let pos = Math.floor(Math.random()*max_pos);
    let expression = `${Math.floor(Math.random()*100)}`+`${operators.substring(pos, pos + 1)}`+`${Math.floor(Math.random()*100)}`;
    console.log(`Question: ${expression}`);
    let answer = readlineSync.question('Your answer:');
    if(answer == eval(expression)){
        console.log('Correct!');
        continue;
    } else{
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(expression)}'.
        Let's try again, ${name}!`)
        break;
    }
};
if(i==3){
    console.log(`Congratulations, ${name}!`)
};
