$(document).ready(function()
{
    $("#suButton").on("click",function(even)
    {
        event.preventDefault();
        window.open("employee.html","_self");
    })
    $("#loginForm").on("submit",function(event)
    {
        event.preventDefault();
        var empLogin = {
            email: $("#empEmail").val().trim(),
            password:$("#empPassword").val()
        }
        console.log("before the post method");
        $.post("/api/employeeLogin", empLogin).then(function(data)
        {
            window.open("/shifts","_self");
        });
        
    });
})

