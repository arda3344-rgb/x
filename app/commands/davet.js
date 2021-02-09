const Discord = require("discord.js");

module.exports = {
  name: "davet",
  run: (client, message, args) => {
    const motion = new Discord.MessageEmbed()
      .setColor("#00ee00")
      .setAuthor(`Kylee Bot`, client.user.avatarURL)
      .addField(
        `> Neden Biz ?`,
        `**Çünkü işimizi en iyi şekilde yaptığımızı düşünüyoruz.**`
      )
      .addField(
        `> Botumuzu Davet Etmek isterseniz`,
        `[Botu Davet Et!](https://discord.com/oauth2/authorize?client_id=789130990496382996&scope=bot&permissions=8)`
      )
      .addField(
        `> Destek Sunucusuna Katılmak İsterseniz`,
        `[Destek Sunusu](https://discord.gg/r93HWeYr)`
      )
      .addField(
        `> Kod Paylaşım Sunusuna Katılmak İsterseniz`,
        `[Kod Paylaşım Sunucumuz](https://discord.gg/r93HWeYr)`
      )
      .addField(
        `> Sitemize Göz Atmak isterseniz`,
        `[Sitemiz](http://kyleebot.ml/)`
      )

      .setThumbnail(
        "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
      );
    message.channel.send(motion);
  }
};
