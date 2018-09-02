const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permission to do that");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("Invalid Input. Correct Usage: .mute <USER> <REASON>");
    let mreason = args.join(" ").slice(22);
    if(!mreason) return message.channel.send("Please specify a reason!");

    let muteEmbed = new Discord.RichEmbed()
    .setDescription("~Mute~")
    .setColor("#ff7b00")
    .addField("Muted User", `${toMute} with ID: ${toMute.id}`)
    .addField("Muted By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time of Mute", message.createdAt)
    .addField("Reason", mreason);

  let mutechannel = message.guild.channels.find(`name`, "log");

    let muterole = message.guild.roles.find(r => r.name === "Impact MUTED");
    if(!muterole) {
        try {
          role = await message.guild.createRole({
            name: "Impact MUTED",
            color: "#000000",
            permissions: []
          });

          message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        } catch(e) {
          console.log(e.stack);
        }
    }

    if(toMute.roles.has(muterole.id)) return message.channel.sendMessage("This user is already muted!");

    await toMute.addRole(muterole);

    message.channel.send("I have muted them!");
    mutechannel.send(muteEmbed);
  }

module.exports.help = {
  name: "mute"
}
