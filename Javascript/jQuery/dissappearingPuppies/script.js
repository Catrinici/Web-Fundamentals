$(document).ready(function() {
    $("img").click(function() {
        $(this).fadeOut("slow");
    });
    $("#restorebtn").click(function() {
        $("img").fadeIn("slow");
    })

})