exports.run = async(client, msg, [user]) => {

    if (!user) var user = msg.member;
    var roleString = user.roles.size >= 2 ? user.roles.sort((a, b) => a.position - b.position || a.id - b.id).map(a => `${a.name}`).slice(1).reverse().join(', ') : 'None'



    var embed = new client.methods.Embed().setColor(user.highestRole.color)
        .setThumbnail(user.user.displayAvatarURL({
            format: 'jpg',
            size: 256
        }))
        .addField('User NAME#TAG', `${user.user.tag}`, true)
    if (user.id === client.owner.id) embed.addField('Is Developer', "Yes", true)
    if (client.config.extraCFG.owners.includes(user.id)) embed.addField('Is Owner', 'Yes', true)
        embed.addField('User ID', user.id)
        .addField('Roles', roleString)
        .addField('Joined Discord', user.user.createdAt.toDateString(), true)
        .addField('Joined The Server', user.joinedAt.toDateString(), true)

    return msg.channel.send({
        embed,
        disableEveryone: true
    });
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["ui", "user"],
    permLevel: 0,
    botPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
};

exports.help = {
    name: "userinfo",
    description: "Displays Info about the tagged user, or yourself if no mention.",
    usage: "[user:member]",
    usageDelim: ""
};
