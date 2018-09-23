const Discord = module.require("discord.js"); 

module.exports.run = async (bot, message, args) => {
    let userAvatar = message.author.avatarURL;
    let embed = new Discord.RichEmbed()
          .setDescription(`User Info for ${message.author}`)
          .setAuthor(message.author.username)
          .setColor("#000001")
          .setThumbnail(userAvatar)
          .addField("Username", `${message.author.username}#${message.author.discriminator}`)
          .addField("ID", message.author.id)
          .addField("Account Created on", message.author.createdAt);

      message.channel.send({embed: embed});
}

module.exports.help = {
    name: "userinfo"
}
