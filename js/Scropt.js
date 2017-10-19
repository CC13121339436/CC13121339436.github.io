define(["jquery"],function(){
	return{
		init:function(){
			$(window).on("scroll",function(){
				var height = 554;
				if( $(window).scrollTop() > height ){
					$("#nav").css({position:"fixed",top:"0"});
					$(".nav-logo").css({display:"none"});
					$(".nav-category").css({display:"block"});
					$(".nav-search").css({marginTop:"10px"});
				}else{
					$("#nav").css({position:"absolute",top:"30px"});
					$(".nav-logo").css({display:"block"});
					$(".nav-category").css({display:"none"});
					$(".nav-search").css({marginTop:"30px"});
				}
			})
		},
		goTop:function(){
			$(window).on("scroll", function(){
			$("body").scrollTop() > 0 || document.documentElement.scrollTop > 0 ? $(".rightBar-top").fadeIn() : $(".rightBar-top").fadeOut()
		}), 
			$(".rightBar-top").on("click", function(){
				$("body, html").animate({
					scrollTop: 0
				}, 500)
			})
		}
	}
})
