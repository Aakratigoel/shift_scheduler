module.exports = function(sequelize, DataTypes) {
    var Employee = sequelize.define("Employee", {
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
    Emp_NumberOfWorkingDays:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Emp_shift_time_start:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    Emp_shift_time_end:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    Emp_password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    });
    return Employee;
  };
  