#!/usr/bin/env node
import {askName} from '../src/cli.js'
export function greeting(){
    console.log('Welcome to the Brain Games!');
    askName();
}
greeting();
