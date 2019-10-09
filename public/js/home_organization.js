$(document).ready(function()
{
    $("#alertDiv").hide();
    $("#organizationForm").on("submit",function(event)
    {
        event.preventDefault();
    var newOrganization = {
        name : $("#orgName").val().trim()
    }
    $.post("/api/organization", newOrganization)
    // On success, run the following code
    .then(function() {
        console.log("Success");
        $("#alertDiv").show();
        setTimeout(function(){ location.reload(); }, 3000);
    })
});
})