/*!
 * glidejs
 * Version: 2.0.9
 * Glide is a responsive and touch-friendly jQuery slider. Based on CSS3 transitions with fallback to older broswers. It's simple, lightweight and fast.
 * Author: Jędrzej Chałubek <jedrzej.chalubek@gmail.com>
 * Site: http://http://glide.jedrzejchalubek.com/
 * Licensed under the MIT license
 */

!function(a,b,c,d){var e=function(a,b){function c(){}var d;return c.prototype.make=function(c){return b.Run.canProcess()?(d="undefined"!=typeof c?parseInt(c):0,this[a.options.type](),this):b.Arrows.disable()},c.prototype.after=function(b){return setTimeout(function(){b()},a.options.animationDuration+20)},c.prototype.slider=function(){var c=a[a.size]*(a.current-1),e=b.Clones.shift-a.paddings;b.Run.isStart()?(e=a.options.centered?Math.abs(e):0,b.Arrows.disable("prev")):b.Run.isEnd()?(e=a.options.centered?Math.abs(e):Math.abs(2*e),b.Arrows.disable("next")):(e=Math.abs(e),b.Arrows.enable()),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,c-e-d)})},c.prototype.carousel=function(){var c,e=a[a.size]*a.current;c=a.options.centered?b.Clones.shift-a.paddings:b.Clones.shift,b.Run.isOffset("<")&&(e=0,b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]*a.length+c)})})),b.Run.isOffset(">")&&(e=a[a.size]*a.length+a[a.size],b.Run.flag=!1,this.after(function(){a.track.css({transition:b.Transition.clear("all"),transform:b.Translate.set(a.axis,a[a.size]+c)})})),a.track.css({transition:b.Transition.get("all"),transform:b.Translate.set(a.axis,e+c-d)})},c.prototype.slideshow=function(){a.slides.css("transition",b.Transition.get("opacity")).eq(a.current-1).css("opacity",1).siblings().css("opacity",0)},new c},f=function(a,b){function c(){}return c.prototype.instance=function(){return{current:function(){return a.current},go:function(a,c){b.Run.pause(),b.Run.make(a,c),b.Run.play()},jump:function(a,c){b.Transition.jumping=!0,b.Animation.after(function(){b.Transition.jumping=!1}),b.Run.make(a,c)},move:function(a){b.Transition.jumping=!0,b.Animation.make(a),b.Transition.jumping=!1},start:function(c){b.Run.running=!0,a.options.autoplay=parseInt(c),b.Run.play()},play:function(){return b.Run.play()},pause:function(){return b.Run.pause()},destroy:function(){b.Run.pause(),b.Clones.remove(),b.Helper.removeStyles([a.track,a.slides]),b.Bullets.remove(),a.slider.removeData("glide_api"),b.Events.unbind(),b.Touch.unbind(),b.Arrows.unbind(),b.Bullets.unbind(),a.destroyed=!0,delete a.slider,delete a.track,delete a.slides,delete a.width,delete a.length},refresh:function(){b.Run.pause(),a.collect(),a.setup(),b.Clones.remove().init(),b.Bullets.remove().init(),b.Build.init(),b.Run.make("="+parseInt(a.options.startAt),b.Run.play())}}},new c},g=function(b,c){function d(){this.build(),this.bind()}return d.prototype.build=function(){this.wrapper=b.slider.find("."+b.options.classes.arrows),this.items=this.wrapper.children()},d.prototype.disable=function(a){var d=b.options.classes;return a?void this.items.filter("."+d["arrow"+c.Helper.capitalise(a)]).unbind("click.glide touchstart.glide").addClass(d.disabled).siblings().bind("click.glide touchstart.glide",this.click).bind("mouseenter.glide",this.hover).bind("mouseleave.glide",this.hover).removeClass(d.disabled):this.disableBoth()},d.prototype.disableBoth=function(){this.items.unbind("click.glide touchstart.glide").addClass(b.options.classes.disabled)},d.prototype.enable=function(){this.bind(),this.items.removeClass(b.options.classes.disabled)},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.hover=function(a){if(!c.Events.disabled)switch(a.type){case"mouseleave":c.Run.play();break;case"mouseenter":c.Run.pause()}},d.prototype.bind=function(){this.items.on("click.glide touchstart.glide",this.click).on("mouseenter.glide",this.hover).on("mouseleave.glide",this.hover)},d.prototype.unbind=function(){this.items.off("click.glide touchstart.glide").off("mouseenter.glide").off("mouseleave.glide")},new d},h=function(a,b){function c(){this.init()}return c.prototype.init=function(){this[a.options.type](),this.active(),b.Height.set()},c.prototype.isType=function(b){return a.options.type===b},c.prototype.isMode=function(b){return a.options.mode===b},c.prototype.slider=function(){b.Transition.jumping=!0,a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Transition.jumping=!1},c.prototype.carousel=function(){b.Transition.jumping=!0,b.Clones.shift=a[a.size]*b.Clones.items.length/2-a[a.size],a.slides[a.size](a[a.size]),a.track.css(a.size,a[a.size]*a.length+b.Clones.getGrowth()),this.isMode("vertical")&&b.Height.set(!0),b.Animation.make(),b.Clones.append(),b.Transition.jumping=!1},c.prototype.slideshow=function(){b.Transition.jumping=!0,b.Animation.make(),b.Transition.jumping=!1},c.prototype.active=function(){a.slides.eq(a.current-1).addClass(a.options.classes.active).siblings().removeClass(a.options.classes.active)},new c},i=function(b,c){function d(){this.init(),this.bind()}return d.prototype.init=function(){return this.build(),this.active(),this},d.prototype.build=function(){this.wrapper=b.slider.children("."+b.options.classes.bullets);for(var c=1;c<=b.length;c++)a("<button>",{class:b.options.classes.bullet,"data-glide-dir":"="+c}).appendTo(this.wrapper);this.items=this.wrapper.children()},d.prototype.active=function(){this.items.eq(b.current-1).addClass("active").siblings().removeClass("active")},d.prototype.remove=function(){return this.items.remove(),this},d.prototype.click=function(b){b.preventDefault(),c.Events.disabled||(c.Run.pause(),c.Run.make(a(this).data("glide-dir")),c.Animation.after(function(){c.Run.play()}))},d.prototype.hover=function(a){if(!c.Events.disabled)switch(a.type){case"mouseleave":c.Run.play();break;case"mouseenter":c.Run.pause()}},d.prototype.bind=function(){this.wrapper.on("click.glide touchstart.glide","button",this.click).on("mouseenter.glide","button",this.hover).on("mouseleave.glide","button",this.hover)},d.prototype.unbind=function(){this.wrapper.off("click.glide touchstart.glide","button").off("mouseenter.glide","button").off("mouseleave.glide","button")},new d},j=function(a,b){function c(){this.items=[],this.shift=0,this.init()}var d,e=[0,1];return c.prototype.init=function(){return this.map(),this.collect(),this},c.prototype.map=function(){var a;for(d=[],a=0;a<e.length;a++)d.push(-1-a,a)},c.prototype.collect=function(){var b,c;for(c=0;c<d.length;c++)b=a.slides.eq(d[c]).clone().addClass(a.options.classes.clone),this.items.push(b)},c.prototype.append=function(){var b,c;for(b=0;b<this.items.length;b++)c=this.items[b][a.size](a[a.size]),d[b]>=0?c.appendTo(a.track):c.prependTo(a.track)},c.prototype.remove=function(){var a;for(a=0;a<this.items.length;a++)this.items[a].remove();return this},c.prototype.getGrowth=function(){return a.width*this.items.length},new c},k=function(a,b){function c(){for(var c in b)this[c]=new b[c](a,this)}return new c},l=function(c,d){function e(){this.disabled=!1,this.prevented=!1,this.keyboard(),this.hoverpause(),this.resize(),this.bindTriggers(),this.bindAnchors(),this.bindImages()}var f=a("[data-glide-trigger]");return e.prototype.keyboard=function(){c.options.keyboard&&a(b).on("keyup.glide",function(a){39===a.keyCode&&d.Run.make(">"),37===a.keyCode&&d.Run.make("<")})},e.prototype.hoverpause=function(){c.options.hoverpause&&c.track.on("mouseover.glide",function(){d.Run.pause(),d.Events.trigger("mouseOver")}).on("mouseout.glide",function(){d.Run.play(),d.Events.trigger("mouseOut")})},e.prototype.resize=function(){a(b).on("resize.glide."+c.uuid,d.Helper.throttle(function(){c.destroyed||(d.Transition.jumping=!0,c.setup(),d.Build.init(),d.Run.make("="+c.current,!1),d.Run.play(),d.Transition.jumping=!1)},c.options.throttle))},e.prototype.bindTriggers=function(){f.length&&f.off("click.glide touchstart.glide").on("click.glide touchstart.glide",this.handleTrigger)},e.prototype.handleTrigger=function(b){b.preventDefault();var c=a(this).data("glide-trigger").split(" ");if(!this.disabled)for(var d in c){var e=a(c[d]).data("glide_api");e.pause(),e.go(a(this).data("glide-dir"),this.activeTrigger),e.play()}},e.prototype.bindAnchors=function(){c.track.on("click.glide","a",function(a){this.prevented&&a.preventDefault()}.bind(this))},e.prototype.bindImages=function(){c.track.on("dragstart.glide","img",function(a){this.prevented&&a.preventDefault()}.bind(this))},e.prototype.detachClicks=function(b){return c.track.find("a").each(function(b,c){a(c).attr("data-href",a(c).attr("href")).removeAttr("href")}),this},e.prototype.attachClicks=function(b){return c.track.find("a").each(function(b,c){a(c).attr("href",a(c).attr("data-href")).removeAttr("data-href")}),d.Animation.after(function(){this.prevented=!1}.bind(this)),this},e.prototype.preventClicks=function(){return this.prevented=!0,this},e.prototype.call=function(a){return"undefined"!==a&&"function"==typeof a&&a(this.getParams()),this},e.prototype.trigger=function(a){return c.slider.trigger(a+".glide",[this.getParams()]),this},e.prototype.getParams=function(){return{index:c.current,length:c.slides.length,current:c.slides.eq(c.current-1),slider:c.slider,swipe:{distance:d.Touch.distance||0}}},e.prototype.unbind=function(){c.track.off("click.glide","a").off("dragstart.glide","img").off("keyup.glide").off("mouseover.glide").off("mouseout.glide"),f.off("click.glide touchstart.glide"),a(b).off("keyup.glide").off("resize.glide."+c.uuid)},e.prototype.disable=function(){return this.disabled=!0,this},e.prototype.enable=function(){return this.disabled=!1,this},new e},m=function(a,b){function c(){a.options.autoheight&&a.wrapper.css({transition:b.Transition.get("height")})}return c.prototype.get=function(){var b="y"===a.axis?2*a.paddings:0;return a.slides.eq(a.current-1).height()+b},c.prototype.set=function(b){return!(!a.options.autoheight&&!b)&&a.wrapper.height(this.get())},new c},n=function(a,b){function c(){}return c.prototype.byAxis=function(b,c){return"y"===a.axis?c:b},c.prototype.capitalise=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},c.prototype.now=Date.now||function(){return(new Date).getTime()},c.prototype.throttle=function(a,b,c){var d,e,f,g=this,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:g.now(),h=null,f=a.apply(d,e),h||(d=e=null)};return function(){var k=g.now();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,l<=0||l>b?(h&&(clearTimeout(h),h=null),i=k,f=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),f}},c.prototype.removeStyles=function(a){for(var b=0;b<a.length;b++)a[b].removeAttr("style")},new c},o=function(a,b){function c(){this.running=!1,this.flag=!1,this.play()}return c.prototype.play=function(){var b=this;if(this.canProcess())return(a.options.autoplay||this.running)&&"undefined"==typeof this.interval&&(this.interval=setInterval(function(){b.pause(),b.make(">"),b.play()},this.getInterval())),this.interval},c.prototype.getInterval=function(){return parseInt(a.slides.eq(a.current-1).data("glide-autoplay"))||a.options.autoplay},c.prototype.pause=function(){return(a.options.autoplay||this.running)&&this.interval>=0&&(this.interval=clearInterval(this.interval)),this.interval},c.prototype.isStart=function(){return 1===a.current},c.prototype.isEnd=function(){return a.current===a.length},c.prototype.isOffset=function(a){return this.flag&&this.direction===a},c.prototype.make=function(c,d){var e=this;if(this.direction=c.substr(0,1),this.steps=c.substr(1)?c.substr(1):0,!this.canProcess())return this.stop();switch(a.options.hoverpause||this.pause(),d!==!1&&b.Events.disable().call(a.options.beforeTransition).trigger("beforeTransition"),this.direction){case">":this.isEnd()?(a.current=1,this.flag=!0):">"===this.steps?a.current=a.length:a.current=a.current+1;break;case"<":this.isStart()?(a.current=a.length,this.flag=!0):"<"===this.steps?a.current=1:a.current=a.current-1;break;case"=":a.current=parseInt(this.steps)}b.Height.set(),b.Bullets.active(),b.Animation.make().after(function(){b.Build.active(),d!==!1&&b.Events.enable().call(d).call(a.options.afterTransition).trigger("afterTransition"),a.options.hoverpause||e.play()}),b.Events.call(a.options.duringTransition).trigger("duringTransition")},c.prototype.stop=function(){this.pause()},c.prototype.canProcess=function(){return a.slides.length>1},new c},p=function(b,c){function d(){this.dragging=!1,b.options.touchDistance&&b.track.on({"touchstart.glide":a.proxy(this.start,this)}),b.options.dragDistance&&b.track.on({"mousedown.glide":a.proxy(this.start,this)})}var e;return d.prototype.unbind=function(){b.track.off("touchstart.glide mousedown.glide").off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")},d.prototype.start=function(d){c.Events.disabled||this.dragging||(e="mousedown"===d.type?d.originalEvent:d.originalEvent.touches[0]||d.originalEvent.changedTouches[0],c.Transition.jumping=!0,this.touchStartX=parseInt(e.pageX),this.touchStartY=parseInt(e.pageY),this.touchSin=null,this.dragging=!0,b.track.on({"touchmove.glide mousemove.glide":c.Helper.throttle(a.proxy(this.move,this),b.options.throttle),"touchend.glide touchcancel.glide mouseup.glide mouseleave.glide":a.proxy(this.end,this)}),c.Events.detachClicks().call(b.options.swipeStart).trigger("swipeStart"),c.Run.pause())},d.prototype.move=function(a){if(!c.Events.disabled&&this.dragging){e="mousemove"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var d=parseInt(e.pageX)-this.touchStartX,f=parseInt(e.pageY)-this.touchStartY,g=Math.abs(d<<2),h=Math.abs(f<<2),i=Math.sqrt(g+h),j=Math.sqrt(c.Helper.byAxis(h,g));if(this.touchSin=Math.asin(j/i),this.distance=c.Helper.byAxis(e.pageX-this.touchStartX,e.pageY-this.touchStartY),180*this.touchSin/Math.PI<45&&c.Animation.make(c.Helper.byAxis(d,f)),c.Events.preventClicks().call(b.options.swipeMove).trigger("swipeMove"),c.Build.isMode("vertical")){if(c.Run.isStart()&&f>0)return;if(c.Run.isEnd()&&f<0)return}if(!(180*this.touchSin/Math.PI<45))return;a.stopPropagation(),a.preventDefault(),b.track.addClass(b.options.classes.dragging)}},d.prototype.end=function(a){if(!c.Events.disabled&&this.dragging){var d;e="mouseup"===a.type||"mouseleave"===a.type?a.originalEvent:a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];var f=c.Helper.byAxis(e.pageX-this.touchStartX,e.pageY-this.touchStartY),g=180*this.touchSin/Math.PI;c.Transition.jumping=!1,c.Build.isType("slider")&&(c.Run.isStart()&&f>0&&(f=0),c.Run.isEnd()&&f<0&&(f=0)),d="mouseup"===a.type||"mouseleave"===a.type?b.options.dragDistance:b.options.touchDistance,f>d&&g<45?c.Run.make("<"):f<-d&&g<45?c.Run.make(">"):c.Animation.make(),c.Animation.after(function(){c.Events.enable(),c.Run.play()}),this.dragging=!1,c.Events.attachClicks().disable().call(b.options.swipeEnd).trigger("swipeEnd"),b.track.removeClass(b.options.classes.dragging).off("touchmove.glide mousemove.glide").off("touchend.glide touchcancel.glide mouseup.glide mouseleave.glide")}},new d},q=function(a,b){function c(){this.jumping=!1}return c.prototype.get=function(b){return this.jumping?this.clear("all"):b+" "+a.options.animationDuration+"ms "+a.options.animationTimingFunc},c.prototype.clear=function(b){return b+" 0ms "+a.options.animationTimingFunc},new c},r=function(a,b){function c(){}var d={x:0,y:0,z:0};return c.prototype.set=function(a,b){return d[a]=parseInt(b),"translate3d("+-1*d.x+"px, "+-1*d.y+"px, "+-1*d.z+"px)"},new c},s=function(b,c){var d={autoplay:4e3,type:"carousel",mode:"horizontal",startAt:1,hoverpause:!0,keyboard:!0,touchDistance:80,dragDistance:120,animationDuration:400,animationTimingFunc:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",throttle:16,autoheight:!1,paddings:0,centered:!0,classes:{base:"glide",wrapper:"glide__wrapper",track:"glide__track",slide:"glide__slide",arrows:"glide__arrows",arrow:"glide__arrow",arrowNext:"next",arrowPrev:"prev",bullets:"glide__bullets",bullet:"glide__bullet",clone:"clone",active:"active",dragging:"dragging",disabled:"disabled"},beforeInit:function(a){},afterInit:function(a){},beforeTransition:function(a){},duringTransition:function(a){},afterTransition:function(a){},swipeStart:function(a){},swipeEnd:function(a){},swipeMove:function(a){}};this.options=a.extend({},d,c),this.uuid=Math.floor(1e3*Math.random()),this.current=parseInt(this.options.startAt),this.element=b,this.collect(),this.setup(),this.destroyed=!1,this.options.beforeInit({index:this.current,length:this.slides.length,current:this.slides.eq(this.current-1),slider:this.slider});var s=new k(this,{Helper:n,Translate:r,Transition:q,Arrows:g,Bullets:i,Run:o,Animation:e,Clones:j,Height:m,Build:h,Events:l,Touch:p,Api:f});return s.Events.call(this.options.afterInit),s.Api.instance()};s.prototype.collect=function(){var a=this.options,b=a.classes;this.slider=this.element.addClass(b.base+"--"+a.type).addClass(b.base+"--"+a.mode),this.track=this.slider.find("."+b.track),this.wrapper=this.slider.find("."+b.wrapper),this.slides=this.track.find("."+b.slide).not("."+b.clone)},s.prototype.setup=function(){var a={horizontal:["width","x"],vertical:["height","y"]};this.size=a[this.options.mode][0],this.axis=a[this.options.mode][1],this.length=this.slides.length,this.paddings=this.getPaddings(),this[this.size]=this.getSize()},s.prototype.getPaddings=function(){var a=this.options.paddings;if("string"==typeof a){var b=parseInt(a,10),c=a.indexOf("%")>=0;return c?parseInt(this.slider[this.size]()*(b/100)):b}return a},s.prototype.getSize=function(){return this.slider[this.size]()-2*this.paddings},a.fn.glide=function(b){return this.each(function(){a.data(this,"glide_api")||a.data(this,"glide_api",new s(a(this),b))})}}(jQuery,window,document);


$(document).ready(function(){
	//幻灯
	$('.homeslide').glide({
        type: 'carousel',
		animationDuration: 500,
        startAt: 1,
        afterInit: function (data) {
			$('.homeslide li').height('650')
		}
	});

	//购车方式选择
	var buyTypeBox = $("div.check-type");
	var carbuymode = buyTypeBox.find("span");
    var carBuyModeInput = $("#buy_type");
    carBuyModeInput.val("quankuan");
    carbuymode.on("click",function(){
        carbuymode.removeClass("act");
        $(this).addClass("act");
        var val = $(this).data("value");
    });	
    
    $('#series_select').find('span').click(function () {
        $('#series_select').find('span').removeClass('act');
        $('#series_select').find('input[name="series_id"]').val($(this).data('id'));
        $(this).addClass('act');
        $('#series_select .help-inline').find('em').html($(this).text())
    });

    $('#buy_mode').find('span').click(function () {
        $('#buy_mode').find('span').removeClass('act');
        $('#buy_mode').find('input[name="buy_type"]').val($(this).data('type'));
        $(this).addClass('act');
    });
    
	//参展品牌
    $("#show_brand_more").on("click",function(){
        var brand_more = $("#brand_more");
        if (brand_more.css("display") == "none") {
            brand_more.css("display","block");
            this.innerHTML = '点击隐藏部分参展品牌';
//          $(".show-brand-more").css("display","none");
        } else {
            brand_more.css("display","none");
            this.innerHTML = '点击显示更多参展品牌';
//          $(".show-brand-more").css("display","block");
        }
    });
    
    //参展品牌报名按钮
    var signUp = {
		show: function () {//参展品牌处显示
			$(this).find(".brand-mask,.brand-sign").show();
		},
		hide: function () {//参展品牌处隐藏
			$(this).find(".brand-mask,.brand-sign").hide();
		}
	};
    $(".brand-module li").off("mouseover", signUp.show).on("mouseover", signUp.show);
	$(".brand-module li").off("mouseout", signUp.hide).on("mouseout", signUp.hide);

	//参展品牌报名按钮触发
	var brand_id = 0;
    brand_id = $('#brand_id').val();
    load_series(brand_id);
    $('#brand_list li').click(function () {
        brand_id = $(this).data('id');
        $('#brand_id').val(brand_id);
        load_series(brand_id,1);
        $('html, body').animate({
            scrollTop: $(".baoming-module").offset().top
        }, 500);
    });

    // ROLLBAR
	$('body[class^="brand-"]').append('<div class="rollbar"><div class="rollbar-item" etap="to_top"><i class="fa">&#xe76e;</i></div></div>')

	var scroller = $('.rollbar');
	$(window).scroll(function() {
	    var h = document.documentElement.scrollTop + document.body.scrollTop
	    h > 200 ? scroller.fadeIn() : scroller.fadeOut();
	})

	$('[etap="to_top"]').on("click",function(){
		$('html,body').animate({
            scrollTop: 0
        }, 300)
	})

})


function load_series(brand_id,from_no) {
    if(brand_id==0) return false;
    $.ajax({
        type: "POST",
        url: "/api/getBrandLIst",
        data: {pid:brand_id,type:1},
        success: function(data){
            var html = [];
            html.push('<option value="0">请选择车型</option>');
            $.each(data,function (i,vo) {
                html.push('<optgroup label="'+vo.name+'">');
                $.each(vo.series_list,function (i,series) {
                    html.push('<option value="'+series.id+'">'+series.name+'</option>');
                });
                html.push('</optgroup>');
            });
            $('#form_'+from_no).find('select[name="series_id"]').html(html.join(''));
        }
    });
}

function submit_apply(from_no) {
    var name = $('#form_'+from_no).find('input[name="name"]').val();
    var mobile = $('#form_'+from_no).find('input[name="mobile"]').val();
    var brand_id = $('#form_'+from_no).find('select[name="brand_id"]').val();
    var series_id ;
    var type = from_no==2 ? 1 : $('#form_'+from_no).find('.check-type .act').data('type');

    if($('#form_'+from_no).find('select[name="series_id"]').length){
        series_id = $('#form_'+from_no).find('select[name="series_id"]').val();
    }else {
        series_id = $('#form_'+from_no).find('input[name="series_id"]').val();
    }
	
    if(brand_id==0){
        layer.alert('请选择品牌');
        return false;
    }
    if(series_id==0){
        layer.alert('请选择车型');
        return false;
    }
    if(!name){
        layer.alert('姓名不能为空');
        return false;
    }
    var reg = /^(((13[0-9]{1})|(14[4,7]{1})|(15[0-3,5-9]{1})|(17[0,1,3,5-8]{1})|(18[0-9]{1}))+\d{8})$/;
    if(!mobile){
        layer.alert('手机号不能为空');
        return false;
    }else{
        if(!checkMobile(mobile)){
            layer.alert('手机号错误，请检查后重新填写');
            return false;
        }
    }

    $.ajax({
        type: "POST",
        url: "/api/addOrder",
        data: {truename:name,mobile:mobile,brand_id:brand_id,series_id:series_id,type:type,topic_id:topic_id},
        success: function(data){
            if(data.code==200){
                if(topic_id==0){
                    layer.alert('恭喜您，报名成功', {icon: 1});
                }else{
                    layer.open({
                        type: 1,
                        title: ['恭喜您，报名成功', 'background-color:#004787;color:#fff;'],
                        area: ['660px', '380px'],
                        id: 'topic-signup-success',
                        content: $('#signup-success') //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                    });
                }
                $('input[name="name"]').val('');
                $('input[name="mobile"]').val('');
            }else{
                layer.alert(data.msg);
            }
        }
    });
}

function checkMobile(mobile){
    var reg = /^(((13[0-9]{1})|(14[4,7]{1})|(15[0-3,5-9]{1})|(17[0,1,3,5-8]{1})|(18[0-9]{1}))+\d{8})$/;
    if(reg.test(mobile)){
        return true;
    }else{
        return false;
    }
}