const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Invalid Input. Correct usage: .report <USER> <REASON>");
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Please specify a reason.");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("~Reports~")
    .setColor("#f21313")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time of Report", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "log");
    if(!reportschannel) return message.channel.send("Could not find reports channel channel. Please create one with the name log.");

    let reportsentEmbed = new Discord.RichEmbed()
    .setDescription("**Report has been sent!**")
    .setColor("#59ff00");

    reportschannel.send(reportEmbed);
    message.channel.send(reportsentEmbed);
}

module.exports.help = {
  name: "report"
}
