module.exports = {
	name: 'mute',
	description: 'выдает мут указанному пользователю.',
	execute(message, args) {
        const ms = require("ms");

        const NoUser = {
            "embed": {
                "description": `:x: ${message.author}, Указанный вами пользователь не найден.`,
                "color": 9776185,
            
                "author": {
                  "name": message.author.username,
                  "icon_url": message.author.avatarURL
                }
            }
        }
        const NoPerms = {
            "embed": {
                "description": `:x: ${message.author}, У вас недостаточно прав.`,
                "color": 9776185,
            
                "author": {
                  "name": message.author.username,
                  "icon_url": message.author.avatarURL
                }
            }
        }
        const NoTime = {
            "embed": {
                "description": `:x: ${message.author}, Вы не указали время, на которое желаете замутить пользователя.`,
                "color": 9776185,
            
                "author": {
                  "name": message.author.username,
                  "icon_url": message.author.avatarURL
                }
            }
        }
        const NoReason = {
            "embed": {
                "description": `:x: ${message.author}, Вы не указали причину, с которой желаете выдать мут.`,
                "color": 9776185,
            
                "author": {
                  "name": message.author.username,
                  "icon_url": message.author.avatarURL
                }
            }
        }
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!user) return message.channel.send(NoUser);

        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(NoPerms);
        let role = message.guild.roles.find(`name`, "Muted");

        let mutetime = args[1];
        if(!mutetime) return message.channel.send(NoTime);
        
        let reason = args.slice(2).join(' ');
        if(!reason) return message.channel.send(NoReason);

        user.addRole(role.id);
        let muteEmbed = {
            "embed": {
                "description": `:scales: Модератор ${message.author} выдал пользователю ${user} мут на **${mutetime}** минут с причиной **${reason}**.`,
                "color": 9776185,
                "footer": {
                  "icon_url": message.guild.iconURL,
                  "text": "Модерация Домик Котика"
                },
                "author": {
                  "name": message.author.username,
                  "icon_url": message.author.iconURL
                }
            }
        }

        message.channel.send(muteEmbed);

        setTimeout(function(){
            user.removeRole(role.id);
        }, ms(mutetime));
	},
};