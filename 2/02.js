var touch = true;           //touch=true为开启触摸滑动
var slideNub;               //轮播图片数量

//窗口大小改变时改变轮播图宽高
$(window).resize(function(){
    $(".slide").height($(".slide").width()*0.56);
});

var imgArr = [];
imgArr[0] = "印尼彩蛋活动页面切图压缩差fb分享切图/小编卡/Chris_tips_id.png";
imgArr[1] = "印尼彩蛋活动页面切图压缩差fb分享切图/小编卡/Edeline_tips_id.png";
imgArr[2] = "印尼彩蛋活动页面切图压缩差fb分享切图/小编卡/Tata_tips_id.png";
imgArr[3] = "印尼彩蛋活动页面切图压缩差fb分享切图/小编卡/Irene_tips_id.png";
imgArr[4] = "印尼彩蛋活动页面切图压缩差fb分享切图/小编卡/Leon_tips_id.png";
var index = 2;
//右滑动
function right(){
    index = (index-1+5)%5;
    $(".img-four").attr("src",imgArr[index]);
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<slideNub;i++){
        if(i==0){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
        }else{
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i-1]);
        }
    }
    imgClickFy();
}

//左滑动
function left(){
    index = (index+1)%5;
    $(".img-four").attr("src",imgArr[index]);
    var fy = new Array();
    for(let i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(let i=0;i<slideNub;i++){
        if(i==(slideNub-1)){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i+1]);
        }
    }
    imgClickFy();
}

//轮播图片左右图片点击翻页
function imgClickFy(){
    $(".slide .img").removeAttr("onclick");
    $(".slide .img2").attr("onclick","left()");
    $(".slide .img4").attr("onclick","right()");
}

//触摸滑动模块
function k_touch() {
    var _start = 0, _end = 0, _content = document.getElementById("slide");
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
    function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
    }
    function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
    }

    function touchEnd(event) {
        if (_end < -70) {
            left();
            _end=0;
        }else if(_end > 70){
            right();
            _end=0;
        }
    }
}

$(function(){
    $('#popWin').css('display','block');
    $('#shelter').css('display','block');
    var shelter = document.getElementById("shelter");
    $("#shelter").click(function () {
        $("#popWin").css('display','none');
        $("#shelter").css('display','none');
    });
    $(".slide").height($(".slide").width()*0.56);
    slideNub = $(".slide .img").size();             //获取轮播图片数量
    for(i=0;i<slideNub;i++){
        $(".slide .img:eq("+i+")").attr("data-slide-imgId",i);
    }

    if(slideNub>3&&slideNub<6){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+1));
        }
    }

    if(touch){
        k_touch();
    }
    imgClickFy();
});