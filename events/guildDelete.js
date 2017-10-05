exports.run = (client, guild) => {
    client.settings.guilds.destroy(guild)
    if (guild.forceLeave) return
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users on ${client.guilds.size} servers`)
    var uTb = client.funcs.usersToBots(guild.members)
    var embed = new client.methods.Embed()
        .setAuthor('Guild Left ' + guild.name + ' - ' + guild.id)
        .addField('Owner', `${guild.owner.user.tag} [${guild.owner.user.id}]`)
        .addField('Users', uTb[0], true)
        .addField('Bots', uTb[1], true)
        .setColor(0x410074)
        .setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`)
    client.funcs.addCase.sl(client, embed)
}
