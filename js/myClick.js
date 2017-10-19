define(["jquery"],function(){
	return{
		init:function(obj1,obj2){
			obj1.on("focus",function(){
				obj2.css({display:"block"});
			});
			obj1.on("blur",function(){
				obj2.css({display:"none"});
			});
			obj2.on("click",function(){
				alert("zhong")
				//obj1.val() = $(this).html()
			})
		}
	}
})
