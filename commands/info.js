const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setThumbnail(sicon)
  .setColor("#c2e804")
  .addField("Server Name", message.guild.name)
  .addField("Total Members", message.guild.memberCount)
  .addField("Created On", message.guild.createdAt);

  message.channel.send(serverembed);
}

module.exports.help = {
  name: "info"
}
