module.exports = {
	name: 'злиться',
	description: 'Злиться.',
	execute(message, args) {

		const angerGIF = [
			"https://media.giphy.com/media/lop8rMAJv0VfG/giphy.gif",
			"https://thumbs.gfycat.com/RareFaroffHorseshoebat-size_restricted.gif",
			"https://media1.tenor.com/images/cfbc067a1445d5baa5ca36cc2642a6c4/tenor.gif?itemid=5664724"
		];
		
		const embed = {
			embed: {
				color: 12255249,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} очень зол. :anger:`,
				image: {
				  url: angerGIF[Math.floor(Math.random() * angerGIF.length)]
				}
			}
		};

		if(message.author.bot) return message.delete(200);
		message.channel.send(embed);
	},
};