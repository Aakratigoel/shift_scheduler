$(document).ready(function(){
    $.get("/api/shift_request", function(data) {
        console.log("shifts data",data);
        var keys= Object.keys(data[0]);
        console.log("keys in shift table" + keys);
        var $table = $(document.createElement('table'));
        $("#shiftRequestDetails").append($table);
        var $tableHeadRow = $("<tr></tr>");
   
        for(var i =2;i<=6;i++)
        {
            
                var $tableHead = $("<th>"+keys[i]+"</th>");
                $tableHeadRow.append($tableHead);
            
        }   
        $table.append($tableHeadRow);
        for(var j = 0;j<data.length;j++)
        {
            var $tableDataRow = $("<tr></tr>");
            for(var i =2;i<=6;i++)
        {
                var $tableData = $(`<td id="id_${i}">`+data[j][keys[i]]+"</td>");
                // $tableData.attr("id","id_"+i);
                $tableDataRow.append($tableData);
                
            
        }  
        $tableDataRow.append("<input class='acceptRequest btn btn-primary' type='submit' value='Accept'>"); 
        $tableDataRow.append("<br>");
        $table.append($tableDataRow);
        
        }
        
    

      })
})