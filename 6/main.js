$(function () {
    $(".item2-2").click(function () {
        $(".shelter").css("display","block");
        $(".popWin").css("display","block");
    });
    let popup1 = $(".popup-1");
    for (let i=1;i<popup1.length;i++){
        $(popup1[i]).css("margin-left","8.5%");
    }
    $(".spanCal").click(function () {
        $(".shelter").css("display","none");
        $(".popWin").css("display","none");
    });
});