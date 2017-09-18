//滚动插件
(function($){
	$.fn.extend({
		Scroll:function(opt,callback){
				//参数初始化
				if(!opt) var opt={};
				var _this=this.eq(0).find("ul:first");
				var lineH=_this.find("li:first").height(), //获取行高
					line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
					speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
					timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
				if(line==0) line=1;
				var upHeight=0-line*lineH;
				//滚动函数
				scrollUp=function(){
						_this.animate({
								marginTop:upHeight
						},speed,function(){
								for(i=1;i<=line;i++){
										_this.find("li:first").appendTo(_this);
								}
								_this.css({marginTop:0});
						});
				}
				//鼠标事件绑定
				_this.hover(function(){
						clearInterval(timerID);
				},function(){
						timerID=setInterval("scrollUp()",timer);
				}).mouseout();
		}       
	});
})(jQuery);
	
$(document).ready(function(){
	//顶部报名框
	if($('body').hasClass('page-home')) {
    
	} else {
		$(".header-panel").hover(function(){
			$(".header-panel-box").css("display","block");
		},function(){
			$(".header-panel-box").css("display","none");
		});
	}
    
	/* 
	 * rollbar
	 * ====================================================
	*/
	var scroller = $('.rollbar .go-top')
	$(window).scroll(function() {
	    var h = document.documentElement.scrollTop + document.body.scrollTop;
	    h > 200 ? scroller.fadeIn() : scroller.fadeOut();
	})  
})
//品牌城市切换函数
function tabSwift(menu, cnt) {
    $(menu).find('li').click(function () {
        var o = $(this);
        if (o.hasClass('no-choose')) return;
        var i = o.index();
        o.siblings().removeClass('on');
        o.addClass('on');
        var oparent = o.parent().parent().parent();
        oparent.find(cnt).children().hide();
        oparent.find(cnt + i).show();
    })
    $(cnt).find('li').click(function () {
        $(cnt).find('li').removeClass('on');
        $(this).addClass('on');
//      $('.m-title .all').hide();
//      $('.m-title .result').show();
//      brandID = $(this).attr("data");
//      getHisActList()
    });
}

// 热门车型切换
function tabSwitch(menu,cntBox,classname) {
        $(menu+" li").mouseenter(function () {
        var o = $(this);
        var i = o.index();
        o.siblings().removeClass('on');
        o.addClass('on');
        var oparent = o.parent().parent();
        oparent.find(cntBox).children().hide();
        oparent.find(classname + i).show();
    })
}

function scrollTo(name, add, speed) {
    if (!speed) speed = 300
    if (!name) {
        $('html,body').animate({
            scrollTop: 0
        }, speed)
    } else {
        if ($(name).length > 0) {
            $('html,body').animate({
                scrollTop: $(name).offset().top + (add || 0)
            }, speed)
        }
    }
}