$(document).ready(function(){

    // $(window).load(function() {
    //     $("html").stop().animate({scrollTop:0});
    // });

    control_mouse();
    mui();
    scroll(".sec_01", 0);
    numb_click();
    thumbnail();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}
function mui(){
    $(".mui").click(function(){
        $(".nav_list").toggleClass("active");
        $(".mui").toggleClass("active");
    });
}

function scroll(){ 
    //  [ PC / 스크롤 시 넘버 교체 이벤트 ]    
    $(window).scroll(function(target, numb){       
        var $top = $(window).scrollTop();
        var $offset_01 = ($(target).offset().top) - numb;

        if($offset_01 <= $top){
            $(".sec .inner .numb").addClass("active");
        }else{
            $(".sec .inner .numb").removeClass("active");
        }

        var $offset2 = $(".sec_02").offset().top;
        var $offset3 = $(".sec_03").offset().top;
        var $offset4 = $(".sec_04").offset().top;
        var $offset5 = $(".sec_05").offset().top;
            
        if($offset5 <= $top/0.9){
            $(".sec .inner .numb a").removeClass("active");
            $(".sec .inner .numb #sec_05").addClass("active");
        }else if($offset4 <= $top/0.9){
            $(".sec .inner .numb a").removeClass("active");
            $(".sec .inner .numb #sec_04").addClass("active");
        }else if($offset3 <= $top/0.9){
            $(".sec .inner .numb a").removeClass("active");
            $(".sec .inner .numb #sec_03").addClass("active");
        }else if($offset2 <= $top/0.9){
            $(".sec .inner .numb a").removeClass("active");
            $(".sec .inner .numb #sec_02").addClass("active");
        }else{
            $(".sec .inner .numb a").removeClass("active");
            $(".sec .inner .numb #sec_01").addClass("active");
        }  
    });
}

function numb_click(){
    $(".sec .inner .numb a").click(function(event){
        event.preventDefault(); //a태그 이동 불가
        // var $attr = $(this).attr("href");
        // var $offset = $("." + $attr).offset().top;
        var $target = ($(this).parent("li")).index();
        var $offset = $(".sec").eq($target).offset().top;

        $("html").stop().animate({scrollTop:$offset},800);
    });
}

function thumbnail(){
    numb0();
    function numb0(){
        for(var i = 1; i <= 15; i++){
            (function(x){
                setTimeout(function(){
                    $("main .inner img").attr("src","images/_sub1/thumbnail_"+ x +".jpg");
                },1000*x);
            })(i);
        }
    }
    setInterval(function(){
        numb0();
    },15000);    
}