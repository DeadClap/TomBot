module.exports = (str, guild, member) => {
    var out = new String()
    out = str.replace(/\%s/g, guild.name)
    out = out.replace(/\%m/g, guild.members.size)
    out = out.replace(/\%um/g, member)
    out = out.replace(/\%u/g, member.user.username)


    return out
}