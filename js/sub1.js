$(document).ready(function(){

    // $(window).load(function() {
    //     $("html").stop().animate({scrollTop:0});
    // });
    control_mouse();
    mui();    
    scroll_init();
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
        $("header").toggleClass("active");
    });
}

function scroll_init(){
    if($(window).outerWidth() >= 1680){
        scroll(".sec_01", 0);
        scroll("main .inner .text p", 800);
        scroll(".about > div .tit h3", 800);
        scroll(".about > div .career > div h4", 800);
        scroll(".about > div .career > div p", 800);
        scroll(".about > div .career > div span", 800);
        scroll(".sec_01 .inner .tit h2", 600);
        scroll(".sec_02 .inner .tit h2", 600);
        scroll(".sec_03 .inner .tit h2", 600);
        scroll(".sec_04 .inner .tit h2", 600);
        scroll(".sec_05 .inner .tit h2", 600);
    }
    if(1023 < $(window).outerWidth() && $(window).outerWidth() < 1680){        
        scroll(".sec_01", 0);
        scroll("main .inner .text p", 550);
        scroll(".about > div .tit h3", 550);
        scroll(".about > div .career > div h4", 550);
        scroll(".about > div .career > div p", 550);
        scroll(".about > div .career > div span", 550);
        scroll(".sec_01 .inner .tit h2", 600);
        scroll(".sec_02 .inner .tit h2", 600);
        scroll(".sec_03 .inner .tit h2", 600);
        scroll(".sec_04 .inner .tit h2", 600);
        scroll(".sec_05 .inner .tit h2", 600);
    }
    if(767 < $(window).outerWidth() && $(window).outerWidth() <= 1023){
        scroll(".sec_01", 0);
        scroll("main .inner .text p", 800);
        scroll(".about > div .tit h3", 800);
        scroll(".about > div .career > div h4", 800);
        scroll(".about > div .career > div p", 800);
        scroll(".about > div .career > div span", 800);
        scroll(".sec_01 .inner .tit h2", 800);
        scroll(".sec_02 .inner .tit h2", 800);
        scroll(".sec_03 .inner .tit h2", 800);
        scroll(".sec_04 .inner .tit h2", 800);
        scroll(".sec_05 .inner .tit h2", 950);
    }
    if($(window).outerWidth() <= 767){
        setTimeout(function(){
            $("main .inner .text p").addClass("active");
        },500)
        scroll(".sec_01", 0);
        scroll(".about > div .tit h3", 400);
        scroll(".about > div .career > div h4", 400);
        scroll(".about > div .career > div p", 400);
        scroll(".about > div .career > div span", 400);
        scroll(".sec_01 .inner .tit h2", 500);
        scroll(".sec_02 .inner .tit h2", 500);
        scroll(".sec_03 .inner .tit h2", 500);
        scroll(".sec_04 .inner .tit h2", 500);
        scroll(".sec_05 .inner .tit h2", 600);
    }
}

function scroll(target, numb){ 
    $(window).scroll(function(){       
        var $top = $(window).scrollTop();
        var $offset = ($(target).offset().top) - numb;
        var $offset1 = $(".sec_01").offset().top;

        if($offset1 > $top){
            $(".sec_01").removeClass("active");
        }
        if($offset <= $top){
            $(target).addClass("active");
        }

        var $offset2 = $(".sec_02").offset().top;
        var $offset3 = $(".sec_03").offset().top;
        var $offset4 = $(".sec_04").offset().top;
        var $offset5 = $(".sec_05").offset().top;
            
        if(767 < $(window).outerWidth() && $(window).outerWidth() >= 1680){
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
        }
        if($(window).outerWidth() <= 767){
            if($offset5 <= $top/0.96){
                $(".sec .inner .numb a").removeClass("active");
                $(".sec .inner .numb #sec_05").addClass("active");
            }else if($offset4 <= $top/0.96){
                $(".sec .inner .numb a").removeClass("active");
                $(".sec .inner .numb #sec_04").addClass("active");
            }else if($offset3 <= $top/0.96){
                $(".sec .inner .numb a").removeClass("active");
                $(".sec .inner .numb #sec_03").addClass("active");
            }else if($offset2 <= $top/0.96){
                $(".sec .inner .numb a").removeClass("active");
                $(".sec .inner .numb #sec_02").addClass("active");
            }else{
                $(".sec .inner .numb a").removeClass("active");
                $(".sec .inner .numb #sec_01").addClass("active");
            }  
        }
    });
}

function numb_click(){
    $(".sec .inner .numb a").click(function(event){
        event.preventDefault(); //a태그 이동 불가
        var $target = ($(this).parent("li")).index();
        var $offset = $(".sec").eq($target).offset().top;

        $("html").stop().animate({scrollTop:$offset},800);
    });
}

function thumbnail(){
    numb0();
    function numb0(){
        for(var i = 1; i <= 16; i++){
            (function(x){
                setTimeout(function(){
                    $("main .inner img").attr("src","images/sub1_thumbnail_"+ x +".jpg");
                },1000*x);
            })(i);
        }
    }
    setInterval(function(){
        numb0();
    },15000);    
}