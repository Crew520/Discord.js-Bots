const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("no you not good enough");
  let botmessage = args.join(" ");

  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
