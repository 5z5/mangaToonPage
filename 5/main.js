$(function () {
    $(".btn").click(function () {
        $("#popWin").css("display","block");
        $("#shelter").css("display","block");
    });
    $(".OK").click(function () {
        $("#popWin").css("display","none");
        $("#shelter").css("display","none");
    });
});