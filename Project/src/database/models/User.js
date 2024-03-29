module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        username: {
            type: dataTypes.TEXT
        },
        img: {
            type: dataTypes.TEXT
        },
        role_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        timestamps: false,
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.Role, {
            as: 'role',
            foreignKey: 'role_id'
        });
    }

    return User
};