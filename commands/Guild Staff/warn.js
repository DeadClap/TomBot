exports.run = async (client,msg,[user, ...reason]) => {
    return msg.channel.send('indev')
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 2,
    botPerms: ["EMBED_LINKS"],
    requiredFuncs: [],
    requiredSettings: ["modlogs"],
}

exports.help = {
    name: 'warn',
    description: 'Allows guild staff to warn a user for misconduct.',
    usage: '<user:mention> <reason:str> [...]',
    usageDelim: ' '
}