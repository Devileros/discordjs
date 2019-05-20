module.exports = {
	name: 'unmute',
	description: 'Размутить указанного пользователя',
	execute(message, args) {
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!user) return message.channel.send({
            embed: {
                description: `${message.author}, указанный вами пользователь не найден.`,
                color: 10561833
            }
        });
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole) return message.channel.send({
            embed: {
                description: `${message.author}, указанный вами пользователь не заглушен.`,
                color: 10561833
            }
        });
        user.removeRole(muterole.id);
        message.channel.send({
            embed: {
                description: `:white_check_mark: ${message.author} снял мут с пользователя ${user}.`,
                color: 4289797
            }
        });
	},
};