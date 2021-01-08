const Discord = require("discord.js");
exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MOVE_MEMBERS")) return message.channel.send("Bu Komutu Kullanmak İçin Gerekli Yetkiniz yok")
    let kanal = args[1];
    let kullanici = message.mentions.members.first()
    if (!kanal) return message.channel.send("Kanal belirtmelisin")
    if (!kullanici) return message.channel.send("Kullanıcıyı belirtmelisin")
    kullanici.setVoiceChannel(`${kanal}`)
        .then(() =>
            message.channel.send(`${kullanici} <#${kanal}> adlı kanala taşındı`))
        .catch(console.error);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sestaşı'],
    permLevel: 0
};
exports.help = {
    name: 'taşı',
    
};