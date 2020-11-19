module.exports = {
    name: 'help',
    description: "This is the .help command,",

    execute(message,args) {
        message.channel.send({embed: {
            color: 3447003,
            description: "Your registeration phase begins here! \n\nTo register your team, visit **https://forms.gle/SvdjQAssQtKLoeCS6** \n\nAfter completing the form and paying the entry fee,\nkindly notify us on **confirm-your-payment** channel with your **team name** and an **attached screenshot of the payment**!\n\n**.comms** for list of available commands!"
          }});
    }
}