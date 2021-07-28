module.exports = (sequelize, Sequelize) => {
	const Profile = sequelize.define('address', {
	  fullname: {
		  type: Sequelize.STRING
	  },
	  job: {
		  type: Sequelize.STRING
	  },
	  birthday: {
		  type: Sequelize.DATE
	  },
	  description: {
		  type: Sequelize.STRING
	  },
	  avatarUrl: {
		  type: Sequelize.STRING
	  },
	  backgroundUrl: {
		  type: Sequelize.STRING
	  },
	});
	
	return Profile;
}