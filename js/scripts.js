$(function() {  // Handler for .ready() called.
    // Setting interval speed and toggle between pause/play based on click.
    $(".carousel").carousel( { interval: 2000, pause: "false" } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });

    
});
