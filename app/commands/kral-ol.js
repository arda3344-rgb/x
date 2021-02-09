const Discord = require("discord.js");


module.exports = {
   name: 'kralol',
   run: async(client, message, args) => {

     
  if (!message.guild) {
    const Embedmatador = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "<a:unlem:786264007283703878> **Eğlence Komutları Özel Mesajlarda Kullanılamaz**",
        "----------------------------------------------------------"
      );

    return message.author.send(Embedmatador);
  }

  if (message.channel.type !== "dm") {
    const Embedmatador = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Artık Kral Oldun!!!")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif")
      .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`);

    return message.channel.send(Embedmatador);
  }
}}
