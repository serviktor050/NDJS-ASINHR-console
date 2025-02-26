#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv;

const { year , y, month, m, date, d } = argv;

const newDate = new Date();

if ( year || y ) {
    console.log(newDate.getFullYear() - (year || y))
} else if ( month || m ) {
    console.log(newDate.getMonth() - (month || m))
} else if ( date || d ) {
    console.log(newDate.getDate() - (date || d))
} else {
    console.log("Укажите данные для изменения");
}