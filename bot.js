const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

    client.user.setActivity('dir beim kacken zu', { type: 'WATCHING' }).catch(console.error);
})

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "╠●welcome🎉🤗♥");
    if (!channel) return;

    channel.send(`Hey ${member} , welcome to Team lit :tada::hugging: please read the rules}`)
});

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'application':
            message.channel.sendMessage('https://forms.gle/PKnwxQTUCXywRfQaA')       
            break;

        case 'website':
            message.channel.sendMessage('coming soon')
            break;

        case 'bewerbung':
            message.channel.sendMessage('https://forms.gle/9uFMfTDzf4JJfa3A9')
            break;

        case 'clear':
            if (!args[1]) return message.reply('Gib es richtig ein du Kek')
            if(message.member.roles.find(r => r.name === "lit Owner")){
            message.channel.bulkDelete(args[1]);
        } else {
            return message.channel.send('DU MIESER HARALD DARFST DAS NICHT')
    }
            break;

        case "say":
            message.delete()
            {
            if(message.member.roles.find(r => r.name === "lit Owner")){
                message.channel.sendMessage((message.content.replace('!say ', '')));
                } else {
                    return message.channel.send('DU MIESER HARALD DARFST DAS NICHT')
            }               
            };
            break;
    }

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTg4MDM4NTg5NDE4MzA3NjMy.XQELJQ.Szyl2LrCrSLI7YU9mtduukd2Sb0);//where BOT_TOKEN is the token of our bot
