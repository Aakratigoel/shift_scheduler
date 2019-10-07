$(document).ready(function()
{
    $("#loginForm").on("submit",function(event)
    {
        event.preventDefault();
        var empLogin = {
            Emp_Email: $("#empEmail").val().trim(),
            Emp_password:$("#empPassword").val()
        }
        console.log("before the post method");
        $.post("/api/employeeLogin",empLogin.Emp_Email,empLogin.Emp_password).then(function()
        {
            console.log("success");
        })
        
    });
})

