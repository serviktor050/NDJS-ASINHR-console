#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const currentValue = Math.floor(Math.random() * 100);
console.log('Загадано число в диапазоне от 0 до 100');

rl.on('line', (answer) => {
    if (answer < currentValue) {
        console.log('Больше');
    } else if (answer > currentValue) {
        console.log('Меньше');
    } else {
        console.log(`Отгадано число: ${answer}`);
        rl.close();
    }
});
