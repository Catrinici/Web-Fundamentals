$(document).ready(function() {
    $("img").click(
        function() {
            $(this).fadeOut(function() {
                var $temp = $(this).attr('src');
                $(this).attr('src', $(this).attr('data-alt-src'));
                $(this).attr('data-alt-src', $temp);
            });

            $(this).fadeIn();
        },

        function() {
            $(this).fadeOut(function() {
                var $temp = $(this).attr('data-alt-src');
                $(this).attr('data-alt-src', $(this).attr('src'));
                $(this).attr('src', $temp);
            });

            $(this).fadeIn();

        });
})