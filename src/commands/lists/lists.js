const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command('lists', async (ctx) => {
    const [command, name] = ctx.message.text.split(' ')

    if (name) {
        const list = await List.findOne({ name })

        if (!list)
            return ctx.reply('List not found')

        return ctx.reply(list)
    }

    const list = await List.find()

    let response = ''

    list.forEach(item => {
        response += `*${item.name}*\n`
        response += list.description ? `_${item.description}_\n\n` : ''
    })

    ctx.replyWithMarkdown(response)
})