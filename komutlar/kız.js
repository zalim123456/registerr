
const Discord = require('discord.js');

const db = require('quick.db')

exports.run = async (client, message, args) => {

  let rol1 = "790102531212443648" /// alıncak rol id
  let rol2 = "789935396024877097" ///// kız rol id
  let tag = "ᖽ" //tagınız
  let log = "789929957412831244"///// log kanal id
  let kkanal = "790119598543994900"///kayıt kanalı id
  let yetkili = "790102531858628608"//Yetkili rol ıd
  let isim = args[1]
  let yas = args[2];
  let kisi = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.get(args[0])
  
 
if(message.channel.id !== kkanal) return message.channel.send("Bu Komudu Sadece Kayıt Kanalında Kullanabilirsin")
    if(!kisi) return message.channel.send("Kayıt ediceğiniz kişiyi etiketleyin")

  if (!isim) return message.reply('İsim girin ')

  if (!yas) return message.reply('Yaş girin')

  

  message.channel.send("Başarı ile kayıt edildi.");

  kisi.setNickname(`${tag} ${isim} | ${yas}`)

  kisi.removeRole(message.guild.roles.get(rol1));

 kisi.addRole(message.guild.roles.get(rol2));

  client.channels.get(log).send(`\`${kisi.user.username}\` adlı kullanıcı kayıt oldu!`)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["k"],

  permLevel: 0

}

exports.help = {

  name: "kız-kayıt",

  description: "Kayıt olmanızı sağlar.",

  usage: "kayıt-ol"

}