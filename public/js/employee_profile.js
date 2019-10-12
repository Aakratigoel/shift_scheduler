$(document).ready(function()
{
    var employee;
    $.get("/api/employee_profile", function(data) {
        console.log("Employee : ", data);
        var keys= Object.keys(data.user);
        
      console.log(keys);
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
           console.log(i + " "+keys[i]);
           var empKey = keys[i];
                var $tableData = $("<td>"+data.user[keys[i]]+"</td>");
                $tableDataRow.append($tableData);
            
        }   
        $table.append($tableDataRow);

      })
     
})