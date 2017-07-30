exports.run = (client, guild) => {
    client.settingGateway.create(guild.id)
    client.user.setGame(`with ${client.users.size} users on ${client.guilds.size} servers`)
    function usersToBots (members) {
        var u = 0
        var b = 0

        members.forEach(m => {
            if (m.user.bot) b = b + 1
            if (!m.user.bot) u = u + 1
        })
        return [u,b]
    }

    var uTb = usersToBots(guild.members)
    var embed = new client.methods.Embed()
    .setAuthor('New Guild Added ' + guild.name)
    .addField('Owner',`${guild.owner.user.tag} [${guild.owner.user.id}]`)
    .addField('Users', uTb[0], true)
    .addField('Bots', uTb[1], true)
    .setColor(0x410074)
    .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`)
    
    client.guilds.get('332178051154706432').channels.get('340864447037833226').send({embed})
}