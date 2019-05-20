const config = require("./config.json");
const Discord = require("discord.js");
const fs = require('fs');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./cmd/${file}`);
	bot.commands.set(command.name, command);
}

bot.on("ready", async () => {
    console.log(`--- Wasteland загружен и готов к работе.`);
});
bot.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'обнять') bot.commands.get('обнять').execute(message, args);
  if (command === 'поцеловать') bot.commands.get('поцеловать').execute(message, args);
  if (command === 'пощечина') bot.commands.get('пощечина').execute(message, args);
  if (command === 'злиться') bot.commands.get('злиться').execute(message);
  if (command === 'плакать') bot.commands.get('плакать').execute(message);
  if (command === 'радость') bot.commands.get('радость').execute(message);
  if (command === 'mute') bot.commands.get('mute').execute(message, args);
  if (command === 'unmute') bot.commands.get('unmute').execute(message, args);
  if (command === 'embed') bot.commands.get('embed').execute(message, args);
  if (command === 'профиль') bot.commands.get('профиль').execute(message, args);
  if (command === 'информация') bot.commands.get('информация').execute(message, args);
  if (command === 'роли') bot.commands.get('роли').execute(message, args);
  if (command === 'погладить') bot.commands.get('погладить').execute(message, args);
  if (command === 'секс') bot.commands.get('секс').execute(message, args);
});
bot.on('voiceStateUpdate', (oldMember, newMember) => {  
  if(newMember.voiceChannelID == "577567480797724673") // 577531193155649536
  {
    newMember.guild.createChannel(`${newMember.displayName}`, {
      type: 'voice'
    }).then( async UserVoiceChannel => {
      UserVoiceChannel.setParent("575040186241646602");
      newMember.setVoiceChannel(UserVoiceChannel);
      UserVoiceChannel.overwritePermissions(newMember, { 
        VIEW_CHANNEL: true,
        SPEAK: true,
        MANAGE_CHANNEL: true
      });
    });
  }
  if(oldMember.voiceChannel)
  {
    if(!oldMember.voiceChannel.members.size)
    {
      if(oldMember.voiceChannelID != "577567480797724673")
      {
        if(oldMember.voiceChannel.parentID == "575040186241646602")
        {
          oldMember.voiceChannel.delete();
        }
      }
    }
  }
});




bot.login(config.token);