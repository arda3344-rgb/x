const Discord = require("discord.js");

module.exports = {
  name: "eğlence",
  run: async (client, message) => {
    const Embedmatador = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setTitle(
        "**▬▬▬▬▬▬[  **Yardım Komutu**  ]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `k!`"
      )
      .setThumbnail("")
      .setDescription(
        `
**                     ▬▬▬▬▬▬[  **Yardım**  ]▬▬▬▬▬▬ ** 
<:__:795322309987663892>k!fbi

<:__:795322309987663892>k!aşkölçer

<:__:795322309987663892>k!aduketçek

<:__:795322309987663892> k!ara155

<:__:795322309987663892>k!ay

<:__:795322309987663892>k!balık-tut

<:__:795322309987663892> k!beşlik

<:__:795322309987663892> k!dünya

<:__:795322309987663892> k!ejderha-yazı

<:__:795322309987663892> k!emojiyazı

<:__:795322309987663892> k!espri

<:__:795322309987663892> k!hesapla

<:__:795322309987663892> k!kartop

<:__:795322309987663892> k!kralol

<:__:795322309987663892>k!slots

<:__:795322309987663892> k!taksimdayı

<:__:795322309987663892> k!atatük

<:__:795322309987663892> k!yılbaşı

<:__:795322309987663892>k!öp

<:__:795322309987663892> k!corona

<:__:795322309987663892> k!sewyok

<:__:795322309987663892> k!sewvar

<:__:795322309987663892> k!sa-as.

<:__:795322309987663892> k!temizle

<:__:795322309987663892> k!kasaaç


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
