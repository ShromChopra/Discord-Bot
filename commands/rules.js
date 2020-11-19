module.exports = {
    name: 'rules',
    description: "This command id for rules",
    
    execute(message,args) {
        message.channel.send({embed: {
            color: 3447003,
            description: "- Please ask for help in the #help channel.\nWe have a **#chat** channel for free discussion.\n\n- Profanity, although not explicitly disallowed, should not be used to offend, abuse, bully, or otherwise cause distress for other server users.\n\n- No self promotion/promotion of your own servers, if you do wish to enter a partnership, talk to the mods. Even in DMs to people in person, if you are caught, it will incur appropriate action.\n\n- If you are a solo or looking to recruit, kindly use the **#looking-to-recruit** channel only.\n\n- If you have a match, make sure you are on time, if there is any issue, message the admins.\n\n- You need to send your payment screenshot in the **#confirm-your-payment** otherwise your team won't be registered.\n\n- Type **.help** in **#chat** for starting your registeration.\n\n- Type **.comms** for a list of commands in **#chat**!"
          }});
    }

}