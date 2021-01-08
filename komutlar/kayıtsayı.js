const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
exports.run = async(client, message, args) => {
 let kisi = message.mentions.users.first() || message.author
var kayıts = db.fetch(`kayıtsayı_${kisi.id}`) || 0
message.channel.send(new Discord.RichEmbed()
.setColor(message.guild.me.displayColor)
.addField("Kayıt Ettiği Kişi Sayısı", kayıts, true))
}
//discord.gg/fiber
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  
  exports.help = {
    name: 'kayıt-say',
    description: 'kayıt sayar',
    usage: 'yaz'
  };