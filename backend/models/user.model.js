  module.exports = (sequelize, Sequelize) => {
  	const User = sequelize.define('user', {
  		uuid: {
  			type: Sequelize.UUID,
  			defaultValue: Sequelize.UUIDV1,
  			primaryKey: true
  		},
  		fullName: {
  			type: Sequelize.STRING
  		},
  		email: {
  			type: Sequelize.STRING
  		},
  		password: {
  			type: Sequelize.STRING
  		}
  	});

  	return User;
  }