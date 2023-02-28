const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const token = process.env.TOKEN;//TOKEN=5758412238:AAE7WI0x-sNQyxVgkLuo7WnlV-MQ3DYvwPI

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);
    const wordex = (msg.text.replaceAll(' ', '+'))
    console.log(wordex);
    if (wordex) {

            var b = nightmare.goto(`https://duckduckgo.com/?q=${wordex}&t=h_&ia=web`)
            .wait('.js-about-item-abstr')
            .evaluate(() => document.querySelector('.OgdwYG6KE2qthn9XQWFC').innerText)
            .then(
                (res) => {
                    console.log("res2")

                    bot.sendMessage(chatId, `HI ${msg.chat.first_name} your relavent answer is : ${res}`);
                    
                }

            )
            .catch(error => {
                console.log(error);
            }
            )



    }

});

