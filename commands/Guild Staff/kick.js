exports.run = async(client,msg, [user, ...reason]) => {
    
    var modlog = msg.guild.settings.modlogs ? msg.guild.settings.modlogs : null
    
    
    
    var modmsg = new client.methods.Embed()
    .setAuthor('Kicked: ' + user.user.tag)
    .addField('Reason', reason.join(' '))
    .setTimestamp()
    .setFooter(`Acting Moderator: ${msg.author.tag}`, msg.author.displayAvatarURL({format: 'png', size: 256}))
    .setThumbnail(user.user.displayAvatarURL({format: 'png', size: 256}))

    var umsg = new client.methods.Embed()
    .setAuthor('You were kicked from: ' + msg.guild.name)
    .addField('Reason', reason.join(' '))
    .setTimestamp()
    .setFooter(`By ${msg.author.tag}`, msg.author.displayAvatarURL({format: 'png', size: 256}))
    .setThumbnail(user.user.displayAvatarURL({format: 'png', size: 256}))

    var smsg = new client.methods.Embed()
    .setAuthor('Kicked: ' + user.user.tag)
    .setTimestamp()

    
    var check = client.funcs.many.kickable(client,msg,msg.member,user,msg.guild) 
    // console.log(check)
    if (check === "Error: User Missing Kick Permission") return msg.channel.send('You do not have permission to users from this server!', {reply: msg.author.id})
    if (check === "Error: Bot Missing Kick Permission") return msg.channel.send('I do not have permission kick to users from this server!', {reply: msg.author.id})
    if (check === "Error: Guild Owner") return msg.channel.send('You cannot kick the guild owner!', {reply: msg.author.id})
    if (check === "Error: Self Target") return msg.channel.send('You cannot kick yourself!', {reply: msg.author.id})
    if (check === "Error: Bot Role Lower Than Target") return msg.channel.send('I have permission, but I am not above the user!', {reply: msg.author.id})
    if (check === false) return msg.channel.send('You have permission, but you are not above the user!', {reply: msg.author.id})
    if (check === true) {
        if (modlog !== null) {
            return msg.channel.send(smsg) && modlog.send(modmsg) && user.user.send(umsg) && user.kick(msg.author.tag + ' - ' + reason.join(' '))
        }
    }
    
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
    description: "Allows you to kick a guild member",
    usage: "<user:member> <reason:str> [...]",
    usageDelim: " "
};