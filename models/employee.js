var bcrypt = require("bcrypt-nodejs");
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
    
    Employee.prototype.validPassword = function(password){
        console.log("proto passwprd" + password,this.Emp_password);
        if(this.Emp_password != null) {
            return bcrypt.compareSync(password, this.Emp_password);
        } else {
            return false;
        }
        
    };
    Employee.addHook("beforeCreate",function(user)
    {
        console.log("User password" + user.password,user.Emp_password);
        user.password = bcrypt.hashSync(user.password,bcrypt.genSaltSync(10),null);
    });
    return Employee;
  };
  