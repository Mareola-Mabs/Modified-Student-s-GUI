/*jQuery Initialization*/
$('document').ready(()=>{

    // For Local Storage Item
    $(".name_info").text(localStorage.getItem("account"))

    // For deleting the tables
    $(".del_one").on("click", ()=>{
        $(".del_one").text("Please Wait...")
        setTimeout(()=>{
            $(".ass_one").css("display", "none")
        }, 500)
    })
    $(".del_two").on("click", ()=>{
        $(".del_two").text("Please Wait...")
        setTimeout(()=>{
            $(".ass_two").css("display", "none")
        }, 500)
    })
    $(".del_three").on("click", ()=>{
        $(".del_three").text("Please Wait...")
        setTimeout(()=>{
            $(".ass_three").css("display", "none")
        }, 500)
    })
    $(".del_four").on("click", ()=>{
        $(".del_four").text("Please Wait...")
        setTimeout(()=>{
            $(".ass_four").css("display", "none")
        }, 500)
    })
    $(".del_five").on("click", ()=>{
        $(".del_five").text("Please Wait...")
        setTimeout(()=>{
            $(".ass_five").css("display", "none")
        }, 500)
    })
    $(".del_all").on("click", ()=>{
        let text = "Are you Sure in Deleting All Assignments!\nOnce Deletion is Made, There is no Recovery.";
        if (confirm(text) == true){
            $(".ass_one").css("display", "none")
            $(".ass_two").css("display", "none")
            $(".ass_three").css("display", "none")
            $(".ass_four").css("display", "none")
            $(".ass_five").css("display", "none")
        }
        else{
            
        }
    })














})
/*End of jQuery Initialization*/

var not_available = document.querySelectorAll(".views.not_available")
not_available.forEach(not__available => not__available.addEventListener("mouseenter", ()=>{
    not__available.innerText ="Not Available";
    not__available.addEventListener("mouseleave", ()=>{
        not__available.innerText = "View Submissions"
    })
}))