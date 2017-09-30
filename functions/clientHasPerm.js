exports.guildMember = (client, guild, perms) => {
    return guild.member(client.user).hasPermission(perms)
}

exports.channel = (client, channel, perms) => {
    return channel.permissionsFor(channel.guild.member(client.user)).has(perms)
}