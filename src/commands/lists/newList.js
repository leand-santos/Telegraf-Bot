const bot = require('../../bot')
const List = require('../../models/List')

module.exports = bot.command(['newList', 'newlist'], async (ctx) => {
    const [command, name, description] = ctx.message.text.split(' ')

    if (!name)
        return ctx.reply('You must provide a name for the list')

    const list = await List.findOne({ name })

    if (list) {
        return ctx.reply('Lists must have an unique name')
    }

    const newList = new List({
        name,
        description
    })

    await newList.save()

    ctx.reply(`New list ${name} created`)
})