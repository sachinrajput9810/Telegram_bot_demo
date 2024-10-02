const axios = require('axios')
const { Telegraf } = require('telegraf')

const bot = new Telegraf('Your telegram API key')

bot.start( (ctx) => ctx.reply("Ajjo biddu log in the house"))

bot.command("weather" , (ctx) => ctx.reply("This is about the weather"))
bot.command("whomadethis" , ctx => ctx.reply("sachu bhai"))

bot.command("sum" , async (ctx) => {
    const response = await axios.get("https://raw.githubusercontent.com/sachinrajput9810/Leetcode_POTD/refs/heads/main/sum_of_prefix_scores.java")
    // console.log(response.data)
    return ctx.reply(response.data)
} )
bot.on('sticker' , ctx => ctx.reply('❤️'))

bot.launch()
