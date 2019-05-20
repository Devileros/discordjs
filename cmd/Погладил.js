module.exports = {
	name: 'погладить',
	description: 'Погладить какого-либо пользователя.',
	execute(message, args) {
		let user = message.mentions.users.first();
		const patGIF = [
            "https://69.media.tumblr.com/2acbd3b404c30a432afa34c3e3900625/tumblr_pq5p8gYR581th206io1_500.gif",
            "https://69.media.tumblr.com/bc59886c7e8c3dd0855c4f0e42f30a51/tumblr_prao84xJK81th206io1_400.gif",
            "https://69.media.tumblr.com/acab0232bfb5cfd5d2d45e55e9dae898/tumblr_pbxhq7GyIf1th206io1_500.gif",
            "https://66.media.tumblr.com/1c433aeea03d0fcee34c22696ba1307b/tumblr_osl1kmMWL91qbvovho1_540.gif",
            "https://giffiles.alphacoders.com/255/2559.gif",
		];
		
		const embed = {
			embed: {
				color: 13394797,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} погладил ${user}. У нас намечается свидание (+_+)`,
				image: {
				  url: patGIF[Math.floor(Math.random() * patGIF.length)]
				}
			}
		};

		if(message.author.id == user.id) return message.delete(200);
		if(message.author.bot) return message.delete(200);
		if(user.bot) return message.delete(200);
		message.channel.send(embed);
	},
};