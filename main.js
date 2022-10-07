const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('I love Bhagirath');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hey'){
        client.commands.get('hey').execute(message,args); 
    
    } else if(command==='love'){
        client.commands.get('love').execute(message,args);
    } else if(command==='kick'){
        client.commands.get('kick').execute(message,args);
    }
});


client.login(process.env.token);
