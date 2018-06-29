module.exports.run = async (bot, message, args) => {
  // setname - change the bot's name
  bot.user.setUsername(argresult);
  message.channel.send(`I changed my username to \`${argresult}\``);
}

module.exports.help = {
  name: "setname"
}
