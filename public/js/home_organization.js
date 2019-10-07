$(document).ready(function()
{
    $("#organizationForm").on("submit",organizationRegister);

function organizationRegister()
{
    var newOrganization = {
        name : $("#orgName").val().trim()
    }
    $.post("/api/organization", newOrganization)
    // On success, run the following code
    .then(function() {
        console.log("Success");
    });
}
})