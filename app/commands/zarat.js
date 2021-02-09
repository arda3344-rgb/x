const Discord = require('discord.js')

module.exports ={
name: "zarat",
run : async(bot, message) => {
  
    message.channel.send(new Discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Zarın: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}}