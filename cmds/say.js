module.exports.run = async (bot, message, args) => {
    message.delete(1)
    let botmessage = args.join(' ');
    message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
