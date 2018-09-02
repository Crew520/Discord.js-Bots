const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let recserEmbed = new Discord.RichEmbed()
  .setDescription("**Recommended Servers**")
  .setColor("#0093fc")
  .addField("Random Server (Changes weekly)", 'https://discord.gg/y8PKVy9')
  .addField("Potato Brigade", `https://discord.gg/hvDswYe`)
  .addField("kool kidz", `https://discord.gg/tHR3xDu`)
  .addField("Bot Testing Eviroment v2", `https://discord.gg/PAnvhnz`)
  .addField("The Pink Dinos", `https://discord.gg/NphS2BM`)
  .addField("Wumpus protection program", `https://discord.gg/PvfU5QU`);

  message.channel.send(recserEmbed);
}

module.exports.help = {
  name: "recservers"
}
