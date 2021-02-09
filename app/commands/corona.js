const Discord = require("discord.js");

module.exports = {
name : "corona",
run : (client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle(
      "**▬▬▬▬▬▬[  **Corona**  ]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `.`"
    )
    .setThumbnail("")
    .setDescription(
      `
**                     ▬▬▬▬▬▬[  **Covid 19**  ]▬▬▬▬▬▬ ** 
COVID-19, farklı kişileri farklı şekillerde etkilemektedir. Enfekte kişilerin çoğu, hafif ila orta düzeyde semptomlar geliştirmekte ve hastaneye kaldırılmadan iyileşmektedir.
Ruh sağlığıyla ilgili sorunlar yaygındır. Stresi azaltıp iyi hissetmeye yardımcı olabilecek ipuçlarını burada bulabilirsiniz

Durun. Nefes alın. Düşünün


İleti̇şi̇m kurun


Sağlik rutini belirleyin



Nezaket göstermeyi ihmal etmeyin
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}};
