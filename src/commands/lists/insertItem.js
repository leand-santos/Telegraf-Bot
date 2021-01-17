const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command('insertItem', async (ctx) => {
    const [command, name, ...itemsArgs] = ctx.message.text.split(' ')

    if (!name)
        return ctx.reply('You must provide a list name to insert items')

    if (!itemsArgs[0])
        return ctx.reply('You must provide one or more items to insert')

    const list = await List.findOne({ name })

    if (!list)
        return ctx.reply('List not found')

    const items = itemsArgs.join(' ').split('\n')

    items.forEach(item => list.items.push({ title: item }))

    await list.save()

    ctx.reply('Items successfully inserted')
})