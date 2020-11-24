$(function() {
    $(".sub").hide();

    $(".main > li").mouseover(function() {
        $(".sub", this).show();
        $(".sub").css("background-color", "rgba(255, 255, 255, 0.8)");
        $(".dd", this).addClass("add");
    });

    $(".main > li").mouseout(function() {
        $(".sub", this).hide();
        $(".sub").css("background-color", "");
        $(".dd", this).addClass("add");
    });

    
});