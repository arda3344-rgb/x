const Discord = require("discord.js");
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;

module.exports = {
   name: 'hesapla',
   run: async(client, message, args) => {

  var soru = args.join(" ");

  if (!soru)
    return message.reply(
      "**Bir işlem belirtin.** `Örnek`: **!hesapla <işlem>**"
    );
  else {
    let cevap;
    try {
      cevap = math.eval(soru);
    } catch (err) {
     return message.channel.send("**Hatalı işlem: **" + err);
    }

    const Embedmatador = new Discord.MessageEmbed()

      .addField("Soru", soru)
      .addField("Cevap", cevap);

    return message.channel.send(Embedmatador);
  }
}}
