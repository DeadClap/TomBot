exports.run = async (client, msg, [user, ...message]) => {
        if (client.config.extraCFG.dmDisabled) return msg.channel.send('Sorry but this is disabled.')
        var channel = client.channels.get('363809453260144650')
        
        
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
