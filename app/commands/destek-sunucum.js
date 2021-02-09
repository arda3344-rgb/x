const Discord = require("discord.js");

module.exports = {
  name : "destek-sunucum",
  run : (client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("▬▬▬▬▬▬[ Destek Sunucum ]▬▬▬▬▬▬  \n \n *")
    .setThumbnail("")
    .setDescription(
      `

**[Destek Sunucum](https://discord.gg/2c3xdan4x2)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}}
