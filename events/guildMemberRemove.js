exports.run = (client, member) => {
    var guild = member.guild
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users on ${client.guilds.size} servers`)

    var def = `:x: ${member.user.tag} has left the server! Total members: **${guild.members.size}**`

    if (client.settingGateway.get(guild.id).joinLeaveLog != null && client.settingGateway.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client.channels.get(client.settingGateway.get(guild.id).joinLeaveLog)
        if (!channel.permissionsFor(client.user).has(["READ_MESSAGES", "SEND_MESSAGES"], true)) return


    }


}