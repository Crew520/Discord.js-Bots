const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
      let invitelink = await bot.generateInvite(["ADMINISTRATOR"]);
      let botAvatar = bot.user.displayAvatarURL;
      let inviteEmbed = new Discord.RichEmbed()
        .setThumbnail(botAvatar)
        .setDescription("Invite")
        .setColor("#00b7ff")
        .addField("Invite Horizon to your server:", invitelink)
        .addField("Join the offical Horizon Bot server:", `https://discord.gg/hBuaFht`);

        message.channel.send(inviteEmbed);
}

module.exports.help = {
    name: "invite"
}
