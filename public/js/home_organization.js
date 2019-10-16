$(document).ready(function()
{
    $("#alertDiv").hide();
    $("#alertDiv2").hide();
    $("#empRegister").on("click",function(event)
    {
        event.preventDefault();
        window.open("/employee","_self");
    })
    $("#empLogin").on("click",function(event)
    {
        event.preventDefault();
        window.open("/employeeLogin","_self");
    })
    $("#organizationForm").on("submit",function(event)
    {
        event.preventDefault();
    var newOrganization = {
        name : $("#orgName").val().trim()
    }
    $.post("/api/organization", newOrganization)
    // On success, run the following code
    .then(function(data) {
        if(data === "Already Exists")
        {
            $("#alertDiv2").css("display","block");
            setTimeout(function(){ location.reload(); },1500);
        }
        else{
            console.log("Success");
            $("#alertDiv").css("display","block");
            setTimeout(function(){ location.reload(); },1500);
        }
      
    })
});
})