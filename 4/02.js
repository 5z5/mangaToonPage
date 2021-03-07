function getRandom(start,end){
    let length = end-start;
    let num = parseInt(Math.random()*length+start);

    return num;
}

$(function () {
    let recFeature = new Array();
    $(".img2").click(function () {
        recFeature[0] = "boy";
        $("#page-content1").css("display","none");
        $("#page-content2").css("display","block");
    });
    $(".img3").click(function () {
        recFeature[0] = "girl";
        $("#page-content1").css("display","none");
        $("#page-content2").css("display","block");
    });
    let span1 = $(".span1");
    for (let i=0;i<span1.length;i++){
        $(span1[i]).attr("index",i);
    }
    let img4 = $(".img4");
    let clickIndex = 0;
    let recSpan = $(".span1")[4];
    $(".span1").click(function () {
        recSpan = this;
        if (clickIndex==Number($(this).attr("index"))){
            return ;
        }
        $(img4[Number($(this).attr("index"))]).attr("src","七夕中文切图/item_bg_selected.png");
        $(img4[clickIndex]).attr("src","七夕中文切图/item_bg_select.png");
        clickIndex = Number($(this).attr("index"));
    });
    $(".img5").click(function () {
        if (recFeature[0]=="girl"){
            $("#ss").attr("src","七夕中文切图/question_2_girl_cn.png");
            $(".span1")[4].innerText = "A. 黑色";
            $(".span1")[5].innerText = "B. 棕色";
            $(".span1")[6].innerText = "C. 绿色";
            $(".span1")[7].innerText = "D. 白色";
        }else {
            $("#ss").attr("src","七夕中文切图/question_2_boy_cn.png");
        }
        $("#page-content2").css("display","none");
        $("#page-content3").css("display","block");
        clickIndex = (Math.floor(clickIndex/4)+1)*4;
    });
    $(".img6").click(function () {
        $("#page-content3").css("display","none");
        $("#page-content4").css("display","block");
        recFeature[1] = recSpan.innerText;
        clickIndex = (Math.floor(clickIndex/4)+1)*4;
    });
    $(".img7").click(function () {
        $("#page-content4").css("display","none");
        $("#page-content5").css("display","block");
        clickIndex = (Math.floor(clickIndex/4)+1)*4;
    });
    $(".img8").click(function () {
        $("#page-content5").css("display","none");
        $("#page-content6").css("display","block");
        clickIndex = (Math.floor(clickIndex/4)+1)*4;
    });
    $(".img9").click(function () {
        $("#page-content6").css("display","none");
        $("#page-content7").css("display","block");
        let ranNum = Math.random();
        if (recFeature[0]=="boy"){
            if (recFeature[1] == "A. lnk black"){
                if (ranNum<0.5){
                    $("#cc").attr("src","七夕中文切图/answer_5_girl_cn.png");
                }
                else {
                    $("#cc").attr("src","七夕中文切图/answer_4_girl_cn.png");
                }
            }
            else if (recFeature[1] == "B. Manga Pink"){
                $("#cc").attr("src","七夕中文切图/answer_2_girl_cn.png");
            }
            else if (recFeature[1] == "C. Sun Blonde"){
                $("#cc").attr("src","七夕中文切图/answer_3_girl_cn.png");
            }else {
                $("#cc").attr("src","七夕中文切图/answer_1_girl_cn.png");
            }
        }else {
            if (recFeature[1]=="A. 黑色"){
                if (ranNum<0.5){
                    $("#cc").attr("src","七夕中文切图/answer_2_boy_cn.png");
                }else {
                    $("#cc").attr("src","七夕中文切图/answer_4_boy_cn.png");
                }
            }else if (recFeature[1] == "B. 棕色"){
                $("#cc").attr("src","七夕中文切图/answer_1_boy_cn.png");
            }else if (recFeature[1] == "C. 绿色"){
                $("#cc").attr("src","七夕中文切图/answer_5_boy_cn.png");
            }else {
                $("#cc").attr("src","七夕中文切图/answer_3_boy_cn.png");
            }
        }
        $(".img1").css("top","5%");
        $(".span2")[0].innerText = getRandom(88,95)+"%";
        $(".span3")[0].innerText = getRandom(3,6)+"%";
        $(".span4")[0].innerText = getRandom(90,95)+"%";
    });
});