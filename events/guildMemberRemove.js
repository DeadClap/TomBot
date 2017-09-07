exports.run = (client, member) => {
    var guild = member.guild
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users on ${client.guilds.size} servers`)

    var def = `:x: ${member.user.tag} has left the server! Total members: **${guild.members.size}**`

    if (client.settings.guilds.get(guild.id).joinLeaveLog != null && client.settings.guilds.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client.channels.get(client.settings.guilds.get(guild.id).joinLeaveLog)
        if (!channel.permissionsFor(client.user).has(3072, true)) return
        if (client.settings.guilds.get(guild.id).leaveMsg != 'default') {
            channel.send(client.funcs.replaceHolders(client.settings.guilds.get(guild.id).leaveMsg, guild, member))
        } else {
            channel.send(def)
        }


    }


}
