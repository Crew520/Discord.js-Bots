const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permission to do that");

      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!toMute) return message.channel.sendMessage("Invalid Input. Correct Usage: .mute <USER> <REASON>");

      let muterole = message.guild.roles.find(r => r.name === "Impact MUTED");
      if(!muterole || !toMute.roles.has(muterole.id)) return message.channel.sendMessage("This user is not muted!");

      await toMute.removeRole(muterole);
      message.channel.send("I have unmuted them.");

}

module.exports.help = {
  name: "unmute"
}
