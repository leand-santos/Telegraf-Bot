const bot = require('../bot')

module.exports = bot.command('dice', ctx => {
    const [command, diceSides, numberOfDices] = ctx.message.text.split(' ')

    if (!diceSides)
        return ctx.reply('You must provide the number of dice sides')

    let fixedDiceSides = parseInt(diceSides)
    let fixedNumberOfDices = parseInt(numberOfDices)

    fixedDiceSides = fixedDiceSides > 0 ? (fixedDiceSides <= 1000 ? fixedDiceSides : 1000) : 1
    fixedNumberOfDices = fixedNumberOfDices > 0 ? (fixedNumberOfDices <= 50 ? fixedNumberOfDices : 50) : 1

    let result = ''
    let resultSum = 0

    for (let i = 0; i < fixedNumberOfDices; i++) {
        let randomNumber = Math.floor(Math.random() * fixedDiceSides) + 1
        result += `${randomNumber} `
        resultSum += randomNumber
    }

    ctx.reply(`The result of ${fixedNumberOfDices} D${fixedDiceSides} rolls is:\n${result}\n\nTotal: ${resultSum}`)
})