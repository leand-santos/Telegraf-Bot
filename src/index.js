const mongoose = require('mongoose')

const bot = require('./bot')

require('./commands')

bot.catch((err, ctx) => {
    ctx.reply(`Ooops, encountered an error for ${ctx.updateType}\n${err}`)
})

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => bot.launch())
    .then(() => console.log('Bot is online'))
    .catch((e) => console.log(e))


