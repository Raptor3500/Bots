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

    if(command === `${prefix}kick`) {
   
        //!kick @unrealism why not
   
        let kUser = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find user!")
        let kReason = args.join(" ").slice(22);
    
        let kickembed = new Discord.RichEmbed()
            .setDescription("~kick~")
            .setColor("#a80b00")
            .addFeild("Kicked User", `${kUser} with ID ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`);

        message.channel.send(kickembed);
   
   return;
   };
       
       

});

bot.login(process.env.Token)
