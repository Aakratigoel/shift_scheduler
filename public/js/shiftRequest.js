$(document).ready(function(){
    $.get("/api/shift_request", function(data) {
        console.log("shifts data",data);
        var keys= Object.keys(data.s[0]);
        console.log("keys in shift table" + keys);
        var $table = $(document.createElement('table'));
        $("#shiftRequestDetails").append($table);
        var $tableHeadRow = $("<tr></tr>");
   
        for(var i =2;i<=9;i++)
        {
            
                var $tableHead = $("<th>"+keys[i]+"</th>");
                $tableHeadRow.append($tableHead);
            
        }   
        $table.append($tableHeadRow);
        for(var j = 0;j<data.s.length;j++)
        {
            var $tableDataRow = $("<tr></tr>");
            for(var i =2;i<=9;i++)
        {
                var $tableData = $(`<td id="id_${i}">`+data.s[j][keys[i]]+"</td>");
                // $tableData.attr("id","id_"+i);
                $tableDataRow.append($tableData);
                
            
        }  
        $tableDataRow.append(`<input class="acceptRequest btn btn-primary" type="submit" value="Accept" data-email="${data.s[j][keys[3]]}">`); 
        $tableDataRow.append("<br>");
        $table.append($tableDataRow);
        
        }
        $(".acceptRequest").on("click",function(event)
        {
            event.preventDefault();
            var emailToBeUpdated ={
                em :$(this).data("email"),
                rabe: data.ru.Emp_Email,
                rabn: data.ru.Emp_Name
            } ;
            $.ajax({
                method: "PUT",
                url: "/api/shiftRequest",
                data: emailToBeUpdated
              })
                .then(function(data) {
                 console.log("successfully updated");
                 console.log(data);
                });
        })
    

      })
})