const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
const path = require("path");
const commands = (client.commands = new Discord.Collection());
const aliases = (client.aliases = new Discord.Collection());
const prefix = "k!";

client.login(process.env.token);
client.on("ready", () => {
  // botun durumu ayarı
  console.log("Bot Aktif !"); //${prefix}yardım
  client.user.setActivity(`k!yardım/Premium Almak İçin k!pre `, {
    type: "STREAMING",
    url: "https://www.twitch.tv/ardamertlol"
  }); //STREAMING
});

client.on("message", async function(message) {
  if (
    !message.guild ||
    message.author.bot ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  var cmd = client.commands.get(args.shift());
  if (cmd) {
    let karaliste = db.fetch(`karaliste_${message.author.id}`);
    if (karaliste) {
      const embed = new Discord.MessageEmbed()
        .setColor("#3f007f")
        .setAuthor(
          "Kylee Bot ",
          "https://cdn.glitch.com/da12cf24-0ce3-4f24-a982-94a30349799f%2Fcbc7c931-9a61-49fd-b8ec-704476921e6b.image.png?v=1611056920180"
        )
        .setFooter("⛔️ Sen Karalistedesin!");
      return message.channel.send(embed);
    }
    cmd.run(client, message, args);
  }
});

//---------------------------------KOMUTLAR---------------------------------\\
client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam Kardeşim Hoşgeldin**");
    }
  }
});

client.on("guildMemberAdd", member => {
  let rol = db.fetch(`autoRole_${member.guild.id}`);
  if (!rol) return;
  let kanal = db.fetch(`autoRoleChannel_${member.guild.id}`);
  if (!kanal) return;

  member.roles.add(member.guild.roles.cache.get(rol));
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "> <a:giris:789575330754330664>  **Sunucuya yeni katılan** **" +
        member.user.username +
        "** **Kullanıcısına** <@&" +
        rol +
        "> **Rolü verildi** <a:giris:789575330754330664>  "
    )
    .setColor("RANDOM"); //.setFooter(`<@member.id>`)
  member.guild.channels.cache.get(kanal).send(embed);
});

client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  if (member.guild.memberCount >= sayac) {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:giris:789575330754330664>   **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` kişi olduk! <:partner:793011604732117032>  Sayaç sıfırlandı.`
      );
    db.delete(`sayac_${member.guild.id}`);
    db.delete(`sayacK_${member.guild.id}`);
    return;
  } else {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:giris:789575330754330664>   **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
          member.guild.memberCount
        }\` kişi!`
      );
  }
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  member.guild.channels.cache
    .get(skanal)
    .send(
      `<a:3739_ablobleave:808285780103135232>  **${
        member.user.tag
      }** sunucudan **ayrıldı**! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
        member.guild.memberCount
      }\` kişi!`
    );
});
client.on("messageUpdate", msg => {
  const i = db.fetch(`${msg.guild.id}.motion`); // burası bota ikide bir reboot attırdığı içinde ping çoğalıyor dimi
  if (i) {
    const motion = [
      "oç",
      "amk",
      "ananı sikiyim",
      "piç",
      "orospu çocuğu",
      "orospu",
      "kahbe",
      "kahpe",
      "ebeni sikim",
      "anneni sikeyim",
      "göt",
      "o.ç",
      "annen"
    ];
    if (motion.some(motion => msg.content.includes(motion))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply(
              `${msg.author.tag}, **Hey Dostum Bu Sunucuda Küfür Etmek Yasak!** <a:unlem:787973714342969355>`
            )
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
client.on("guildMemberAdd", async (member, message, msg) => {
  const fakehesapp = db.fetch(`fake_${member.guild.id}`);

  if (fakehesapp == "açık") {
    var moment = require("moment");
    require("moment-duration-format");
    moment.locale("tr");
    var { Permissions } = require("discord.js");
    var x = moment(member.user.createdAt)
      .add(30, "days")
      .fromNow();
    var user = member.user;
    x = x.replace("birkaç saniye önce", " ");
    if (!x.includes("önce") || x.includes("sonra") || x == " ") {
      let rol = db.fetch(`fakerol_${member.guild.id}`);
      member.user.send(
        "Hesabınız 30 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsiniz."
      );

      let kanalcık = await db.fetch(`fakekanal_${member.guild.id}`);
      let kanal = member.guild.channels.cache.find(r => r.id === kanalcık);

      const embedd = new Discord.MessageEmbed()
        .setTitle("Fake hesap yakalandı!")
        .setTimestamp()
        .setDescription(
          `Bir fake hesap sisteme yakalandı ve rolü verildi. **${member}**`
        )
        .setTimestamp()
        .setColor("#E8C02A");
      kanal.send(embedd);
      member.roles.add(rol);
    } else {
    }
  }
});

//çekiliş///////////////

client.on("message", msg => {
  if (!db.get(`mute_${msg.guild.id}_${msg.author.id}`)) return;
  if (msg.member.hasPermission("BAN_MEMBERS")) return;
  msg.author.send(`Hey ${msg.author}, Sunucuda Susturulmuşsun! :rage:`);
  msg.delete();
});

client.on("ready", async () => {
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }

    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function cekme(message, array) {
    var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || [];
    var cekilenkisi = array[Math.floor(Math.random() * array.length)];
    if (!client.users.cache.get(cekilenkisi.id)) {
      return cekme(message, array);
    }
    while (eskikazananlar.includes(cekilenkisi.id)) {
      return cekme(message, array);
    }
    if (!eskikazananlar.includes(cekilenkisi.id)) {
      if (db.has(`cekilis_${message.id}.kazananlar`)) {
        db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id);
      } else {
        db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id]);
      }
    }
  }

  let dasall = db.all().filter(i => i.ID.startsWith("cekilis_"));
  for (const ii of dasall) {
    const channel = client.channels.cache.get(db.fetch(`${ii.ID}.mesaj.kanal`));
    const mesaj = db.fetch(`${ii.ID}.mesaj.id`);
    const bitecegizamanms = db.fetch(`${ii.ID}.bitecek`);
    const kazanacak = db.fetch(`${ii.ID}.kazanacak`);
    const verilecek = db.fetch(`${ii.ID}.verilecek`);
    const cekilisid = db.fetch(`${ii.ID}.cekilisid`);
    let embed = new Discord.MessageEmbed()
      .setAuthor("🎉 Çekiliş 🎉")
      .setTitle("**" + verilecek + "**")
      .setDescription(
        `Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`
      )
      .setFooter(
        `${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır  | Kalan Süre:`
      )
      .setTimestamp(bitecegizamanms)
      .setColor("#3f007f");
    if (channel) {
      channel.messages.fetch(mesaj).then(async msg => {
        msg.edit(embed);
        const reaction = msg.reactions.cache.first();
        const intervaley = setInterval(async function() {
          if (!db.has(ii.ID)) return clearInterval(intervaley);
          const kalanzaman = bitecegizamanms - Date.now();
          if (kalanzaman <= 0) {
            embed.setDescription(`Şanslı Kişi Şeciliyor...`);
            msg.edit(embed);
            clearInterval(intervaley);
            reaction.users.fetch().then(async kasiler => {
              const gercekkisisayisi = kasiler.size - 1;
              if (gercekkisisayisi < kazanacak) {
                let embed = new Discord.MessageEmbed()
                  .setAuthor("🎉 Çekiliş Bitti 🎉")
                  .setTitle("**" + verilecek + "**")
                  .setDescription(
                    `Yeterli Katılım Olmadığından Çekiliş İptal Oldu.`
                  )
                  .setFooter(
                    `${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır | Bitti:`
                  )
                  .setTimestamp(bitecegizamanms)
                  .setColor("#3f007f");
                msg.edit(embed);
                msg.reactions.removeAll();
                db.delete(`cekilis_${msg.id}`);
                let thall = db.all().filter(i => i.ID.includes(msg.id));
                for (const uu of thall) {
                  db.delete(uu.ID);
                }
              } else {
                var array = reaction.users.cache.array();
                var ukuk;
                for (ukuk = 0; ukuk < kazanacak; ukuk++) {
                  cekme(msg, array);
                }
                await sleep(50);
                let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`);
                let embed = new Discord.MessageEmbed()
                  .setAuthor("🎉 Çekiliş Bitti 🎉")
                  .setTitle("**" + verilecek + "**")
                  .setDescription(
                    `**Kazanan Kişiler:** <@${kazananherkes.join(">, <@")}>`
                  )
                  .setFooter(
                    `${kazanacak} Kazanan Olacak | ID: ${cekilisid} | Soulfly#0101 Tarafından Sağlanmıştır | Bitti: `
                  )
                  .setTimestamp(bitecegizamanms)
                  .setColor("#3f007f");
                msg.edit(embed);
                msg.channel.send(`<@${kazananherkes.join(">, <@")}>`);
                msg.channel.send(
                  new Discord.MessageEmbed()
                    .setColor("#3f007f")
                    .setDescription(
                      `**Tebrikler** <@${kazananherkes.join(
                        ">, <@"
                      )}>! **\`${verilecek}\` Çekilişini Kazandınız!**`
                    )
                );
                db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes);
                db.delete(`cekilis_${msg.id}`);
                let theall = db.all().filter(i => i.ID.includes(msg.id));
                for (const ua of theall) {
                  db.delete(ua.ID);
                }
              }
            });
          } else {
            const kalanzamanyazi = destructMS(kalanzaman);
            embed.setDescription(
              `**Çekilişe Katılmak İçin 🎉 Tepkisine Tıklaman Yeterli Çekişie Kalan Süre: ${kalanzamanyazi}**`
            );
            msg.edit(embed);
          }
        }, 5000);
      });
    }
  }
});
