exports.run = (client, member) => {
    var guild = member.guild
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users on ${client.guilds.size} servers`)
    if (!client.settingGateway.get(guild.id).joinLeaveLog && client.settingGateway.get(guild.id).joinLeaveLogEnabled === true) return
    if (!client.settingGateway.get(guild.id).dmWelcomeMsg && client.settingGateway.get(guild.id).dmWelcomeEnabled === true) return 


        if (client.settingGateway.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client.channels.get(client.settingGateway.get(guild.id).joinLeaveLog)
    if (!channel.permissionsFor(client.user).has(["READ_MESSAGES","SEND_MESSAGES"], true)) return

        channel.send(`:white_check_mark: Welcome, ${member.user} to the server! Total members: **${guild.members.size}**`)
}

    if (client.settingGateway.get(guild.id).dmWelcomeEnabled === true) {
        var dmWelcomeMessage = client.settingGateway.get(guild.id).dmWelcomeMsg
        dmWelcomeMessage = dmWelcomeMessage.replace(/\%s/g, guild.name)
        dmWelcomeMessage = dmWelcomeMessage.replace(/\%um/g, member)
        dmWelcomeMessage = dmWelcomeMessage.replace(/\%u/g, member.user.username)
                member.send(dmWelcomeMessage).catch(err => {
            console.error(err)
        })
    }
}