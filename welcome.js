module.exports = (client) => {
    const channelId = '778877836898861066' // welcome channel
    const targetChannelId = '777943891534020678' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      console.log("welcome");
      const message = `Hey! Welcome <@${member.id}> to BAKAET Tournament!\n\nPlease check out ${member.guild.channels.cache.get(targetChannelId).toString()}!\n\nType **.help** in **#chat** to begin your registration!`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }