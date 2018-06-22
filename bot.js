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
    }

    // Commands will start here.   
