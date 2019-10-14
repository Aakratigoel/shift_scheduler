module.exports = function(sequelize, DataTypes) {
    var Shift = sequelize.define("Shift", {
      Emp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
        Emp_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        Emp_Email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,   
            }
        },
        Emp_Organization:{
          type: DataTypes.STRING,
          allowNull: false,
        },
        Emp_Request_shift_time_start:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Emp_Request_shift_time_end:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Emp_Request_Status:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
    }
    );
    return Shift;
  };