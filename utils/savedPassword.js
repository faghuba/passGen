const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')
const log = console.log

const savedPassword = (password) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf8', () => {
            fs.close(id, () => {
                log(chalk.green('Passwords save to password.txt'))
            })
        })
    })
}


module.exports = savedPassword;