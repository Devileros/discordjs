module.exports = {
    name: 'информация',
    description: 'Просмотреть свой или чужой профиль',
    execute(message, args) {
        message.channel.send({
             "embed": {
    "title": "Правила Сервера",
    "description": "",
    "color": 12289325,
    image: {
        url: "https://s8.hostingkartinok.com/uploads/images/2016/03/e895c93c4e1d135f5587ebf5ca9caba9.gif"
    }
  }
            });
    },
};