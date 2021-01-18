const bot = require('../bot')

module.exports = bot.command('dice', ctx => {
    const [command, diceSides, numberOfDices] = ctx.message.text.split(' ')

    if (!diceSides)
        return ctx.reply('You must provide the number of dice sides')

    let fixedDiceSides = parseInt(diceSides)
    let fixedNumberOfDices = parseInt(numberOfDices)

    fixedDiceSides = fixedDiceSides > 0 ? (fixedDiceSides <= 1000 ? fixedDiceSides : 1000) : 1
    fixedNumberOfDices = fixedNumberOfDices > 0 ? (fixedNumberOfDices <= 10 ? fixedNumberOfDices : 10) : 1

    let result = ''

    for (let i = 0; i < fixedNumberOfDices; i++)
        result += `${Math.floor(Math.random() * fixedDiceSides) + 1} `

    ctx.reply(`The result of rolling ${fixedNumberOfDices} dices from ${fixedDiceSides} sides is:\n${result}`)
})