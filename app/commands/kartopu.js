const Discord = require("discord.js");

module.exports = {
   name: 'kartopu',
   run: async(client, msg, args) => {


let matador = args.slice(0).join(" ");
if (matador.length < 1) {

return msg.reply("**Fun Bot | Kime kartopu atmak isterin ya isim yaz yada etiketle!**");

} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${matador} artık :snowman: oldu.`));
  }
}};

