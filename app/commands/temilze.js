const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sil",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let mesaj = args[0];
    const motion = new MessageEmbed()
      .setColor("#3f007f")
      .setAuthor(
        "Kylee ",
        "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453"
      )
      .setDescription(`**:x: | Lütfen Rakam Belirtiniz**`)
      .setFooter(`🔮 Tüm Hakları Saklıdır.`);
    if (!mesaj || isNaN(mesaj)) return message.channel.send(motion);

    if (mesaj > 600) {
      message.delete();
      const motion = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor(
          "Kylee ",
          "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453"
        )
        .setDescription(`**:x: | 600 Dan Fazla Mesaj Silemezsin**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`);
      return message.channel.send(motion);
    }

    if (mesaj < 101) {
      message.channel.bulkDelete(args[0]).then(msg => {
        const motion = new MessageEmbed()
          .setColor("#3f007f")
          .setAuthor(
            "Kylee ",
            "https://images-ext-2.discordapp.net/external/e4tUjC65P-qhbPz-Y3Vql3HB6wW_XlebJl87758YQHE/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/760055196658171934/ab3ac43c0f479996f6187513002b4166.webp?width=453&height=453"
          )
          .setDescription(
            `**:white_check_mark: |** ${msg.size} **Adet Mesaj Silindi!**`
          )
          .setFooter(`🔮 Tüm Hakları Saklıdır.`);
        return message.author.send(motion);
      });
    }
    if (mesaj > 100 && mesaj < 200) {
      message.channel.bulkDelete(100).then(() => {
        message.channel.bulkDelete(mesaj - 100);
      });
    }
    if (mesaj == 200) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
    }
    if (mesaj > 200 && mesaj < 300) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100).then(() => {
        message.channel.bulkDelete(mesaj - 200);
      });
    }
    if (mesaj == 300) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
    }
    if (mesaj > 300 && mesaj < 400) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100).then(() => {
        message.channel.bulkDelete(mesaj - 300);
      });
    }
    if (mesaj == 400) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
    }
    if (mesaj > 400 && mesaj < 500) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100).then(() => {
        message.channel.bulkDelete(mesaj - 400);
      });
    }
    if (mesaj == 500) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
    }
    if (mesaj > 500 && mesaj < 600) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100).then(() => {
        message.channel.bulkDelete(mesaj - 500);
      });
    }
    if (mesaj == 600) {
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
      message.channel.bulkDelete(100);
    }
  }
};
