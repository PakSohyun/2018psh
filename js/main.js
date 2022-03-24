$(document).ready(function(){
    control_mouse();
    main("main .button .next",3200);
    main("main .main_tit",3000);
    main("main .bg div",700);
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
        $("main .main_tit").css("opacity","1")
    },1200); 

    if($(window).outerWidth() < 768){
        $(".main_tit img").attr("src","images/main_tit_m.png");
    }
}
