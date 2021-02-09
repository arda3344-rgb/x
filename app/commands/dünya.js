const Discord = require('discord.js');

module.exports = { 
  name : "dünya",
run : (client, message, params) => {
    const codeworld = new Discord.MessageEmbed()
    .setAuthor('Buyrun Dünya')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/572804441237880847/576423861508112384/donen-dunya-gif.gif`)
    return message.channel.send(codeworld);
}}

