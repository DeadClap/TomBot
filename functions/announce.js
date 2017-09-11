module.exports = (client, guild, announcement) => {
    var ann = announcement.join(' ')
    if (guild.settings.announceChannel) {
        var channel = guild.channels.get(guild.settings.announceChannel)
        return channel.send(ann)
    } else if (!guild.settings.announceChannel){
        return guild.owner.send(`[${guild.name}] You are recieving this because you own the guild prefixed and it does not have an announceChannel set in the config. Use \`\`\`t.conf set announceChannel \#channel\`\`\`\n${ann}`)
    }
}