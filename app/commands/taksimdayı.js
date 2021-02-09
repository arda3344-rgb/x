const Discord = require("discord.js");

module.exports = {
name : "taksimdayı",
run : async(client, message) => {

const Embedmatador = new Discord.MessageEmbed()

      .setAuthor("Taksim Dayı")//matador
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif")
      .setImage(`https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif`);

return message.channel.send(Embedmatador);

}}