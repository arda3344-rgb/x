const Discord = require("discord.js");


module.exports = {
name : "sewvar",
run : (client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("▬▬▬▬▬▬[ Hayırlı Olsun Bro ]▬▬▬▬▬▬  \n \n **** ``")
    .setThumbnail("")
    .setDescription(
      `

**Hayırlı olsun bro,yengemiz kim öpde görelim.**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}}