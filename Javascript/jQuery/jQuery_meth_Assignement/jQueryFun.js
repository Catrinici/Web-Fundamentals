$(document).ready(function() {
    $("#addclsbtn").click(function() {
        $(".addcls p").addClass("red");
    })
    $("#stbtn").click(function() {
        $("#slidetgl").slideToggle("slow")
    });
    $("#apdbtn").click(function() {
        $(".apd").append("<p>This is a new paragraph!</p>");
    })
    $(".click p").click(function() {
        $(this).slideUp();
    })
    $("#hidebtn").click(function() {
        $(".hsh p").hide();
    });
    $("#showbtn").click(function() {
        $(".hsh p").show();
    })
    $("#tglbtn").click(function() {
        $("#book").toggle(1000);
    })
    $("#tglbtn").click(function() {
        $(".tgl p").toggle();
    })
    $("#sdbtn").click(function() {
        $("#sdbook").slideDown(1000);
    });
    $("#subtn").click(function() {
        $("#sdbook").slideUp(1000);
    })
    $("#fadein").click(function() {
        $("div:hidden:first").fadeIn("slow");
    })
    $("#one,#two,#three").click(function() {
        $(this).fadeOut("slow");
    })
    $(".before p").before("<p>Independence Day!</p>");
    $(".before p").after("<p>July 4th—has been a federal holiday in the United States since 1941</p>");
    $(".htmlcls").html("<h1 class='red'>Hello Again This is an example of .html method </h1>");

});