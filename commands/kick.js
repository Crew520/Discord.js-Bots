const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Invalid Input. Correct usage: .kick <USER> <REASON>");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("*NEIN!*");
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#ff7b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time of Kick", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "log");
  if(!kickChannel) return message.channel.send("Could not find reports channel");

  message.guild.member(kUser).kick(kReason);
  message.delete().catch(O_o=>{});
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
