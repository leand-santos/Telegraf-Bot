const bot = require('../bot')

const helpMessage = 'Hi! I am Pyramid bot and this is my command list:\n' +
    'Parameter with [] are required and with <> are not required\n\n' +
    '/start - Check if I am alive\n' +
    '/help - Commands documentation\n\n' +
    '- List commands\n\n' +
    '/newList [list_name] <list_description> - Create an empty list\n' +
    '/lists <list_name> - Show all lists or a specific list\n' +
    '/list [list_name] - Shows a specific list\n' +
    '/deleteList [list_name] - Delete a list\n' +
    '/deleteItems [list_name] [one_or_more_item_index] - Delete one or more list items by index\n\n' +
    '- Useless messages\n\n' +
    '/wakeUp\n' +
    '/youWantedTo'

module.exports = bot.help(ctx => ctx.reply(helpMessage))