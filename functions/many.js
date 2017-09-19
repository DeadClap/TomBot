exports.kickable = (client, user1, user2, guild) => {
    var role1 = user1.highestRole;
    var role2 = user2.highestRole
    
    return role1.position > role2.position
}