const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_freedb_najib',
    password: 'n96$$UgXds!8VCc',
    database: 'freedb_freedb_sequelize-todo'
});

module.exports = sequelize