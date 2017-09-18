$(document).ready(function(){
	//幻灯
    $("#banner-flexslider").hover(function() {
        $(".flex-direction-nav li .flex-prev").animate({left: 0},200),
        $(".flex-direction-nav li .flex-next").animate({right: 0},200)
    },function() {
        $(".flex-direction-nav li .flex-prev").animate({left: "-100px"},200),
        $(".flex-direction-nav li .flex-next").animate({right: "-100px"},200)
    });
    $("#banner-flexslider").flexslider({
        animation: "slide",
        controlNav: !0,
        directionNav: !0
    });
    $(".flex-control-nav").css("z-index", 3);
    $(".flex-direction-nav li .flex-prev").animate({left: "-100px"},200);
    $(".flex-direction-nav li .flex-next").animate({right: "-100px"},200);
    
    //报名信息滚动
    $(".signup-list-box").Scroll({line:3,speed:500,timer:4000});
    
    //热门车型切换
    hotType = $(".hotcar-module .hot-type span a");
    indexHotCar = $(".hotcar-module .indexhot");
    hotType.hover(function() {
        indexHotCar.addClass("hide");
        hotType.removeClass("act");
        $(this).addClass("act");
        var num = $(this).closest("span").index();
        0 == num ? indexHotCar.eq(0).removeClass("hide") : 3 == num ? indexHotCar.eq(1).removeClass("hide") : 6 == num ? indexHotCar.eq(2).removeClass("hide") : 9 == num ? indexHotCar.eq(3).removeClass("hide") : 12 == num && indexHotCar.eq(4).removeClass("hide");
    })
    hotType.eq(0).addClass("act");
})