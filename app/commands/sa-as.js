const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name : "sa-as",
  run : async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send(':no_entry: Sa-as yazısını açmak için; `.sa-as aç veya kapat`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`✔Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`✔ Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`)
    
  }

}
}