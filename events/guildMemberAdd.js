exports.run = (client, member) => {
    var guild = member.guild
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users on ${client.guilds.size} servers`)




    if (client.settingGateway.get(guild.id).joinLeaveLog != null && client.settingGateway.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client.channels.get(client.settingGateway.get(guild.id).joinLeaveLog)
        if (channel.permissionsFor(client.user).has(["READ_MESSAGES", "SEND_MESSAGES"], true)) {

            channel.send(`:white_check_mark: Welcome, ${member.user} to the server! Total members: **${guild.members.size}**`)
        }
    }

    if (client.settingGateway.get(guild.id).dmWelcomeMsg != null && client.settingGateway.get(guild.id).dmWelcomeEnabled === true) {
        var dmWelcomeMessage = client.settingGateway.get(guild.id).dmWelcomeMsg

        member.send(client.funcs.replaceHolders(dmWelcomeMessage, guild, member)).catch(err => {
            console.error(err)
        })
    }
}