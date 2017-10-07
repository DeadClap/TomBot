exports.kickable = (client, msg, user1, user2, guild) => {
   if (!client.funcs.clientHasPerm.guildMember(client, guild,2)) msg.channel.send('I do not have permission kick to users from this server!', {reply: msg.author.id})
   if (!user1.hasPermission(2)) return msg.channel.send('You do not have permission to users from this server!', {reply: msg.author.id})
   var pos1 = user1.highestRole.position
   var pos2 = user2.highestRole.position
   
   if (user1.id === guild.owner.id) pos1 = 1000
   if (user2.id === client.user.id) return msg.channel.send('I cannot kick myself!', {reply: msg.author.id})
   if (user1.id === user2.id) return msg.channel.send('You cannot kick yourself!', {reply: msg.author.id})
   if (user2.id === guild.owner.id) return msg.channel.send('You cannot kick the guild owner!', {reply: msg.author.id})
   if (guild.member(client.user).highestRole.position <= pos2) return msg.channel.send('I have permission, but I am not above the user!', {reply: msg.author.id})
   return pos1 > pos2

}

