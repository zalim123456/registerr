const db = require('quick.db');

const Discord = require('discord.js')

exports.run = function(client, message) {

 
 let tag = "ᖽ"//tagı girin
  message.channel.send(new Discord.RichEmbed()
                      .setAuthor(message.guild.name)
                      .setDescription(`Sunucumuzun Tagı: **${tag}`)
                      .setColor(message.guild.me.displayColor)
                      
                      .setFooter(`Tagımızı alarak sen de bize katıl! `))};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['tagımız'],

  permLevel: 0

};

exports.help = {

  name: 'tag',

  description: 'Tagı gösterir..',

  usage: 'tag'

};