const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let suggestion = args.join(" ");

  let suggestEmbed = new Discord.RichEmbed()
  .setDescription("Suggestion")
  .setColor("#0093fc")
  .addField("Suggestion", suggestion)
  .addField("Suggested by", `${message.author} with ID ${message.author.id}`);

  let suggestionchannel = message.guild.channels.find(`name`, "suggestions");
  if(!suggestionchannel) return message.channel.send("Could not find suggestion channel.");

  let suggestedEmbed = new Discord.RichEmbed()
  .setDescription("**Suggestion has been sent!**")
  .setColor("#0093fc");

  suggestionchannel.send(suggestEmbed);
  message.channel.send(suggestedEmbed);
}

module.exports.help = {
  name: "suggest"
}
