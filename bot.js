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
          message.channel.send('no');
        return}
      message.channel.send('Anything for you.');
      (msg => client.destroy());
      (() => client.login(settings.token));
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
        if(!message.author.id === '419388965238472714') {
            message.channel.send('Oh yes anything for you ;))))', {
                file = './images/unknown (14).png'
            });
        } else {
            message.channel.send('w o t')
        }

    }
       

});

bot.login(process.env.Token)
