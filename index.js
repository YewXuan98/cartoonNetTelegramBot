const { text } = require('body-parser');
const telegramBot = require('node-telegram-bot-api');
require('dotenv').config();


const TOKEN = process.env.TOKEN;
const bot = new telegramBot(TOKEN, { polling: true });

var answerCallbacks = {};

bot.on('message', function (message) {
    var callback = answerCallbacks[message.chat.id];
    if (callback) {
        delete answerCallbacks[message.chat.id];
        return callback(message);
    }
});

bot.onText(/form/, function (message, match) {
    bot.sendMessage(message.chat.id, "Enter your name").then(function () {
        answerCallbacks[message.chat.id] = function (answer) {
            var name = answer.text;
            bot.sendMessage(message.chat.id, "Enter your gender").then(function () {
                answerCallbacks[message.chat.id] = function (answer) {
                    var gender = answer.text;
                    bot.sendMessage(message.chat.id, "Enter your NRIC").then(function () {
                        answerCallbacks[message.chat.id] = function (answer) {
                            var nric = answer.text;
                            bot.sendMessage(message.chat.id, "Enter your Nationality").then(function () {
                                answerCallbacks[message.chat.id] = function (answer) {
                                    var nationality = answer.text;
                                    bot.sendMessage(message.chat.id, "Enter your D.O.B").then(function () {
                                        answerCallbacks[message.chat.id] = function (answer) {
                                            var dob = answer.text;
                                            bot.sendMessage(message.chat.id, "Enter your age").then(function () {
                                                answerCallbacks[message.chat.id] = function (answer) {
                                                    var age = answer.text
                                                    bot.sendMessage(message.chat.id, "Enter your occupation").then(function () {
                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                            var occupation = answer.text
                                                            bot.sendMessage(message.chat.id, "Enter your drug allergy").then(function () {
                                                                answerCallbacks[message.chat.id] = function (answer) {
                                                                    var drugAllergy = answer.text
                                                                    bot.sendMessage(message.chat.id, "Enter your food allergy").then(function () {
                                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                                            var foodAllergy = answer.text
                                                                            bot.sendMessage(message.chat.id, "Non smoker declared during policy purchased?").then(function () {
                                                                                answerCallbacks[message.chat.id] = function (answer) {
                                                                                    var smokerDeclared = answer.text
                                                                                    bot.sendMessage(message.chat.id, "Non drinker declared during policy purchased?").then(function () {
                                                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                                                            var drinkerDeclared = answer.text
                                                                                            bot.sendMessage(message.chat.id, "Enter your height in cm (Do not include cm in input)").then(function () {
                                                                                                answerCallbacks[message.chat.id] = function (answer) {
                                                                                                    var height = answer.text
                                                                                                    bot.sendMessage(message.chat.id, "Enter your weight in kg (Do not include kg in input)").then(function () {
                                                                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                                                                            var weight = answer.text
                                                                                                            bot.sendMessage(message.chat.id, "Enter your contact number").then(function () {
                                                                                                                answerCallbacks[message.chat.id] = function (answer) {
                                                                                                                    var contactNo = answer.text
                                                                                                                    bot.sendMessage(message.chat.id, "Enter your NOK Name").then(function () {
                                                                                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                                                                                            var nokName = answer.text
                                                                                                                            bot.sendMessage(message.chat.id, "Enter your NOK relationship").then(function () {
                                                                                                                                answerCallbacks[message.chat.id] = function (answer) {
                                                                                                                                    var nokRs = answer.text
                                                                                                                                    bot.sendMessage(message.chat.id, "Enter your NOK contact no.").then(function () {
                                                                                                                                        answerCallbacks[message.chat.id] = function (answer) {
                                                                                                                                            var nokContactNo = answer.text
                                                                                                                                            bot.sendMessage(message.chat.id, `VIP Name:${name}\nVIP Gender:${gender}\nNRIC:${nric}\nNationality:${nationality}\n
                                                                                                                                            D.O.B:${dob}\nAge:${age}\nOccupation: ${occupation}\n
                                                                                                                                            Drug Allergy: ${drugAllergy}\nFood Allergy: ${foodAllergy}\n\nNon smoker declared during policy purchased: ${smokerDeclared}\n\n
                                                                                                                                            Non drinker declared during policy purchased: ${drinkerDeclared}\n\n
                                                                                                                                            Height: ${height}\nWeight: ${weight}\nBMI: ${weight/(height/100)**2}\nContact No,:${contactNo}\n\n
                                                                                                                                            *NOK = Next of Kin*\nName: ${nokName}\nRelationship: ${nokRs}\n Contact no.: ${nokContactNo}
                                                                                                                                            `);

                                                                                                                                        }
                                                                                                                                    })

                                                                                                                                }
                                                                                                                            })

                                                                                                                        }
                                                                                                                    })

                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }

                            })
                        }
                    });
                }
            });
        }
    });
});

