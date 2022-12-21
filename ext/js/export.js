function tableToExcel(){
    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("table.table"))
}

var editchanges = document.getElementById('editchanges')
editchanges.addEventListener("click", ()=>{
    alert("You can Now Click on a Grade to Edit its Content")
    document.querySelectorAll(".editable").forEach(solo => 
        solo.setAttribute("contenteditable", "true")
        
    )
})
var save = document.getElementById('save')
save.addEventListener("click", ()=>{
    let text1 = "Do You Want to Save the Changes You Have Made!";
        if (confirm(text1) == true){
            document.querySelectorAll(".editable").forEach(solo1 => 
                solo1.setAttribute("contenteditable", "false")
                
            )
        }
        else{
            
        }
    
})