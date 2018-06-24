const botSettings = require('./botsettings.json');
const Discord = require('discord.js');
const prefix = botSettings.prefix;
const ownerID = '274298631517896704'

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`-----------`);
    console.log(`Bot is ready!`);
    console.log(`Bot username is: `, bot.user.username);
    console.log(`Bot ID is: `, bot.user.id);
    console.log(`-----------`);
    console.log();
    console.log(`Please use this Doc for making commands.`);
    console.log(`https://discord.js.org/`);
    console.log();

    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log('Invite me using this link: ' + link);
    }).catch(err => {
        console.log(err.stack);
    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    //restart - because Heroku is fun
    if(message.content.startsWith(prefix + 'restart')) {
        if(message.author.id !== ownerID) {
          message.channel.send('Only my owner can do this but nice try');
        return}
      message.channel.send('Requiping...');
      (msg => bot.destroy());
      (() => bot.login(settings.token));
    };

    if(message.content.startsWith(`${prefix}kick`)){

        //!kick @unrealism Cause fuck you
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("no");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");
        if(kReason == '') {
            kReason = 'No reason was stated.'
        }
    
        let kickEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#e56b00")
            .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Kicked In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);
    
        message.guild.member(kUser).kick(kReason);
        message.channel.send(kickEmbed);
    
        return;
    }

    if(message.content.startsWith(`${prefix}FUCK`)) {
        if(message.author.id !== '419388965238472714') {
            message.channel.send('Oh Yes! Please I love it when you do that! MORE! *moans sexually*', {
                file: './images/unknown (14).png'
            });
        } else {
            message.channel.send('w o t')
        }

    }

    if(command === `${prefix}setstatus`) {
        if(message.author.id === ownerID) {
            // Sets the bot's status to idle
            if(args == 'idle') {
                bot.user.setStatus('idle');
                message.channel.send(`Status set to idle.`);};

            if(args == 'do not disturb') {
                bot.user.setStatus('dnd')
                message.channel.send(`Status set to ${args}`)
            }

            // Sets the bot's status to dnd
            if(args == 'dnd') {
                bot.user.setStatus('dnd');
                message.channel.send('Status set to dnd.');
            };

            // Sets the bot's status to invisible
            if(args == 'invisible') {
                bot.user.setStatus('invisible');
                message.channel.send('Status set to invisible');
            };
            // Sets the bot's status to online
            if(args == 'online') {
                bot.user.setStatus('online');
                message.channel.send('Status set to online');
            };
            // Set's bot's status to default status (aka online)
            if(args == '') {
                bot.user.setStatus('online');
                message.channel.send('Default status set');
            };
        }    
    }
    
    if(message.content.startsWith(`${prefix}say`)) {
        message.delete(1)
        let botmessage = args.join(' ');
        message.channel.send(botmessage);
    }

    if(message.content.startsWith(`${prefix}setgame`)) {
        let game = args[0];
        let gamestatus = args.join(" ").slice(22);
        let gamestatusembed = new Discord.RichEmbed()
            .setAuthor('setgame')
            .setColor('#00FF00')
            .addField(`Game: `, `${game} ${playermessage}`);

        if(game == '') {
            let gamesembed = new Discord.RichEmbed()
                .setAuthor('setgame')
                .setColor('#e56b00')
                .addField('playing', `${prefix}setgame playing lol hi`)
                .addField('watching', `${prefix}setgame watching myself die`)
                .addField('listening', `${prefix}setgame listening Elohim - I Want You`)
                .addField('streaming', `${prefix}setgame streaming with my friends https://twitch.tv/unrealismgames`);
            
            message.channel.send(gamesembed);
        }
        if(game == 'playing') {
            bot.user.setPresence({
                name: gamestatus,
                type: 0
            });
            message.channel.send(gamestatusembed);
        }
    }
     const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("List of Commands")
        .setColor(0x703817)
        .addField("Category 1", `${bot.commands.filter(cmd => cmd.help.category === 'Category 1').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 2", `${bot.commands.filter(cmd => cmd.help.category === 'Category 2').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 3", `${bot.commands.filter(cmd => cmd.help.category === 'Category 3').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true);
    message.channel.send(help)
}

exports.help = {
    name: "help",
    category: "Category 1"
}
  

});

bot.login(process.env.Token)
const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("List of Commands")
        .setColor(0x703817)
        .addField("Category 1", `${bot.commands.filter(cmd => cmd.help.category === 'Category 1').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 2", `${bot.commands.filter(cmd => cmd.help.category === 'Category 2').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true)
        .addField("Category 3", `${bot.commands.filter(cmd => cmd.help.category === 'Category 3').map(cmd => `\`${cmd.help.name}\``).join(", ")}`, true);
    message.channel.send(help)
}

exports.help = {
    name: "help",
    category: "Category 1"
}
