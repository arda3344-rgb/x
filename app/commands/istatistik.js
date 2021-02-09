const Discord = require("discord.js");

module.exports = {
  name: "istatistik",
  run: (client, message) => {
    let egehanss = new Discord.MessageEmbed()

      .setThumbnail(message.author.displayAvatarURL())
      .setAuthor(client.user.username, client.user.avatarURL)
      .addField(
        "Veriler",
        `> Toplam sunucu: **${
          client.guilds.cache.size
        }** \n> Toplam kullanıcı: **${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}** \n> Toplam kanal: **${
          client.channels.cache.size
        }**`
      )
      .addField(
        "Bot Geliştiricisi",
        `> Bot geliştiricisi <a:sag:795531387390001152>ve<@783659934968709121>,<@723936838611370076>`
      )
      .addField(
        "Sürümler",
        `> Discord.js sürümü: **v${Discord.version}** \n> Node.js sürümü: **${process.version}**`
      )
      .addField(
        "Gecikmeler",
        `> Bot pingi: **${
          client.ws.ping
        }** \n> Mesaj gecikmesi: **${new Date().getTime() -
          message.createdTimestamp}**`
      )

      .setTimestamp()
      .setColor("RANDOM");
    message.channel.send(egehanss);
  }
};
