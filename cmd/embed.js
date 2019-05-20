module.exports = {
	name: 'embed',
	description: 'Написать Информацию',
	execute(message, args) {
                
        let Color = args[0];
        let Title = args[1];
        let Description = args[2];

        if (Color === "голубой") { Color = "6734767"; } 


        console.log(args[0]);
        message.delete().catch();
        const embed = 
        {
                embed: 
                {
                        color: Color,
                        title: Title,
                        description: Description

                }
        }
        return message.channel.send(embed);
	},
};