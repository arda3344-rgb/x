const Discord = require("discord.js");

module.exports = {
name: "öp",
run : async(client, message, args) => {
  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kimi öpeceksin?:kiss:");

  const Embedmatador = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.:kiss:**`
    )

    .setImage(
      `https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif`
    );
  return message.channel.send(Embedmatador);
}}

