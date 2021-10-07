const dinoNames = ["Postimetrodon", "Indominus Rex", "Andrewtops", "Gorgotrebax", "Woolly Mammoth", "Glyptoceras", "Stygidaryx", "Hadros Lux", "Carnotaurus", "Blue", "Megalotops", "Rinchicyon", "Indoraptor", "Mortem Rex", "Tyrannosaurus Rex", "Scorpius Rex", "Phorurex", "Ceramagnus", "Meiolania", "Refrenantem", "Bajadasaurus", "Haast Maximus", "Hydra Boa", "Megalonyx"]


module.exports.isDayMessage = function (message) {
  if (message.toLowerCase() == "lunes" ||
      message.toLowerCase() == "martes" ||
      message.toLowerCase() == "miercoles" ||
      message.toLowerCase() == "jueves" ||
      message.toLowerCase() == "viernes" || 
      message.toLowerCase() == "sabado" ||
      message.toLowerCase() == "domingo") {
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
      "keyboard": [["Postimetrodon", "Indominus Rex"], ["Andrewtops", "Bajadasaurus"], ["Gorgotrebax"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.tuesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Woolly Mammoth", "Glyptoceras"], ["Stygidaryx", "Hadros Lux"], ["Carnotaurus", "Blue"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.wednesdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Megalotops", "Rinchicyon"], ["Indoraptor", "Meiolania"], ["Mortem Rex"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}

module.exports.thursdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Tyrannosaurus Rex", "Scorpius Rex"], ["Phorurex", "Megalonyx"], ["Ceramagnus"], cancelArrayItem],
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


module.exports.saturdayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Haast Maximus"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}


module.exports.sundayKeyboard = function () {
  return {
    "parse_mode": "Markdown",
    "reply_markup": {
      "keyboard": [["Hydra Boa"], cancelArrayItem],
      "resize_keyboard": true,
      "one_time_keyboard": true
    }
  }
}