$(document).ready(function()
{
  $('#datetimepicker1').datetimepicker();
  $('#datetimepicker2').datetimepicker();
    var employee;
    $.get("/api/employee_profile", function(data) {
        var keys= Object.keys(data.user);
        var $table = $(document.createElement('table'));
        $("#employeeDetails").append($table);
        var $tableHeadRow = $("<tr></tr>");
        var $tableDataRow = $("<tr></tr>");
        for(var i =0;i<7;i++)
        {
            
                var $tableHead = $("<th>"+keys[i]+"</th>");
                $tableHeadRow.append($tableHead);
            
        }   
        $table.append($tableHeadRow);

        for(var i =0;i<7;i++)
        {
                var $tableData = $(`<td id="id_${i}">`+data.user[keys[i]]+"</td>");
                // $tableData.attr("id","id_"+i);
                $tableDataRow.append($tableData);
            
        }   
        $table.append($tableDataRow);

      })

      $("#shiftRequest").on("click",function(event)
      {
        event.preventDefault();
        console.log("entered the click of button");
        var shiftRequest = {
            Emp_id:$("#id_0").text(),
            Emp_Name: $("#id_1").text(),
            Emp_Email:$("#id_2").text(),
            Emp_Organization:$("#id_3").text(),
            Shift_Request_Start_Time:$("#sst").val(),
            Shift_Request_End_Time:$("#set").val(),
            Shift_Status:"Pending",
            AcceptedByEmail:"",
            AcceptedByName:""
        }
        console.log("Shift Request:", shiftRequest);
        $.post("/api/employee_profile",shiftRequest)
        .then(function(data)
        {

            console.log("success");
            console.log(data);
            $("#alertDiv").css("display","block");
            setTimeout(function(){ location.reload(); },1500);

        })
      })

      $("#viewRequest").on("click",function(event)
      {
        event.preventDefault();
        window.open("/shiftRequest","_self");
      })
      $("#logOut").on("click",function(event)
      {
        event.preventDefault();
        $.get("/logout",function(data)
        {
          window.open("/","_self");
        })
      })


     
})