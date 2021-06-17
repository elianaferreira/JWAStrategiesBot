const dinoNames = ["Sinoceratops", "Indominus Rex", "Grypolyth", "Gorgotrebax", "Woolly Mammoth", "Mammotherium", "Stygidaryx", "Hadros Lux", "Carnotaurus", "Blue", "Erlikogamma", "Pyrritator", "Indoraptor", "Mortem Rex", "Tyrannosaurus Rex", "Scorpius Rex", "Smilonemys", "Ceramagnus", "Meiolania", "Refrenantem"]


module.exports.isDayMessage = function (message) {
  if (message.toLowerCase() == "lunes" ||
      message.toLowerCase() == "martes" ||
      message.toLowerCase() == "miercoles" ||
      message.toLowerCase() == "jueves" ||
      message.toLowerCase() == "viernes") {
        return true
      }
  return false
}

module.exports.isDinoName =  function (message) {
  return dinoNames.includes(message)
}

module.exports.parseName = function (name) {
  return name.toLowerCase().replace(/\s/g, "")
}

const cancelArrayItem = ["Cancelar"]

module.exports.mondayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Sinoceratops", "Indominus Rex"], ["Grypolyth", "Gorgotrebax"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.tuesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Woolly Mammoth", "Mammotherium"], ["Stygidaryx", "Hadros Lux"], ["Carnotaurus", "Blue"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.wednesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Erlikogamma", "Pyrritator"], ["Indoraptor", "Meiolania"], ["Mortem Rex"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}

module.exports.thursdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Tyrannosaurus Rex", "Scorpius Rex"], ["Smilonemys", "Ceramagnus"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.fridayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Refrenantem"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}