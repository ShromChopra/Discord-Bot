module.exports = {
    name: 'comms',
    description: "This is the list of all the commands available",

    execute(message,args) {
        message.channel.send({embed: {
            color: 3447003,
            description: "This is the list of all the commands available by *BakaetBot*.\n\n1) **.help**: Guides on how to get started with registration.\n\n2) **.rules**: Rules on behavior with respect to server.\n\n3) **.info**: Information regarding organizers of Bakaet Tournament.\n\n4) **.ilovebkt**: To show your love towards BAKAET Clan!"
          }});
    }
}