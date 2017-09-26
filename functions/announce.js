module.exports = (client, guild, announcement) => {
    var ann = announcement.join(' ')
    if (guild.settings.announceChannel) {
        var channel = guild.channels.get(guild.settings.announceChannel)
        console.log(`[CHANNEL: ${channel.name} \@ ${guild.name}`)
        return channel.send(ann)
            .catch(e => console.log(`${guild.name} - ${guild.owner.user.username} FAILED to send ANN due to no channel.`))
    } else if (!guild.settings.announceChannel) {
        console.log(`[DM: ${guild.owner.user.username}/${guild.owner.nickname} \@ ${guild.name}]`)
        return guild.owner.send(`[${guild.name}] You are recieving this because you own the guild prefixed and it does not have an announceChannel set in the config. Use \`\`\`\@${client.user.tag} conf set announceChannel \#channel\`\`\`\n${ann}`)
            .catch(e => console.log(`${guild.name} - ${guild.owner.user.username} FAILED to send ANN due to no channel.`))
    }
}
