$(document).ready(function(){
    control_mouse();
    load();
    mui();
    ani();
    scroll();
    rolling();
    detailPage();
    detailPage_slide_init();
    loop_slide();
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
        },500);
    });
}

function mui(){
    $(".mui").click(function(){
        $("header").toggleClass("active");
        $(".nav_list").toggleClass("active");
        $(".mui").toggleClass("active");
        $("body").toggleClass("active");
    });

    if($(window).outerWidth() < 1024){          
        $("header > div nav ul > li:nth-child(3) > a").click(function(event){
            event.preventDefault(); //a태그 이동 불가
            $("header > div nav ul > li:nth-child(3) > div ol").toggleClass("active");
            $("header > div nav ul > li:nth-child(3) > div").toggleClass("active");
        });
    }
}

function ani(){ 
    setTimeout(function(){
        $(".tit h3").addClass("active");
        $(".tit p").addClass("active");
        $(".rolling_wrap").animate({opacity:"1"},300);   
    },1000);   
}

var $work = true;
var $work2 = true;
function rolling(){    
    var i = 1;
    var $length = $(".rolling_wrap .rolling li").length;
    var $width = $(".rolling_wrap .rolling li").width();
    $(".rolling_wrap .rolling").css("width", $length*$width);
    
    $("body").on("mousewheel", function (event) {
        var $top = $(window).scrollTop();
        var $Bottom = $(document).height() - $(window).height() - $(window).scrollTop();
        var $rollTop = ($(".rolling_wrap").offset().top)-1080;
        var $rollBottom = ($(".rolling_wrap").offset().top)+1080;        
        var $mousewheel = event.originalEvent.wheelDelta;
        
            if($work2){
                if($Bottom == 0){
                    $work = false;
                }else{
                    $work = true;
                }
            }
            if($work){                    
                if($rollTop < $top && $top < $rollBottom){                       
                    if($mousewheel == -120){
                        i++;                
                    }if($mousewheel == 120){
                        i--;
                    }; 
                    var $xpos = 50 * i;     
                    
                    $(".rolling_wrap .rolling").css("transform","translateX("+(-$xpos)+"px)"); 
                    $(".rolling_wrap .rolling").css("transform","translateX("+(+$xpos)+"px)");  
                }            
            }
            
    });                 
}

function detailPage(){ 
    $(".thumbnail").click(function(){
        $work = false;
        $work2 = false;
        $(".detailPage div").animate({scrollTop:0});
        $(".detailPage .detailPage_slide_wrap .swiper-wrapper .swiper-slide").animate({scrollTop:0});
        $(".detailPage").removeClass("active");
        $(this).siblings(".detailPage").addClass("active");
        $("body").css("overflow-y","hidden");        
    });

    $(".detailPage").click(function(){
        $work = true;
        $work2 = true;
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

function detailPage_slide_init(){
    detailPage_slide(".detailPage_slide_wrap1",".next1",".prev1");
    detailPage_slide(".detailPage_slide_wrap2",".next2",".prev2");
    detailPage_slide(".detailPage_slide_wrap3",".next3",".prev3");
    detailPage_slide(".detailPage_slide_wrap4",".next4",".prev4");
    detailPage_slide(".detailPage_slide_wrap5",".next5",".prev5");
    detailPage_slide(".detailPage_slide_wrap6",".next6",".prev6");
    detailPage_slide(".detailPage_slide_wrap7",".next7",".prev7");
    detailPage_slide(".detailPage_slide_wrap8",".next8",".prev8");
    detailPage_slide(".detailPage_slide_wrap9",".next9",".prev9");
    detailPage_slide(".detailPage_slide_wrap10",".next10",".prev10");
    detailPage_slide(".detailPage_slide_wrap11",".next11",".prev11");
    detailPage_slide(".detailPage_slide_wrap12",".next12",".prev12");
    detailPage_slide(".detailPage_slide_wrap13",".next13",".prev13");
    detailPage_slide(".detailPage_slide_wrap14",".next14",".prev14");
    detailPage_slide(".detailPage_slide_wrap15",".next15",".prev15");
    detailPage_slide(".detailPage_slide_wrap16",".next16",".prev16");
    detailPage_slide(".detailPage_slide_wrap17",".next17",".prev17");
    detailPage_slide(".detailPage_slide_wrap18",".next18",".prev18");
    detailPage_slide(".detailPage_slide_wrap19",".next19",".prev19");
    detailPage_slide(".detailPage_slide_wrap20",".next20",".prev20");
    detailPage_slide(".detailPage_slide_wrap21",".next21",".prev21");
    detailPage_slide(".detailPage_slide_wrap22",".next22",".prev22");
    detailPage_slide(".detailPage_slide_wrap23",".next23",".prev23");
    detailPage_slide(".detailPage_slide_wrap24",".next24",".prev24");
    detailPage_slide(".detailPage_slide_wrap25",".next25",".prev25");
    detailPage_slide(".detailPage_slide_wrap26",".next26",".prev26");
    detailPage_slide(".detailPage_slide_wrap27",".next27",".prev27");
    detailPage_slide(".detailPage_slide_wrap28",".next28",".prev28");
    detailPage_slide(".detailPage_slide_wrap29",".next29",".prev29");
    detailPage_slide(".detailPage_slide_wrap30",".next30",".prev30");
    detailPage_slide(".detailPage_slide_wrap31",".next31",".prev31");
    detailPage_slide(".detailPage_slide_wrap32",".next32",".prev32");
    detailPage_slide(".detailPage_slide_wrap33",".next33",".prev33");
    detailPage_slide(".detailPage_slide_wrap34",".next34",".prev34");
    detailPage_slide(".detailPage_slide_wrap35",".next35",".prev35");
    detailPage_slide(".detailPage_slide_wrap36",".next36",".prev36");
}

function detailPage_slide($target1, $target2, $target3){
    if($(window).outerWidth() >= 1024){  
        var swiper = new Swiper($target1, {
            slidesPerView: 1,
            spaceBetween: 0,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: $target2,
                prevEl: $target3,
              },
        });
    }
    if(768 <= $(window).outerWidth() && $(window).outerWidth() < 1024){      
        var swiper = new Swiper($target1, {
            slidesPerView: 1,
            spaceBetween: 0,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: $target2,
                prevEl: $target3,
              },
        });
    }
    if($(window).outerWidth() < 768){  
        var swiper = new Swiper($target1, {
            slidesPerView: 1,
            spaceBetween: 0,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: $target2,
                prevEl: $target3,
              },
        });
    }
}

function loop_slide(){
    if($(window).outerWidth() >= 1024){          
        var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 3,
            spaceBetween: 80,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true, 
            autoplay: {
              delay: 1800,
              disableOnInteraction: false,
            },
        });    
    }
    if(768 <= $(window).outerWidth() && $(window).outerWidth() < 1024){          
        var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 2,
            spaceBetween: 40,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true, 
            autoplay: {
              delay: 1800,
              disableOnInteraction: false,
            },
        });
    }
    if($(window).outerWidth() < 768){          
        var swiper = new Swiper(".slide_wrap", {
            slidesPerView: 1,
            spaceBetween: 24,
            observer:true, 
            observeParent:true, 
            centeredSlides: true,
            loop: true, 
            autoplay: {
              delay: 1800,
              disableOnInteraction: false,
            },
        });
    }
}