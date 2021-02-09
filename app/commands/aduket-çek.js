const Discord = require("discord.js");
module.exports = {
   name: 'aduketçek',
   run: async(client, message, args) => {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**<a:uyar:789487017015902268> Aduket Çekeceğin Kişiyi Etiketlemelisin<a:uyar:789487017015902268> **");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(Embedmatador);
}};


