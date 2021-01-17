const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command(['deleteItems', 'deleteitems'], async (ctx) => {
    const [command, name, ...indexes] = ctx.message.text.split(' ')

    if (!name)
        return ctx.reply('You must provide a list name to delete an item')

    if (!indexes[0])
        return ctx.reply('You must provide one or more indexes to delete')

    const list = await List.findOne({ name })

    if (!list)
        return ctx.reply('List not found')

    let deletedItems = ''

    indexes.forEach(index => {
        deletedItems += list.items.splice(index - 1, 1)[0].title + '\n'
    })

    await list.save()

    ctx.reply(`The items:\n${deletedItems}Were successfully deleted`)
})