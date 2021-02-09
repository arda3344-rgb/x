const Discord = require("discord.js");

module.exports = {
name : "sewyok",
run : async(client, message) => {
  const Embedmatador = new Discord.MessageEmbed()

    .setColor("BLUE")
    .setTitle("▬▬▬▬▬▬[  Üzülme Be kanka  ]▬▬▬▬▬▬  \n \n **** ``")
    .setThumbnail("")
    .setDescription(
      `

**🥂Giden gitmiştir gitti gün bitmiştir sen gideni değil giden seni kaybetmiştir,🥂 Yak aga Yak Yak🚬🚬🚬🚬🚬🚬🚬🚬**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(Embedmatador).then; //MATADOR
}}
