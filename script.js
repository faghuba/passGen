const program = require('commander');
const createPassword = require('./utils/createPassword')
const log = console.log

program.version('{ }').description('Simple password generator')


program
    .option('-L, --length <number>', 'length of password', '8')
    .option('-S, --save', 'Save password to passwords.txt')
    .option('-RN, --no-numbers', 'Remove numbers')
    .option('-RS, --no-symbols', 'Remove Symbols')
    .parse();

const { length, save, numbers, symbols } = program.opts()

// Get Generated Psswords
const generatedPassword = createPassword(length, numbers, symbols);

log(generatedPassword)
