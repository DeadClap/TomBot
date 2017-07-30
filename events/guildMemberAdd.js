exports.run = (client, member) => {
    var guild = member.guild
    client.user.setGame(`with ${client.users.size} users on ${client.guilds.size} servers`)
    if (!client.settingGateway.get(guild.id).joinLeaveLog) return


        if (client.settingGateway.get(guild.id).joinLeaveLogEnabled === true) {
        var channel = client.channels.get(client.settingGateway.get(guild.id).joinLeaveLog)
    if (!channel.permissionsFor(client.user).has(["READ_MESSAGES","SEND_MESSAGES"], true)) return

        channel.send(`:white_check_mark: Welcome, ${member.user} to the server! Total members: **${guild.members.size}**`)
}


}