const Discord = require("discord.js");

module.exports = {
  name: "moderasyon",
  run: async (client, message) => {
    const Embedmatador = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setTitle('Kylee Bot')
     // .setThumbnail("")
      .setDescription(
        `
**Kylee Bot Moderasyon Yardım Menüsü
Prefixim:
Developerim: <@786280011681890314>**

<:__:795322309987663892>  k!sayaç

<:__:795322309987663892>  k!otorol

<:__:795322309987663892>  k!küfürengel

<:__:795322309987663892> k!canlıdestek

<:__:795322309987663892>  k!bugbildir 

<:__:795322309987663892>  k!fake-hesap

<:__:795322309987663892>k!sil
`
      )

      .setFooter(client.user.username + "", client.user.avatarURL)
      .setImage(
        "https://cdn.glitch.com/da12cf24-0ce3-4f24-a982-94a30349799f%2F350kb%20(4).gif?v=1609699728769"
      )
      .setTimestamp();

    return message.channel.send(Embedmatador).then; //MATADOR
  }
};
