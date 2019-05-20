module.exports = {
	name: 'радость',
	description: 'Радоваться.',
	execute(message, args) {

		const happyGIF = [
            'https://media.tenor.com/images/d93523c4db7e20254c4dcd512029d51e/tenor.gif',
            'https://thumbs.gfycat.com/ExcitableWarmheartedGuernseycow-size_restricted.gif',
            'https://media1.tenor.com/images/29dc5102d126b8dc3970f71c0a1e99d5/tenor.gif?itemid=5959844',
            'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1482400172-196f76f8d7eb152ae02ab7d0fd7006dc.gif',
            'https://media1.tenor.com/images/4a967984e3517772f0f490c946a7652e/tenor.gif?itemid=5208815'
		];
		
		const embed = {
			embed: {
				color: 14274643,
				"author": {
				  "name": message.author.tag,
				  "icon_url": message.author.avatarURL
				},
				description: `${message.author} радуется!`,
				image: {
				  url: happyGIF[Math.floor(Math.random() * happyGIF.length)]
				}
			}
		};

		if(message.author.bot) return message.delete(200);
		message.channel.send(embed);
	},
};