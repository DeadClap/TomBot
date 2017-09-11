module.exports = (client, guild, announcement) => {
    var ann = announcement.join(' ')
    if (guild.settings.announceChannel) {
        var channel = guild.channels.get(guild.settings.announceChannel)
        console.log(`[CHANNEL: ${channel.name}`)
        return channel.send(ann)
    } else if (!guild.settings.announceChannel){
        console.log(`[DM: ${guild.owner.user.username}/${guild.owner.nickname}]`)
        return guild.owner.send(`[${guild.name}] You are recieving this because you own the guild prefixed and it does not have an announceChannel set in the config. Use \`\`\`t.conf set announceChannel \#channel\`\`\`\n${ann}`)
    }
}