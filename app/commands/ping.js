const {MessageEmbed} = require('discord.js')




module.exports = {
   name: 'ping',
   run: async(client, message, args) => {

const bekleniyor = new MessageEmbed()
 .setAuthor("Row Bot", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
 .setColor("#3f007f")
 .setImage("https://cdn.discordapp.com/emojis/712616118384197682.gif?v=1")
 .setFooter("🔮 Tüm Hakları Saklıdır.")
 message.channel.send({embed: bekleniyor}).then(sa => {
   setTimeout(() => {
     const slkgloss = new MessageEmbed()
     .setAuthor("Row Bot", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
     .setColor("#3f007f")
     .setDescription(`**Botun Pingi ${client.ws.ping}'ms'dir**`)
     .setFooter("🔮 Tüm Hakları Saklıdır.")
     sa.edit(slkgloss)
   }, 5000)
 })
     
   }
}