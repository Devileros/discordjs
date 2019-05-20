module.exports = {
	name: 'плакать',
	description: 'Плакать.',
	execute(message, args) {

		const cryGIF = [
			"https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
			"https://i.imgur.com/pls8egF.gif",
			"https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif",
			"https://data.whicdn.com/images/307228077/original.gif"
		];
		
		const embed = {
			embed: {
				color: 10197915,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} плачет. (╥﹏╥)`,
				image: {
				  url: cryGIF[Math.floor(Math.random() * cryGIF.length)]
				}
			}
		};

		if(message.author.bot) return message.delete(200);
		message.channel.send(embed);
	},
};