module.exports = {
    name: 'info',
    description: "This command id for information",
    
    execute(message,args) {
        message.channel.send({embed: {
            color: 3447003,
            description: "**Streaming Channel**: https://www.youtube.com/channel/UCKHUZKSBA4Ijqsh428pXobQ\n\n**Bakaet Instagram**: https://www.instagram.com/bakaet.gg/\n\n**Bakaet.psd Instagram**: https://www.instagram.com/bakaet.psd/\n\n**Vkay47 Instagram**: https://www.instagram.com/vkay47gaming/"
          }});
    }

}