const Discord = require('discord.js');

module.exports = {
  name: "fakemesaj",  
  run : async(client, message, args) => {
     if (!message.guild) {
   const ozelmesajuyari = new Discord.MessageEmbed()
   .setColor(0xFF0000)
   .setTimestamp()
   .setAuthor(message.author.username, message.author.avatarURL)
   .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
   return message.author.send(ozelmesajuyari); }
 let kişi = message.mentions.users.first();
   if (message.mentions.users.size < 1) return message.reply('Lütfen Birisini Etiketle')
   let yazi = args[1]
   if (!yazi) return message.reply('Lütfen Yazını Yaz')
   message.delete()
   message.channel.createWebhook(kişi.username, kişi.avatarURL)
   .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
       .then(wb => {
           const hook = new Discord.WebhookClient(wb.id, wb.token);
           hook.send(yazi)
           hook.delete()
       })
       .catch(console.error))
       .catch(console.error);
}}
