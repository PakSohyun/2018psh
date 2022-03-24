$(document).ready(function(){
    control_mouse();
    ani();
    mui();
    scroll("section .contact > div h4", 800);
    scroll("section .contact > div p", 800);
});

function control_mouse(){
    $(document).bind("contextmenu", function(e){return false;});  // 마우스 우 클릭 금지
    $(document).bind('selectstart', function() {return false;}); // 드래그 클릭 금지
}

function ani(){ 
    $("section").css("display","block");
    setTimeout(function(){
        $(".tit h3").addClass("active");
    },1000);   
}

function mui(){
    $(".mui").click(function(){
        $("header").toggleClass("active");
        $(".nav_list").toggleClass("active");
        $(".mui").toggleClass("active");
        $("body").toggleClass("active");
    });
}

function scroll(target, numb){ 
    $(window).scroll(function(){       
        var $top = $(window).scrollTop();
        var $offset = ($(target).offset().top) - numb;

        if($offset <= $top){
            $(target).addClass("active");
        }
    });
}