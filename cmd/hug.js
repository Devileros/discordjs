module.exports = {
	name: 'обнять',
	description: 'Обнять какого-либо пользователя.',
	execute(message, args) {

		let user = message.mentions.users.first();
		const hugGIF = [
			"https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
			"https://i.imgur.com/nrdYNtL.gif",
			"http://66.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
			"https://i.gifer.com/Ulna.gif"
		];
		
		const embed = {
			embed: {
				color: 4289797,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} обнимает ${user} (￣▽￣)`,
				image: {
				  url: hugGIF[Math.floor(Math.random() * hugGIF.length)]
				}
			}
		};

		if(message.author.id == user.id) return message.delete(200);
		if(message.author.bot) return message.delete(200);
		if(user.bot) return message.delete(200);
		message.channel.send(embed);
	},
};