exports.run = async(client,msg, [user, ...reason]) => {
    var addCase = client.funcs.addCase
    var check = client.funcs.many.kickable(client,msg,msg.member,user,msg.guild) 
    
    if (check === true) {
        let test = addCase.ml(client, msg, msg.guild, msg.author, user.user, 'Kick', reason)
            if (test) {
                return user.user.send('You have been kicked from: ' + msg.guild.name + '\nFor: ' + reason.join(' ')).catch(msg.reply('I cannot inform the user.')) && user.kick(`${msg.author.tag} has kicked this user. Reason: ${reason.join(' ')}`) && msg.channel.send({embed: {
                    title: `User Kicked: ${user.user.tag}`
                }})
            } else if (!test) {
                return user.user.send('You have been kicked from: ' + msg.guild.name + '\nFor: ' + reason.join(' ')).catch(msg.reply('I cannot inform the user.')) && user.kick(`${msg.author.tag} has kicked this user. Reason: ${reason.join(' ')}`) && msg.reply('There will not be a modlog entry created for this action\nThere is no modlog channel.' + `\nPlease set one with \`${msg.guild.settings.prefix}conf set modlogs #channel\``) && msg.channel.send({embed: {
                    title: `User Kicked: ${user.user.tag}`
                }})
            }
    } else if (check === false) {
        return msg.channel.send('You have permission, but you are not above the user!', {reply: msg.author.id})
    } else return
    
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