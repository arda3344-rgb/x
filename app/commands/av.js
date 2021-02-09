const { oneLine } = require("common-tags");
  
  module.exports = {
   name: 'av',
   run: async(client, message, args, color) => {
  
  if (!args[0]) return message.channel.send("Bir üye etiketle!");

  const user =
    message.mentions.users.first() || client.users.cache.get(args[0]);

  message.channel.send({
    embed: {
      description: oneLine`
        **[\`PNG\`](${user
          .displayAvatarURL()
          .replace(
            user.displayAvatarURL().includes(".gif") ? ".gif" : ".png",
            ".png"
          )})**
        **-**
        **[\`WEBP\`](${user
          .displayAvatarURL()
          .replace(
            user.displayAvatarURL().includes(".gif") ? ".gif" : ".png",
            ".webp"
          )})**
        **-**
        **[\`JPG\`](${user
          .displayAvatarURL()
          .replace(
            user.displayAvatarURL().includes(".gif") ? ".gif" : ".png",
            ".jpg"
          )})**
        **-**
        **[\`GIF\`](${user
          .displayAvatarURL()
          .replace(
            user.displayAvatarURL().includes(".gif") ? ".gif" : ".png",
            ".gif"
          )})**`,
      author: {
        name: `${user.username} isimli kullanıcının avatarı`
      },
      image: {
        url: user.displayAvatarURL()
      },
      color: 0x00ffff
    }
  });
}}



