exports.kickable = (client, msg, user1, user2, guild) => {
   if (!client.funcs.clientHasPerm.guildMember(client, guild,2)) return false
   if (!user1.hasPermission(2)) return false
   var pos1 = user1.highestRole.position
   var pos2 = user2.highestRole.position
   
   if (user1.id === guild.owner.id) pos1 = 1000
   if (user2.id === client.user.id) return false
   if (user1.id === user2.id) return false
   if (user2.id === guild.owner.id) return false
   if (guild.member(client.user).highestRole.position <= pos2) return false
   return pos1 > pos2

}

