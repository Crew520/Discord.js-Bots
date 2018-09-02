const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let requestedrole = args.join(" ");
  if(!requestedrole) return message.channel.send("Please specify a role!");

  let roleEmbed = new Discord.RichEmbed()
  .setDescription("**Role Request**")
  .setColor("#0093fc")
  .addField("**Role Requested**", requestedrole)
  .addField("Time of Request", message.createdAt)
  .addField("**Requested by**", `${message.author} with ID: ${message.author.id}`);

  let rolechannel = message.guild.channels.find(`name`, "rolerequests");
  if(!rolechannel) return message.channel.send("You do not have a channel named rolerequests!");

  rolechannel.send(roleEmbed);
  message.channel.send("***Role request has been sent!***");
}

module.exports.help = {
  name: "requestrole"
}
