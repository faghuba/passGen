#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log

const createPassword = require('./utils/createPassword')
const savedPassword = require('./utils/savedPassword')

program.version('{ }').description('Simple password generator')

program
    .option('-L, --length <number>', 'length of password', '12')
    .option('-S, --save', 'Save password to passwords.txt')
    .option('-RN, --no-numbers', 'Remove numbers')
    .option('-RS, --no-symbols', 'Remove Symbols')
    .parse();

const { length, save, numbers, symbols } = program.opts()

// Get Generated Psswords
const generatedPassword = createPassword(length, numbers, symbols);


// Save to file 
if (save) {
    savedPassword(generatedPassword)
}

//Copy to clipboard 
// clipboardy.writeSync(generatedPassword)


// Output generated Paswword
log(chalk.blue('Password Generated: ' + chalk.blueBright(generatedPassword)));
// log(chalk.yellow('Paswword Copied to Clipboard'))

