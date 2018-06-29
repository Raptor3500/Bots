

module.exports.run = async (bot, message, args) => {
    if(message.author.id === ownerID) {
        // Sets the bot's status to idle
        if(args == 'idle') {
            bot.user.setStatus('idle');
        };

        if(args == 'do not disturb') {
            bot.user.setStatus('dnd')
        }

        // Sets the bot's status to dnd
        if(args == 'dnd') {
            bot.user.setStatus('dnd');
        };

        // Sets the bot's status to invisible
        if(args == 'invisible') {
            bot.user.setStatus('invisible');
        };

        // Sets the bot's status to online
        if(args == 'online') {
            bot.user.setStatus('online');
        };

        // Set's bot's status to default status (aka online)
        if(args == '') {
            bot.user.setStatus('online');
        };

        if(args == '') {
            args = 'default'
        }

        let statusembed = new Discord.RichEmbed()
            .setTitle('setstatus')
            .addField('Status:', args);

        message.channel.send(statusembed);
      }
}

module.exports.help = {
  name: "setstatus"
}
