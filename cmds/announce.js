module.exports.run = async (bot, message, args) => {  

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You do not have permission to do that!**");

    message.delete();

    let announcment = args.join(" ");

    let announceChannel = message.guild.channels.find(`name`, "announcements");
    if(!announceChannel) return message.channel.send(":x: **This command is disabled. In order to enable it, please create a channel named announcements.**");

    announceChannel.send(announcment);
}

module.exports.help = {
    name: "announce"
}
