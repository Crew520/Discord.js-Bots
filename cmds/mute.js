module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permission to do that!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage(":x: **Please specify a user or ID!**");

    if(toMute.id === message.author.id) return message.channel.send(":x: **You can't mute yourself!**");

    let muteRole = message.guild.roles.find(r => r.name === "Horizon Muted");
    if(!muteRole) {
        try {
            muteRole = await message.guild.createRole({
              name: "Horizon Muted",
              color: "#000000",
              permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
               await channel.overwritePermissions(muteRole, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    if(toMute.roles.has(muteRole.id)) return message.channel.send(":x: **This user is already muted!**");

    await toMute.addRole(muteRole);

    message.channel.send(":white_check_mark: **I have muted them!**");
}

module.exports.help = {
    name: "mute"
}
