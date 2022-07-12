import readlineSync from 'readline-sync';
import {name} from '../src/cli.js';
import {greeting} from './brain-games.js'
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let i = 0;
for(;i<3; i++){
    let number = Math.floor(Math.random()*100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer:');
    if((answer == 'yes') && (number%2==0)){
       console.log('Correct!');
       continue;
    } else if((answer == 'no') && (number%2!=0)){
       console.log('Correct!');
       continue;
    } else{
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`)
        break;
    }
};
if(i==3){
    console.log(`Congratulations, ${name}!`)
};
