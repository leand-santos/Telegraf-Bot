const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command('deleteList', async (ctx) => {
    const [command, name] = ctx.message.text.split(' ')

    if (!name)
        return ctx.reply('You must provide a list name to delete')

    const list = await List.findOne({ name })

    if (!list)
        return ctx.reply('List not found')

    await List.deleteOne({ name })

    ctx.reply(`${name} list has been deleted`)
})