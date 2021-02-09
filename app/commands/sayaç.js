const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../bot.js");

module.exports = {
name : "sayaç",
run : async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "<a:unlem:787973714342969355>  Bu komutu kullanabilmek için **yönetici** yetkisine sahip olmalısın."
    );

  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first();

  if (args[0] !== "ayarla" && args[0] !== "sıfırla")
    return message.channel.send(
      "<a:unlem:787973714342969355>  Yanlış Kullanım Lütfen **ayarla** veya **sıfırla** yaz."
    );
  if (args[0] === "sıfırla") {
    if (!sayacsayi) {
      message.channel.send(
        `<a:yukleniyor2:796015218814877778> | **Ayarlanmayan şeyi sıfırlayamazsın.**`
      );
      return;
    }

    db.delete(`sayac_${message.guild.id}`);
    db.delete(`sayacK_${message.guild.id}`);
    message.channel.send(
      `<a:kabul:795532457424060448>  | **Sayaç başarıyla sıfırlandı.**`
    );
    return;
  }

  if (args[0] === "ayarla") {
    if (isNaN(args[1])) {
      message.channel.send(
        `<a:ayar:787974504378007602>  | **Bir sayı yazmalısın.**`
      );
      return;
    }

    if (!sayackanal) {
      await message.channel.send(
        `<a:ayar:787974504378007602>  | **Sayaç kanalını etiketlemelisin.**`
      );
      return;
    }

    if (args[1] <= message.guild.memberCount) {
      message.channel.send(
        `<a:AyarGf:727894683061321759> | **Sunucudaki kullanıcı sayısından** (${message.guild.memberCount}) **daha yüksek bir değer girmelisin.**`
      );
      return;
    }

    db.set(`sayac_${message.guild.id}`, args[1]);
    db.set(`sayacK_${message.guild.id}`, sayackanal.id);

    message.channel.send(
      `<a:kabul:795532457424060448> | **Sayaç** \`${
        args[1]
      }\`, **sayaç kanalı** ${sayackanal} **olarak ayarlandı.**`
    );
  }
  
  
}}
