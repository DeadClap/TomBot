exports.run = (client, member) => {
    var guild = member.guild
    // client.user.setGame(`with ${client.guilds.reduce((a, b) => a + b.memberCount,
    // 0).toLocaleString()} users on ${client.guilds.size} servers`)

    var def = `:white_check_mark: Welcome, ${member.user} to the server! Total members: **${guild.members.size}**`

    if (client.settings.guilds.get(guild.id).joinLeaveLog != null && client.settings.guilds.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client
            .channels
            .get(client.settings.guilds.get(guild.id).joinLeaveLog)
        if (channel.permissionsFor(client.user).has([
            "READ_MESSAGES", "SEND_MESSAGES"
        ], true)) {
            if (client.settings.guilds.get(guild.id).joinMsg != 'default') {
                channel.send(client.funcs.replaceHolders(client.settings.guilds.get(guild.id).joinMsg, guild, member))
            } else {
                channel.send(def)
            }

        }
    }

    if (client.settings.guilds.get(guild.id).dmWelcomeMessage != null && client.settings.guilds.get(guild.id).dmWelcome === true) {
        var dmWelcomeMsg = client
            .settings.guilds
            .get(guild.id)
            .dmWelcomeMessage

        member
            .send(client.funcs.replaceHolders(dmWelcomeMsg, guild, member))
            .catch(err => {
                console.error(err)
            })
    }
    if (client.settings.guilds.get(guild.id).joinRank != null)
        member.addRole(client.settings.guilds.get(guild.id).joinRank).catch(err => client.emit("error", err))
    }
