module.exports = {
	name: 'пощечина',
	description: 'Дать пощечину какому-либо пользователю.',
	execute(message, args) {
		let user = message.mentions.users.first();
		const slapGIF = [
			"https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
			"https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403",
			"https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
			"https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215",
			"https://data.whicdn.com/images/230128566/original.gif",
			"https://i.gifer.com/UwmX.gif",
		];
		
		const embed = {
			embed: {
				color: 11540260,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} дает пощечину ${user}.`,
				image: {
				  url: slapGIF[Math.floor(Math.random() * slapGIF.length)]
				}
			}
		};

		if(message.author.id == user.id) return message.delete(200);
		if(message.author.bot) return message.delete(200);
		if(user.bot) return message.delete(200);
		message.channel.send(embed);
	},
};