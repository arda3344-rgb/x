const Discord = require("discord.js");

module.exports = {
name : "pre",
run : async(client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("**▬▬▬▬▬▬[  **Premium**  ]▬▬▬▬▬▬**  \n \n ")
    .setThumbnail("")
    .setDescription(
      `
**Kylee**
Kylee Bot
💵 15 ₺ / 1 Ay
💵 25 ₺ / 3 Ay
💵35 ₺ / 6 Ay
Deneyin Diye İlk Alımda %90 A Varan İndirimler!💵💵💵**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}}