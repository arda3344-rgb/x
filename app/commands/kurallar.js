const Discord = require("discord.js");

module.exports = { 
name : "kurallar",
run : async(client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("▬▬▬▬▬▬[ Kurallar ]▬▬▬▬▬▬  \n \n **** ``")
    .setThumbnail("")
    .setDescription(
      `
Kurallar

¤ Reklam Sunucu İçi Yasaktır. (Yetkililere bildirmelisiniz.)
¤ Ses & Chat odalarında  Ailevi Küfür, Troll, Rahatsız etmek & Bass Yasaktır.
¤ Kişisel sorunlarınızı sunucuya taşımak, Düzeni bozmak, Çıkan tartışmayı uzatmak Yasaktır.
¤ Din, dil, ırk, Cinsiyetçilik ayrımı Yasak.
¤ Cinsel içerikli görseller paylaşmak Yasaktır.
¤ Spam, flood ve caps Yasaktır.

¤ Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.

Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.

`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}}