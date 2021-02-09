const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
   name: 'altın',
   run: async(client, message, args) => {
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)
  if(!REASON) return message.channel.send(embed)
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)
  message.channel.send(afk)
}