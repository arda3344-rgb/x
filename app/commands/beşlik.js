const Discord = require("discord.js");

module.exports = {
name: "beşlik",
run : function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador) return message.reply("<a:unlem:786264007283703878> **Beşlik Çakacağın Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
  
 return message.channel.send(Embedmatador);
}}
