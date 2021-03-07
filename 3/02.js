function proportion(obj,gold) {
    var rec = gold/6000*0.53*100+"%";
    obj.style.width = rec;
}

$(function () {
    var img4 = $(".img4");
    for (let i=0;i<img4.length;i++){
        $(img4[i]).attr("index",i);
    }
    let rec;
    $(".img4").click(function () {
        rec = this;
        $(".span4").text("0");
        $("#popWin").css("display","block");
        $("#shelter").css("display","block");
    });
    $(".img8").click(function () {
        $("#popWin").css("display","none");
        $("#shelter").css("display","none");
        if ($(rec).attr("index")=="0"){
            let beforeValue = Number($(".j1").text());
            let increaseValue = Number($(".span4").text());
            $(".j1").text(beforeValue+increaseValue);
        }else if ($(rec).attr("index")=="1"){
            let beforeValue = Number($(".j2").text());
            let increaseValue = Number($(".span4").text());
            $(".j2").text(beforeValue+increaseValue);
        }else {
            let beforeValue = Number($(".j3").text());
            let increaseValue = Number($(".span4").text());
            $(".j3").text(beforeValue+increaseValue);
        }
    });
    var img7 = $(".img7");
    for (let i=0;i<img7.length;i++){
        $(img7[i]).attr("index",i);
    }
    img7.click(function () {
        if ($(this).attr("index")=="0"){
            $(".span4").text("10");
        }else if ($(this).attr("index")=="1"){
            $(".span4").text("100");
        }else {
            $(".span4").text("300");
        }
    });
    var stripOne = $(".k1")[0];
    var stripTwo = $(".k2")[0];
    var stripThree = $(".k3")[0];
    var gold = [];
    gold[0] = Number($(".j1")[0].innerText);
    gold[1] = Number($(".j2")[0].innerText);
    gold[2] = Number($(".j3")[0].innerText);
    gold.sort();
    proportion(stripOne,gold[2]);
    proportion(stripTwo,gold[1]);
    proportion(stripThree,gold[0]);
});