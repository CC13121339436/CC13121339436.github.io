/*
 * 加载配置文件*/
require(["config"],function(){
	//加载jQuery
	require(["jquery","myClick","Scropt","navCard","handover","swiper","Cookie","register-login"],function($,Click,Scroll,nav,handover,mySwiper,Cookie,register_login){
			//写你要执行的代码
			Click.init( $("#searchInput"),$(".nav-search>ul") );
			Scroll.init();
			Scroll.goTop();
			nav.show();
			handover.hand();
			register_login.go();
			register_login.enter();
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 1000,//可选选项，自动滑动
				pagination : ".swiper-pagination",
				paginationType : "bullets",
				paginationClickable : true,
				prevButton:".swiper-button-prev",
				nextButton:".swiper-button-next",
				loop : true,
				autoplayDisableOnInteraction : false
			});
	});
});