exports.kickable = (client, msg, user1, user2, guild) => {
   if (!client.funcs.clientHasPerm.guildMember(client, guild,2)) return "Error: Bot Missing Kick Permission"
   if (!user1.hasPermission(2)) return "Error: User Missing Kick Permission"
   var pos1 = user1.highestRole.position
   var pos2 = user2.highestRole.position
   
   if (user1.id === guild.owner.id) pos1 = 1000
   if (user2.id === client.user.id) return "Error: Bot Self Target"
   if (user1.id === user2.id) return "Error: Self Target"
   if (user2.id === guild.owner.id) return "Error: Guild Owner"
   if (guild.member(client.user).highestRole.position === pos2) return "Error: Bot Role Equal With Target"
   if (guild.member(client.user).highestRole.position < pos2) return "Error: Bot Role Lower Than Target"
   return pos1 > pos2

}

exports.addCase = (client, guild, offender, title, reason) => {
   var channel = guild.settings.modlogs ? guild.channels.get(guild.settings.modlogs) : null
   if (channel === null) return "Error: Channel Null"
   var embed = client.methods.Embed()
   .addField('Action', title)
   .addField('Offender', offender.user.tag)
   .addField('Offence', reason.join(' '))
   return channel.send(embed)
}

