$(document).ready(function(){
    control_mouse();
    main("main .button .next",3200);
    main("main .main_title",3000);
    main("main .sub7_title",3000);
    main("main .bg div",700);
    mo();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function main(target,time){
    setTimeout(function(){
        $(target).addClass("active");
    },time);

    setTimeout(function(){
        $("main .main_title").css("opacity","1")
        $("main .sub7_title").css("opacity","1")
    },1200); 
}

function mo(){
    if($(window).width() < 768){
        $(".main_title img").attr("src","images/_index/tit_m.png");
        $(".sub7_title img").attr("src","images/_sub7/tit_m.png");

        setTimeout(function(){
            $("body").mousemove(function(e){
                var $posX = e.pageX;
                var $posY = e.pageY;
                var $tit_pointX = $(window).width()/20; // width 뒤 숫자는 하단 pos나누는 숫자*2
                var $tit_pointY = $(window).height()/20; // height 뒤 숫자는 하단 pos나누는 숫자*2
                $(".sub7_title").stop().css({"left":"calc(50% - "+ -($tit_pointX-($posX/10)) +"px)", "top":"calc(25% - "+ -($tit_pointY-($posY/10)) +"px)"});
                $(".main_title").stop().css({"left":"calc(50% - "+ -($tit_pointX-($posX/10)) +"px)", "top":"calc(25% - "+ -($tit_pointY-($posY/10)) +"px)"}); 
                                                       //  ↖$(this)값  ↖$(this)    ↖마우스 이동 시 좌표값  
                 // !(posX/10)만 지정했을 때 좌표(0.0) = 모니터 left:0,top:0  ->  tit_point 추가했을 때 좌표(0.0) = 모니터 센터  ->   calc(~%) 추가했을 때 $(this)도 모니터 센터
                var $bg_pointX = $(window).width()/50;  
                var $bg_pointY = $(window).height()/50;
                $(".bg div:first-child").stop().css({"left":"calc(5% - "+ -($bg_pointX-($posX/25)) +"px)", "top":"calc(-10% - "+ -($bg_pointY-($posY/25)) +"px)"});
                $(".bg div:last-child").stop().css({"right":"calc(5% - "+ ($bg_pointX-($posX/25)) +"px)", "bottom":"calc(-13% - "+ ($bg_pointY-($posY/25)) +"px)"});
            });    
        },4200);
    }
}
