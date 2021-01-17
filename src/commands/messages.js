const bot = require('../bot')

module.exports = {
    wakeUp: bot.hears('Wake up', (ctx) => ctx.reply(
        '(Wake up)\n' +
        'Grab a brush and put a little make-up\n' +
        'Hide the scars to fade away the shake-up\n' +
        '(Hide the scars to fade away the...)\n' +
        'Why\'d you leave the keys upon the table?\n' +
        'Here you go create another fable'
    ))
}