module.exports = {
	name: 'профиль',
	description: 'Просмотреть свой или чужой профиль',
	execute(message, args) {
        message.channel.send({
            embed: {
                author: {
                    name: message.author.tag,
                    icon_url: message.author.avatarURL
                },
                description: "Это ваш профиль. Здесь вы можете просмотреть различную информацию о вашем аккаунте на сервере",
                color: 587212,
                fields: [
                    {
                        name: "Имя пользователя:",
                        value: `${message.member.displayName}`,
                        inline: true
                    },
                    {
                        name: "Присоеденился к серверу:",
                        value: `${message.member.joinedAtp}`,
                        inline: true
                    }
                ]
            }
        });
	},
};