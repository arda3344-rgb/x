const Discord = require('discord.js');

module.exports = {
   name: 'ay',
   run: async(client, message, args) => {
  
  
    const matador = new Discord.MessageEmbed()
    .setAuthor('Buyrun Ay')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/756534591652626542/762731046634258453/ay.gif`)
    return message.channel.send(matador);
}};

