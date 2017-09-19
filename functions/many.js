exports.kickable = (client, msg, user1, user2, guild) => {
    var role1 = user1.highestRole;
    var role2 = user2.highestRole
    
   if (user2.id === guild.ownerID) return false
   return role1.position > role2.postition
}