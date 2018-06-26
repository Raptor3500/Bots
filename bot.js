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

        //!kick @unrealism Because fuck you
    
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
    
    if(message.content.startsWith(`${prefix}say`)) {
        message.delete(1)
        let botmessage = args.join(' ');
        message.channel.send(botmessage);
    }

    if(message.content.startsWith(`${prefix}setgame`)) {
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
        message.channel.send(gamestatusembed);
    }

        
       

});

bot.login(process.env.Token)
