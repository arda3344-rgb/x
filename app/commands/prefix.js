const Discord = require("discord.js");

module.exports = {
name : "prefix-ayarla",
run : async(client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle()
    .setThumbnail("Premium Almak İçin k!pre")
    .setDescription(
      `
**Bu Sistem Sadece Premium İçindir.**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setImage(
      "https://cdn.glitch.com/da12cf24-0ce3-4f24-a982-94a30349799f%2F350kb%20(4).gif?v=1609699728769"
    )
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //kylee
}}

