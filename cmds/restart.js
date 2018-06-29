module.exports.run = async (bot, message, args) => {
  //restart - because Heroku is fun
  if(command === `${prefix}restart`) {
      if(message.author.id !== ownerID) {
        message.channel.send('Only my owner can do this but nice try');
      return}
    message.channel.send('Requiping...');
    (msg => bot.destroy());
    (() => bot.login(process.env.Token));
  };
}

module.exports.help = {
  name: "restart"
}
