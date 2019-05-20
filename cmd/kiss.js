module.exports = {
	name: 'поцеловать',
	description: 'Поцеловать какого-либо пользователя.',
	execute(message, args) {
		let user = message.mentions.users.first();
		const kissGIF = [
			"https://media1.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
			"https://media1.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
			"https://66.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qHhjYUbASqpHYVw_mDGPwv9pPYk2KzVa_NkiTpUGb3zg4om1mQ"
		];
		
		const embed = {
			embed: {
				color: 13394797,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} целует ${user}. Что же будет дальше? (¬‿¬ )`,
				image: {
				  url: kissGIF[Math.floor(Math.random() * kissGIF.length)]
				}
			}
		};

		if(message.author.id == user.id) return message.delete(200);
		if(message.author.bot) return message.delete(200);
		if(user.bot) return message.delete(200);
		message.channel.send(embed);
	},
};