module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    }
    });
    return Organization;
  };
  