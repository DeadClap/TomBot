exports.run = async (client, msg, [user, ...message]) => {
        if (client.config.extraCFG.dmDisabled) return msg.channel.send('Sorry but this is disabled.');
        var channel = client.channels.get('363809453260144650');
        var auth = client.funcs.many.botStaff(client, msg.author);
        var formattu;
        var formattc;
        console.log(auth)
        
        switch (auth) {
                case "Owner": 
                        formattu = `**OWNER** ${msg.author.username}\: ${message.join(' ')}`;
                        formattc = `**OWNER** ${msg.author.username} to ${user.tag}:\n${message.join(' ')}`;
                        break;
                case "Dev":
                        formattu = `**DEV** ${msg.author.username}\: ${message.join(' ')}`;
                        formattc = `**DEV** ${msg.author.username} to ${user.tag}:\n${message.join(' ')}`;
                        break;
                default: 
                        return msg.reply('Testing only') && msg.delete()
        }
        
        console.log(formattc)
        console.log(formattu)
        
        user.send(formattu)
}


exports.conf = {
        enabled: true,
        runIn: ['text', 'dm'],
        aliases: [],
        permLevel: 8,
        botPerms: [],
        requiredFuncs: [],
        requiredSettings: [],
}

exports.help = {
        name: 'dm',
        description: 'Send a user a message, or reply to their comments',
        usage: "<user:user> <message:str> [...]",
        usageDelim: " "
}
