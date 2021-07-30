module.exports = (sequelize, Sequelize) => {
	const Profile = sequelize.define('profile', {
		fullName: {
			type: Sequelize.STRING
		},	
	
	});

	return Profile;
}