const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
   name: 'altın',
   run: async(client, message, args) => {

  const yazi = args.slice(0).join("+");

  if (!yazi)
    return message.channel.send(
      `**Lütfen yazı yazınız.** <a:Yldz:742698148329291826>`
    );
  const linqo = `https://habbofont.net/font/steampunk/${yazi}.gif`.replace(
    " ",
    "+"
  );

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Altın Logo Oluşturuldu");
  message.channel.send(embed);
}


}


