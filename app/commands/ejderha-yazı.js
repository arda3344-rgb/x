const Discord = require("discord.js");

module.exports = {
  name : "ejderha-yazı",
  run : (client, message, args) => {

let matador = args.slice(0).join("+");
if (!matador) return message.channel.send("**Lütfen Birşey Yazın**");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + matador;

const Embedmatador = new Discord.MessageEmbed()

.setImage(link);

return message.channel.send(Embedmatador);
}}


