const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
  var bansay = message.guild.fetchBans().then(bans => {
  message.channel.send(new Discord.RichEmbed()
                      .setTitle("Banlananlar")
                      .addField("Banlanan Kişi Sayısı:", bans, true)
                      .setColor(message.guild.me.displayColor))
  })
 };

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "bansay",
};
