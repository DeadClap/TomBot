module.exports = (client, guild) => {
    return client.config.extraCFG.bugTesters.includes(guild.owner.id)
}