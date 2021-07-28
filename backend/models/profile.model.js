module.exports = (sequelize, Sequelize) => {
	const Profile = sequelize.define('profile', {
		fullName: {
		  type: Sequelize.STRING
	  },
	  job: {
		  type: Sequelize.STRING
	  },
	  avatarUrl: {
		  type: Sequelize.STRING
	  }
	});
	
	return Profile;
}