$(document).ready(function()
{
    $("#loginForm").on("submit",function(event)
    {
        event.preventDefault();
        var empLogin = {
            email: $("#empEmail").val().trim(),
            password:$("#empPassword").val()
        }
        console.log("before the post method");
        $.post("/api/employeeLogin",empLogin).then(function(data)
        {
            console.log(data);
            console.log("success");
        })
        
    });
})

