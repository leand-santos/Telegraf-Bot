const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command('list', async (ctx) => {
    const [command, name] = ctx.message.text.split(' ')

    if (!name)
        return ctx.reply('You must provide a list name')

    const list = await List.findOne({ name })

    if (!list)
        return ctx.reply('List not found')

    let response = `*${list.name}*\n\n`
    response += list.description ? `_${list.description}_\n` : ''

    let items = ''

    list.items.forEach(item => items += `- ${item.title}\n`)

    response += items

    return ctx.replyWithMarkdown(response)
})