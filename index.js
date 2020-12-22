var TelegramBot = require('node-telegram-bot-api')
var request = require('request');

const utils = require('./Utils.js')

const BOT_TOKEN = process.env.BOT_TOKEN


telegram = new TelegramBot(BOT_TOKEN, { polling: true })

const dayKeyboard = {
  "parse_mode": "Markdown",
  "reply_markup": {
    "keyboard": [["Lunes", "Martes"], ["Miercoles", "Jueves"]]
  }
}



telegram.on("text", (message) => {
  if (!utils.isDayMessage(message.text) && !utils.isDinoName(message.text)) {
    telegram.sendMessage(message.chat.id, "Seleccione un día", dayKeyboard);
	} else {
    const text = message.text.toLowerCase()
    const answerMsg = "Seleccione el jefe"
    //is a day
    if (text == "lunes") {
      const mondayKeyboard = utils.mondayKeyboard()
      // telegram.sendMessage(message.chat.id, "Seleccione el jefe", { reply_markup: { mondayKeyboard, resize_keyboard: true } })
      telegram.sendMessage(message.chat.id, answerMsg, mondayKeyboard);
    } else if (text == "martes") {
      const tuesdayKeyboard = utils.tuesdayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, tuesdayKeyboard)
    } else if (text == "miercoles") {
      const wednesdayKeyboard = utils.wednesdayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, wednesdayKeyboard)
    } else if (text == "jueves") {
      const thursdayKeyboard = utils.thursdayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, thursdayKeyboard)
    }
    //is a boss
    else {
      var ENDPOINT = 'https://api.telegram.org/bot' + BOT_TOKEN;
      var photoURL = "http://i.imgur.com/5rOhtdL.png";
      var formData = {
        chat_id: message.chat.id,
        photo: request(photoURL)
      };
      request.post({
        url: ENDPOINT + '/sendPhoto',
        formData: formData
      });
    }
  }
});