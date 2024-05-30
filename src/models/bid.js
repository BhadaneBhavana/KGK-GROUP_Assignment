// src/models/bid.js
module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define('Bid', {
      bid_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });
  
    Bid.associate = (models) => {
      Bid.belongsTo(models.User, { foreignKey: 'user_id' });
      Bid.belongsTo(models.Item, { foreignKey: 'item_id' });
    };
  
    return Bid;
  };
  