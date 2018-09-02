const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("*NEIN!*");
  let numberofmsgs = args.join(" ");
  if(numberofmsgs > 100) return message.channel.send("Please choose a number between 0-100!");
  if(!numberofmsgs) return message.channel.send("Please choose a number between 0-100!");
  let messagecount = parseInt(numberofmsgs);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
}

module.exports.help = {
  name: "clear"
}
