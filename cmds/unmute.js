module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: **You do not have permission to do that!**");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage(":x: **Please specify a user or ID!**");

    let muteRole = message.guild.roles.find(r => r.name === "Horizon Muted");
    if(!muteRole || !toMute.roles.has(muteRole.id)) return message.channel.send(":x:  **This user is not muted!**");

    await toMute.removeRole(muteRole);

    message.channel.send(":white_check_mark: **I have unmuted them!**");
}

module.exports.help = {
    name: "unmute"
}
