const {DataTypes,Sequelize} = require('sequelize');
module.exports = (sequelize) => {
	const Post = sequelize.define('post', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement:true
		},
		title: {
			type: DataTypes.STRING
		},	
		image: {
			type: DataTypes.BLOB
		},
		user_id: {
			type: DataTypes.STRING
		},
		likes: {
			type: DataTypes.DECIMAL,
			defaultValue: 0
		},
		parent_post_id:{
			type: DataTypes.INTEGER,
			allowNull:true
		}		
	})
	return Post;
}


