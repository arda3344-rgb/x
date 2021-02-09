const Discord = require("discord.js");

module.exports = {
   name: 'ara155',
   run: async(client, message, args) => {
  if (!message.guild) {

const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("<a:uyar:789487017015902268> **Eğlence Komutları Özel Mesajlarda Kullanılamaz**","**----------------------------------------------------------**");

return message.author.send(Embedmatador);
 
}
  if (message.channel.type !== "dm") {

const Embedmatador = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Geliyor!!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(Embedmatador);
  }
   }}