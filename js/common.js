$(document).ready(function(){
    control_mouse();
    load();
    mui();
    ani();
    scroll();
    nav_m();
    detailPage();
    rolling();
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function load(){
    $(window).load(function() {
        setTimeout(function(){
            $('.load').hide();
            $("section").css("display","block");
            $(".rolling_wrap").css("display","block");
        },500);
    });
    // $("body").css("overflow-y","scroll");          
}

function mui(){
    $(".mui").click(function(){
        $(".nav_list").toggleClass("active");
        $(".mui").toggleClass("active");
    });
}

function ani(){ 
    setTimeout(function(){
        $(".title").addClass("active");
        $("header").addClass("inactive");
        $("header").animate({opacity:"1"},200);
        $(".rolling_wrap").animate({opacity:"1"},300);       

        var $top = $(window).scrollTop();
        var $height = $(window).height();
        
            var $target = $("section .inner > ul").eq(0)
            var $target_offset = $target.offset().top;

            if($target_offset - $top < $height){
                $target.children("li:nth-child(3n-2)").delay(100).animate({opacity:"1"},400);
                $target.children("li:nth-child(3n-1)").delay(250).animate({opacity:"1"},400);
                $target.children("li:nth-child(3n)").delay(400).animate({opacity:"1"},400);
            }
    },2000);   

    $(".top").click(function(){
        $("html").animate({scrollTop:0});
    });
}

function scroll(){
    $(window).scroll(function(){        
        var $top = $(window).scrollTop();
        var $height = $(window).height()/1.2;
        var $length = $("section .inner > ul").length;

        for(var i = 0; i < $length; i++){
            var $target = $("section .inner > ul").eq(i)
            var $target_offset = $target.offset().top;

            if($target_offset - $top < $height){
                $target.children("li:nth-child(3n-2)").delay(100).animate({opacity:"1"},400);
                $target.children("li:nth-child(3n-1)").delay(250).animate({opacity:"1"},400);
                $target.children("li:nth-child(3n)").delay(400).animate({opacity:"1"},400);
            }
        }
        
        if($top > 0){
            $(".top").fadeIn();
            $("header").addClass("active");
            $("header img").attr("src","images/logo_bk.png");
        }else{
            $(".top").fadeOut();     
            $("header").removeClass("active");
            $("header img").attr("src","images/logo_w.png");
        }

        $("section").css("background-position-y", - $top * 1.4);
    });
}

function nav_m(){
    if($(window).outerWidth() <= 1023){
        $("header nav ul > li:nth-child(3) > a").click(function(event){
            event.preventDefault(); //a태그 이동 불가
            $(this).parent().children("ol").toggleClass("active");
        });
    }    
}

function detailPage(){    
    $(".thumbnail").click(function(){
        $(".detailPage div").animate({scrollTop:0});
        $(".detailPage").removeClass("active");
        $(this).siblings(".detailPage").addClass("active");
        $("body").css("overflow-y","hidden");        
    });

    $(".detailPage").click(function(){
        $(".detailPage").removeClass("active");
        $("body").css("overflow-y","scroll");
        
    });
    $(".detailPage img").click(function(e){
        e.stopPropagation();
    });
    $(".swiper-button-next").click(function(e){
        e.stopPropagation();
    });
    $(".swiper-button-prev").click(function(e){
        e.stopPropagation();
    });

    $(".detailPage div img").click(function(){
        $(".detailPage div").animate({scrollTop:0});
    });    
}

function rolling( ){
    var $target = $(".rolling_wrap .rolling_target li");
    var $width = $target.width();
    var $length = $target.length;
    $target.parent(".rolling_target").css("width", $width*$length);
    $target.closest(".rolling_inner").css("width",$width*$length*2);
    var $clone = $target.parent(".rolling_target").clone();
    $target.closest(".rolling_inner").append($clone);

    $($target).mouseover(function(){
        $(this).children().attr("src","images/lolling_logo_b.png");
    });
    $($target).mouseleave(function(){
        $(this).children().attr("src","images/lolling_logo_bk.png");
    });
}

