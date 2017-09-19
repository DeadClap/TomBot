exports.kickable = (client, msg, user1, user2, guild) => {
    var role1 = user1.highestRole;
    var role2 = user2.highestRole
   
   if (user2.id === guild.owner.id) {return false} else
   if (user1.id === guild.owner.id) {return true} else
   if (user1.id === user2.id) {return false} else
   return role1.position > role2.position
}