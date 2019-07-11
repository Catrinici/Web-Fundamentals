$(document).ready(function() {
    $("#submit").click(function() {
        var first = $("#first_name").val();
        var last = $("#last_name").val();
        var desc = $("textarea").val()

        $(".right").append("<div id = 'card'><p>" + first + " " + last + "</p>Click for description!<p id = 'back'>" + desc + "</p></div>");
        $("#first").val("");
        $("#last").val("");
        $("#desc").val("");
        return false;
    })
    $(document).on("click", "#card", function() {
        $(this).children().toggle();
    })

})