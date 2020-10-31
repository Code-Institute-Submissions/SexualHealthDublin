$(document).ready(function(){

    $(".open").on("click", function() {
        $(".popup-overlay, .popup-content").addClass("active");
    });
    
    $(".close, .popup-overlay").on("click", function() {
        $(".popup-overlay, .popup-content").removeClass("active");
    });

    $(".open").on("click", function(){
        $(".popup, .popup-content").addClass("active");
    });

    $(".close, .popup").on("click", function(){
        $(".popup, .popup-content").removeClass("active");
    });

});