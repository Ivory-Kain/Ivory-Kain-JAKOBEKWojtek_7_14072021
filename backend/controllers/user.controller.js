const db = require('../config/db.config.js');
const User = db.user;
const Profile = db.profile;


exports.findAll = (req, res) => {
	User.findAll({
		attributes: [
			['uuid', 'userId'],
			['email', 'email']
		],
		include: [{
			model: Profile,
			attributes: ['fullName', 'job', 'avatarUrl']
		}]
	}).then(users => {
		res.send(users);
	});

};