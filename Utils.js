const dinoNames = ["Sinoceratops", "Indominus Rex", "Grypolyth", "Gorgotrebax", "Woolly Mammoth", "Mammotherium", "Stygidaryx", "Hadros Lux", "Erlikogamma", "Pyrritator", "Indoraptor", "Mortem Rex", "Tyrannosaurus Rex", "Megalosuchus", "Smilonemys", "Ceramagnus"]


module.exports.isDayMessage = function (message) {
  if (message.toLowerCase() == "lunes" ||
      message.toLowerCase() == "martes" ||
      message.toLowerCase() == "miercoles" ||
      message.toLowerCase() == "jueves") {
        return true
      }
  return false
}

module.exports.isDinoName =  function (message) {
  return dinoNames.includes(message)
}

module.exports.mondayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Sinoceratops", "Indominus Rex"], ["Grypolyth", "Gorgotrebax"]]
    }
  }
}


module.exports.tuesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Woolly Mammoth", "Mammotherium"], ["Stygidaryx", "Hadros Lux"]]
    }
  }
}


module.exports.wednesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Erlikogamma", "Pyrritator"], ["Indoraptor", "Mortem Rex"]]
    }
  }
}

module.exports.thursdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Tyrannosaurus Rex", "Megalosuchus"], ["Smilonemys", "Ceramagnus"]]
    }
  }
}