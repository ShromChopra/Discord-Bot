const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const welcome = require('./welcome');

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for ( const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('BakaetBot is online!');
    welcome(client);
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot){ return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'info') {
        client.commands.get('info').execute(message, args);
    } else if (command === 'ilovebkt') {
        message.channel.send('Bakaet loves you too! <3'); 
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }
    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if(command === 'rules'){
        client.commands.get('rules').execute(message, args);
    } else if (command === 'comms') {
        client.commands.get('comms').execute(message, args);
    } else if (command === 'ihatebkt') {
        message.channel.send('FUCK YOU!'); 
    } else if (command === 'basket') {
        message.channel.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ngqw-5XcyX7NWbPDzIxv5iTZhw5rNiNF6w&usqp=CAU'); 
    }

    client.user.setPresence({
        activity: {
          name: `".help" for help`,
        },
      })

});

client.login('--your key--');

