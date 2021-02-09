const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name : "küfür-engel",  
run : async (client, message, args) => {
  if (args[0] === "aç") {
    db.set(`${message.guild.id}.motion`, true);
    message.channel.send(
      "Kylee ot | **Küfür Engel Sistemi Başarılı Şekilde** `Aktif` **Edildi.** **Bot ban yetkisi Olanların Mesajını Silmeyecektir.**"
    );
    return;
  }
  if (args[0] === "kapat") {
    db.delete(`${message.guild.id}.motion`);
    message.channel.send(
      "Kylee | **Başarılı Şekilde** `Devri Dışı` **Edildi.**"
    );
    return;
  }
  message.channel.send(
    "Kylee |  **Lütfen** `aç` **yada** `kapat` **Yazın!**"
  );
}}