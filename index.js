var TelegramBot = require('node-telegram-bot-api')
var request = require('request');
const fs = require('fs');

const utils = require('./Utils.js')


const BOT_TOKEN = process.env.BOT_TOKEN


telegram = new TelegramBot(BOT_TOKEN, { polling: true })

const dayKeyboard = {
  "parse_mode": "Markdown",
  "reply_markup": {
    "keyboard": [["Lunes", "Martes"], ["Miercoles", "Jueves"], ["Viernes", "Sabado"], ["Domingo"]],
    "resize_keyboard": true,
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
    } else if (text == "viernes") {
      const fridayKeyboard = utils.fridayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, fridayKeyboard)
    } else if (text == "sabado") {
      const fridayKeyboard = utils.saturdayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, fridayKeyboard)
    } else if (text == "domingo") {
      const fridayKeyboard = utils.sundayKeyboard()
      telegram.sendMessage(message.chat.id, answerMsg, fridayKeyboard)
    }
    //is a boss
    else {
      var ENDPOINT = 'https://api.telegram.org/bot' + BOT_TOKEN
      var basePhotoPath = "https://raw.githubusercontent.com/elianaferreira/jwastrategiesbot/master/strategies"
      
      const dinoName = utils.parseName(message.text)
      const folder = `./strategies/${dinoName}`
      console.log(folder)
      var namesArray = []

      //add files names into array
      fs.readdir(folder, (err, files) => {
        if (files != null) {
          files.forEach(fileName => {
            namesArray.push(fileName)
          });
        }

        for (index in namesArray) {
          //generate url
          const imageURL = `${basePhotoPath}/${dinoName}/${namesArray[index]}`
          var formData = {
            chat_id: message.chat.id,
            photo: request(imageURL)
          };
          request.post({
            url: ENDPOINT + '/sendPhoto',
            formData: formData
          });
        }
      });      
    }
  }
});