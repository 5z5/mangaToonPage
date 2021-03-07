$(function () {
    let btn1 = $(".btn1");
    $(btn1[0]).css("top","374px");
    let rec = 0;
    $(btn1[1]).click(function () {
        $(".shelter").css("display","none");
        $(".img4").attr("src","images/team_leader_vi(1).png");
        $(".span4").css("display","block");
        $(".item1").css("padding-bottom","59px");
        if (rec>0){
            $(".shelter1").css("display","block");
            $(".share").css("display","block");
        }
        rec++;
    });
    $(".img2").click(function () {
        $(".shelter1").css("display","block");
        $(".img5").css("display","block");
    });
});