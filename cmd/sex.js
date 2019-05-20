module.exports = {
	name: 'секс',
	description: 'Заняться сексом какого-либо пользователя.',
	execute(message, args) {
		let user = message.mentions.users.first();
		const sexGIF = [
            "https://x.imagefapusercontent.com/u/ron2007/6023902/1460004445/50f7473576e1f4b15bd9224c7dba58f4.gif",
            "https://tbib.org/images/6072/179e30b6b534b290faa3e9eff253dd020e7942d9.gif?6585210",
            "http://xxxpicz.com/xxx/sex-hentai-anime-porn-pics-and-drawn-pictures-hentai-sex-blog-1.gif",
            "https://static.hentai-image.com/upload/20140123/2/1268/43.gif",
		];
		
		const embed = {
			embed: {
				color: 13394797,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} Занялся сексом ${user}. У нас намечается порнуха (+_=)`,
				image: {
				  url: sexGIF[Math.floor(Math.random() * sexGIF.length)]
				}
			}
		};

		if(message.author.id == user.id) return message.delete(200);
		if(message.author.bot) return message.delete(200);
		if(user.bot) return message.delete(200);
		message.channel.send(embed);
	},
};