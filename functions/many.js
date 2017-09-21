exports.kickable = (client, msg, user1, user2, guild) => {
   if (!guild.member(client.user).hasPermission(2)) return "Error: Bot Missing Kick Permission"
   if (!user1.hasPermission(2)) return "Error: User Missing Kick Permission"
   var pos1 = user1.highestRole.position
   var pos2 = user2.highestRole.position
   
   if (user1.id === guild.owner.id) pos1 = 1000
   if (user1.id === user2.id) return "Error: Self Target"
   if (user2.id === guild.owner.id) return "Error: Guild Owner"
   if (guild.member(client.user).highestRole.position < pos2) return "Error: Bot Role Lower Than Target"
   if (user1.id === user2.id) return "Error: Self Target"
   return pos1 > pos2

}