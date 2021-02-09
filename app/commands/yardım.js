const Discord = require("discord.js");

module.exports = {
  name: "yardım",
  run: async (client, message) => {
    const Embedmatador = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setTitle('')
      .setThumbnail("Kylee bot")
      .setDescription(
        `
**Kylee Bot Genel Yardım Menüsü
Prefixim:
Developerim: <@783659934968709121>**

<:__:795322309987663892>  k!eğlence

<:__:795322309987663892>k!moderasyon

<:__:795322309987663892> k!kullanıcı

<:__:795322309987663892> k!kayıt-yardım


`
      )

      .setFooter(client.user.username + "", client.user.avatarURL)
      .setImage(
        "https://cdn.glitch.com/da12cf24-0ce3-4f24-a982-94a30349799f%2F350kb%20(4).gif?v=1609699728769"
      )
      .setTimestamp();

    return message.channel.send(Embedmatador).then; //Row
  }
};
