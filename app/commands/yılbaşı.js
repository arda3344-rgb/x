const Discord = require("discord.js");
const ms = require("parse-ms");

module.exports = {
  name: "yılbaşı",
  run: async (client, message, args) => {
    let yilbasi = new Date("2022-01-01 00:00:00");
    let zaman = ms(yilbasi - Date.now());

    return message.channel.send(
      `🎄 **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n🎄 **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`
    );
  }
};
