// src/models/notification.js
module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Notification.associate = (models) => {
      Notification.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return Notification;
  };
  