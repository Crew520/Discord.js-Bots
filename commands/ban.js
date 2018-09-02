const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Invalid Input. Correct usage: .ban <USER> <REASON>");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("*NEIN!*");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be banned!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#d91a1a")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time of Ban", message.createdAt)
  .addField("Reason", bReason);

  let banchannel = message.guild.channels.find(`name`, "log");
  if(!banchannel) return message.channel.send("Could not find reports channel");

  message.guild.member(bUser).ban(bReason);
  banchannel.send(banEmbed);
}

module.exports.help = {
  name: `${prefix}ban`
}
