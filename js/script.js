$(document).ready(function(){

    $(".dropdownForNotification").on("show.bs.dropdown", function(event){
        $(".notificationSeeAllBtn").show();
    });

    $(".dropdownForNotification").on("hide.bs.dropdown", function(event){
        $(".notificationSeeAllBtn").hide();
    });


    $(".dropdownForRequests").on("show.bs.dropdown", function(event){
        $(".requestsSeeAllBtn").show();
    });

    $(".dropdownForRequests").on("hide.bs.dropdown", function(event){
        $(".requestsSeeAllBtn").hide();
    });


    $(".dropdownForMessages").on("show.bs.dropdown", function(event){
        $(".messagesSeeAllBtn").show();
    });

    $(".dropdownForMessages").on("hide.bs.dropdown", function(event){
        $(".messagesSeeAllBtn").hide();
    });



});
function profileSettings(){
    if ( document.getElementById("profileSettings").style.display = "none") {
        document.getElementById("profileSettings").style.display = "block"
        document.getElementById("languageSettings").style.display = "none"
        document.getElementById("blockingSettings").style.display = "none"
    }
 
}
 function blockingSettings(){
    if ( document.getElementById("blockingSettings").style.display = "none") {
        document.getElementById("blockingSettings").style.display = "block";
        document.getElementById("profileSettings").style.display = "none";
        document.getElementById("languageSettings").style.display = "none"

    
}

}
function languageSettings(){
    if ( document.getElementById("languageSettings").style.display = "none") {
        document.getElementById("languageSettings").style.display = "block";
        document.getElementById("blockingSettings").style.display = "none"
        document.getElementById("profileSettings").style.display = "none";

    
}

}




// if ($("blockingSettings").style.display = "none") {
    //         $("blockingSettings").style.display = "block";
    //         $("profileSettings").style.display = "none";
    //         // $("languageSettings").style.display = "none"
    //     }