const Discord = require("discord.js");

module.exports = {
  name: "kullanıcı",
  run: async (client, message) => {
    const Embedmatador = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setTitle("Kylee Bot")
      //.setThumbnail("")
      .setDescription(
        `
**Kylee Bot Genel Yardım Menüsü
Prefixim:
Developerim: <@786280011681890314>**

<:__:795322309987663892> k!altın

<:__:795322309987663892> k!alev

<:__:795322309987663892> k!çekiliş

<:__:795322309987663892> k!avatar

<:__:795322309987663892> k!havadurumu

<:__:795322309987663892>  k!üyedurum 

<:__:795322309987663892>  k!istatistik

Şu anda kullanıcı komutları çok az eklenecek beklemede kalın

`
      )

      .setFooter(client.user.username + "", client.user.avatarURL)
      .setImage(
        "https://cdn.glitch.com/da12cf24-0ce3-4f24-a982-94a30349799f%2F350kb%20(4).gif?v=1609699728769"
      )
      .setTimestamp();

    return message.channel.send(Embedmatador).then;
  }
};
