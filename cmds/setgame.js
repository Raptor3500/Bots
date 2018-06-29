const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let game = args[0];
    let playstatus = args.join(' ').slice(7);
    let listenstatus = args.join(' ').slice(9);
    let watchstatus = args.join(' ').slice(8);
    let streamstatus = args.join(' ').slice(9);
    let mesg = args.join(' ');
    let gamestatusembed = new Discord.RichEmbed()
        .setTitle('setgame')
        .setColor('#00FF00')
        .addField(`Presence:`, mesg)
        .setFooter('Original code by AgentHi5.');

    if(message.author.id !== ownerID) return message.channel.send('no');
    if(game == 'playing') {
        bot.user.setActivity(playstatus, {type: 'PLAYING'});
    }
    if(game == 'listening') {
        bot.user.setActivity(listenstatus, {type: 'LISTENING'});
    }
    if(game == 'watching') {
        bot.user.setActivity(watchstatus, {type: 'WATCHING'});
    }
    if(game == 'streaming') {
        bot.user.setActivity(streamstatus, {url: 'https://twitch.tv/dryspy4', type: 'STREAMING'})
    }
    if(game == 'Playing') {
        bot.user.setActivity(playstatus, {type: 'PLAYING'});
    }
    if(game == 'Listening') {
        bot.user.setActivity(listenstatus, {type: 'LISTENING'});
    }
    if(game == 'Watching') {
        bot.user.setActivity(watchstatus, {type: 'WATCHING'});
    }
    if(game == 'Streaming') {
        bot.user.setActivity(streamstatus, {url: 'https://twitch.tv/dryspy4', type: 'STREAMING'})
    }
    message.channel.send(gamestatusembed);
}

module.exports.help = {
  name: "setgame"
}
