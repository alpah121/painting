var popupCounter = 0;

$(document).mouseleave(function () {
    if (mouseY < 100) {
        if (popupCounter < 1) {
            //alert("Please don't close the tab!");
        }
        popupCounter ++;
    }
});

$("#toggleThis").click(function(){
    $("#diy").fadeOut();
    
});