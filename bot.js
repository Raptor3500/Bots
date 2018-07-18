const Discord = require('discord.js');
const prefix = process.env.Prefix;
const ownerID = '274298631517896704';
const token = process.env.Token;

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
    let argresult = args.join(' ')

    //restart - because Heroku is fun
    if(command === `${prefix}restart`) {
        if(message.author.id !== ownerID) {
            message.channel.send('no');
            return}
        message.channel.send('Restarting...');
        console.log(`Restarting ${bot.user.username}`);
        (msg = bot.destroy());
        (() => bot.login(token));
    } else

    if(command === `${prefix}kick`){

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
        // Original code by {TheSourceCode}
    }

    if(command === `${prefix}FUCK`) {
        if(message.author.id !== '419388965238472714') {
            message.channel.send('Oh Yes! Please I love it when you do that! MORE! *moans sexually*', {
                file: './images/unknown (14).png'
            });
        } else {
            message.channel.send('w o t')
        }
        // Why?
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
            // Original code by AgentHi5
        }
    }

    if(command === `${prefix}say`) {
        message.delete(1)
        let botmessage = args.join(' ');
        message.channel.send(botmessage);
        // Original code by AgentHi5.
    }

    if(command === `${prefix}setgame`) {
        let game = args[0];
        let playstatus = args.join(' ').slice(8);
        let listenstatus = args.join(' ').slice(10);
        let watchstatus = args.join(' ').slice(9);
        let streamstatus = args.join(' ').slice(10);
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
        // Original code by AgentHi5.
    }

    // help - for those people who don't have the code in front of them
    if(command === `${prefix}help`) {
        let helpembed = new Discord.RichEmbed
            .setAuthor(`Help`)
            .setColor(`#4286f4`)
            .addField(`Commands:`, `help - You know about this command.\nrestart - Only the owner of this bot can use this command.\nkick - You will need the "KICK_MEMBERS" permission to kick users.\nFUCK - It's pretty obvious what this command is.\nsetstatus - Sets the bot's status.\nsetgame - Sets the bot's game.`)
            .setFooter(`${message.createdAt} Don't delete this because it was a pain to make -_- `);
        message.channel.send(helpembed);
    }

    // setname - change the bot's name
    if(command === `${prefix}setname`) {
        // ${prefix}setname {name}
        if(message.author.id !== ownerID) {
            message.channel.send('no');
        } else {

        bot.user.setUsername(argresult);
        message.channel.send(`I changed my username to \`${argresult}\``);
        }
        // Original code by AgentHi5
    }
    // owner - To give attention to my selfish owner
    if(command === `${prefix}owner`) {
        if(message.author.id !== '419388965238472714') {
            message.channel.send('This is my owner Xenzai Kansashi', {
                file: './images/Xenzai Kansashi fixed hair.png'
            });
        } else {
            message.channel.send('w o t')
        }
    }







});

bot.login(token)
