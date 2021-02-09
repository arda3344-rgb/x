const {MessageEmbed} = require('discord.js')
const db = require("quick.db")


module.exports = {
   name: 'mute',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let member = message.mentions.users.first();
     
     
    if(args[0] == "at"){
     const yanlış = new MessageEmbed()
     .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
     .setColor("#3f007f")
     .setDescription(":x: **| Yanlış Kullanım: .mute at @kişi**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     if(!member) return message.channel.send(yanlış)
      
  
    if(member.id === message.guild.ownerID) {
      const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
      .setDescription(`**:x: | Sunucu Sahibine Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(motion)
   }
     
   if(member.id === client.user.id) {
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
      .setDescription(`**:x: | Bana Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
     }
     
    if(member.id === message.author.id) {
     const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
      .setDescription(`**:x: | Kendi Kendine Mute Atamazsın Dostum :thinking:**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(motion)
    }
      
     const muteli = new MessageEmbed()
     .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
     .setColor("#3f007f")
     .setDescription(":x: **| Bu Kişi Zaten Susturulmuş**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
    if(db.get(`mute_${message.guild.id}_${member.id}`)) return message.channel.send(muteli)
      
     
      db.set(`mute_${message.guild.id}_${member.id}`, true)
        
    const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
      .setDescription(`:yess22: **|** ${member} **Başarıyla Susturuldu**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(motion)  
      
   }  
     
     
    if(args[0] == "kaldır"){  
    const yanlış = new MessageEmbed()
     .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
     .setColor("#3f007f")
     .setDescription(":x: **| Yanlış Kullanım: .mute kaldır @kişi**")
     .setFooter("🔮 Tüm Hakları Saklıdır.")   
     if(!member) return message.channel.send(yanlış)
      
   db.delete(`mute_${message.guild.id}_${member.id}`)
        
    const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
      .setDescription(`:white_check_mark: **|** ${member} **Başarıyla Susturması Kaldırıldı**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`)
     return message.channel.send(motion)  
      
      
  }

     
  const yanlış = new MessageEmbed()
   .setAuthor("Row ", "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453")
   .setColor("#3f007f")
   .setDescription(":x: **| Yanlış Kullanım: .mute at @kişi / .mute kaldır @kişi**")
   .setFooter("🔮 Tüm Hakları Saklıdır.")   
  if(!args[0]) return message.channel.send(yanlış)
     
  }
}