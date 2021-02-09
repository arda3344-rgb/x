const Discord = require('discord.js');

module.exports = {
name : "yaz",
run : async(client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
}}