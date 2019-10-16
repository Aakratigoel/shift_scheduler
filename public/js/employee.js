$(document).ready(function()
{
    $("#alertDiv").hide();
    var organizaitons;
    $.get("/api/employee", function(data) {
        console.log("Organization : ", data);
        organizations = data;
        var $dropdown = $("#dropdownOrganizations");
        $.each(data, function() {
        $dropdown.append($("<option />").val(this.name).text(this.name));
        });
      })
      $("#loginButton").on("click",function(event)
      {
            event.preventDefault();
            window.open("employee_login.html","_self");
      })
    $("#employeeForm").on("submit",function(event)
    {
        event.preventDefault();
        var newEmployee ={
            Emp_Name : $("#empName").val().trim(),
            Emp_Email: $("#empEmail").val().trim(),
            Emp_Organization :$( "#dropdownOrganizations option:selected" ).text(),
            Emp_NumberOfWorkingDays:$("#empWD").val(),
            Emp_shift_time_start:$("#empTimeStart").val(),
            Emp_shift_time_end:$("#empTimeEnd").val(),
            Emp_password:$("#empPassword").val()
        }
        console.log(newEmployee);
        $.post("/api/employee",newEmployee)
        .then(function(data)
        {
            if(data ==="Already Exists")
            {
                console.log("Already Exists");
                $("#alertDiv2").css("display","block");
                setTimeout(function(){ location.reload(); },1000);
            }
            else{
                console.log("success");
                $("#alertDiv").show();
                setTimeout(function(){ window.open("/employeeLogin","_self") }, 1000);
            }
            

        })
        
    });
})

