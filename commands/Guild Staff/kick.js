exports.run = async(client,msg, [dry ,user, ...reason]) => {
    var embed = new client.methods.Embed()
        .setColor(client.funcs.hex())
        .setTitle('Kick')
        .addField('Member', user.tag)
        .addField('Reason', reason.join(' '))
        .setFooter(`Acting Moderator: ` + msg.author.tag, msg.author.displayAvatarURL({ format: 'jpg', size: 256 }))
    var embed2 = new client.methods.Embed()
        .setColor(client.funcs.hex())
        .setTitle('Kicked from ' + msg.guild.name)
        .addField('Reason', reason.join(' '))
        .setFooter(`Acting Moderator: ` + msg.author.tag, msg.author.displayAvatarURL({ format: 'jpg', size: 256 }))
    var embed3 = new client.methods.Embed()
        .setDescription(`${user.tag} has been successfully kicked!`)
        .setColor(client.funcs.hex())
    var embed4 = new client.methods.Embed()
        .setDescription(`${user.tag} would have been successfully kicked!`)
        .setColor(client.funcs.hex())        
    if (!client.funcs.many.kickable(client,msg, msg.member, user, msg.guild)) return msg.channel.send('Sorry but you can not kick this person!',{reply:msg.author.id})
    if (!client.funcs.many.kickable(client,msg, msg.guild.member(client.user), user, msg.guild)) return msg.channel.send('Sorry but I can not kick this person!',{reply:msg.author.id})
    
    if (!dry) {
        if (!msg.guild.settings.modlogs) {
            user.send({embed: embed2}) && user.kick(`${msg.author.tag} - ${reason.join(' ')}`) && msg.channel.send({embed: embed3})
        } else if (!msg.guild.settings.modlogs) {
            user.send({embed: embed2}) && user.kick(`${msg.author.tag} - ${reason.join(' ')}`) && msg.channel.send({embed: embed3}) && msg.guild.channels.get(msg.guild.settings.modlogs).send({embed})
        }
    } else return msg.channel.send({embed: embed4})
    
}
exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 2,
    botPerms: [],
};
exports.help = {
    name: "kick",
    description: "Allows you no kick a guild member",
    usage: "[-t:literal] <user:member> [reason:str] [...]",
    usageDelim: " "
};