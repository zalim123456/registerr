const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "676048473237225502") return message.channel.send("🚫 Yapımcım Değilsin!")
    
    message.channel.send(`**Bot yeniden başlatılıyor...**`).then(msg => {
      message.channel.send(`Bot Yeniden Başlatıldı`).
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
    
          
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reboot',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};