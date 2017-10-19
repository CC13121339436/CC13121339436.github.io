define(["jquery","Cookie"],function(){
	return{	
		go:function(){
			$(function(){
					//跳转登录页面
				$(".account-enter").on("click",function(){
					location.href="login.html";
				})
				/*//cooki
					$(".account-btn").click(function(){
			      		var username=$("input[name=userName]").val();
			      		var userpwd=$("input[name=password]").val();
			      		var d=new Date();
			      		d.setDate(d.getDate()+2);
			      		document.cookie="uname="+username+";expires="+d;
			      		document.cookie="upwd="+userpwd+";expires="+d;
			      		console.log("成功存cooki")
			      	})*/
			
				//用户名验证
				var flagName = null;
				$("input[name=userName]").on("blur",function(){
					var obj = $(".userName");
					var userName = $(this).val();
					var reg=/^\d{11}$/;
					if(userName==""){
						obj.text("请输入手机号");
						obj.show();
						flagName = false;
					}else if(!reg.test(userName)){
						obj.text("手机号格式错误");
						obj.show();
						flagName = false;
					}else{
						obj.hide();
						flagName = true;
					}
				});
				$("input[name=userName]").on("focus",function(){
					var obj = $(".userName");
					obj.hide();
				});
				//短信验证码验证
				var flagCode = null;
				$("input[name=phoneCode]").on("blur",function(){
					var obj = $(".phoneCode");
					var phoneCode = $(this).val();
					var reg=/^\d{6}$/;
					if(phoneCode==""){
						obj.text("请输入验证码");
						obj.show();
						flagCode = false;
					}else if(!reg.test(phoneCode)){
						obj.text("手机验证码格式错误");
						obj.show();
						flagCode = false;
					}else{
						obj.hide();
						flagCode = true;
					}
				});
				$("input[name=phoneCode]").on("focus",function(){
					var obj = $(".phoneCode");
					obj.hide();
				});
				//图片验证码验证
				var flagImgCode = null;
				var arr = [2741,9414,3251,6921];
				var index = 0;
				$(".account-imgCode span").on("click",function(){
					index = Math.floor(Math.random()*4)
					$(".account-imgCode img").attr({src:'images/'+index+'.png'})
				})
				$("input[name=imgCode]").on("blur",function(){
					var obj = $(".imgCode");
					var imgCode = $(this).val();
					if( imgCode=="" ){
						obj.text("请输入验证码");
						obj.show();
						flagImgCode = false;
					}else if( imgCode!=arr[index]  ){
						obj.text("验证码不正确，请重新输入");
						obj.show();
						flagImgCode = false;
					}else{
						obj.hide();
						flagImgCode = true;
					}
				})
				//密码验证
				var flagWord = null;
				$("input[name=password]").on("blur",function(){
					var obj = $(".password");
					var password = $(this).val();
					var reg=/^\d{6}$/;
					if(password==""){
						obj.text("请输入密码");
						obj.show();
						flagWord = false;
					}else if(!reg.test(password)){
						obj.text("请输入6-32位字符，需字母数字符号两种以上组合");
						obj.show();
						flagWord = false;
						console.log(password)
					}else{
						obj.hide();
						flagWord = true;
					}
				});
				$("input[name=password]").on("focus",function(){
					var obj = $(".password");
					obj.hide();
				});
				//再次密码验证
				var flagAgain = null;
				$("input[name=repeatPassword]").on("blur",function(){
					var obj = $(".repeatPassword");
					var repeatPassword = $(this).val();
					var password = $("input[name=password]").val();
					if(repeatPassword==""){
						obj.text("请再次输入登录密码");
						obj.show();
						flagAgain = false;
					}else if( repeatPassword!= password ){
						obj.text("两次密码不一致，请重新输入");
						obj.show();
						flagAgain = false;
					}else{
						obj.hide();
						flagAgain = true;
					}
				});
				$("input[name=repeatPassword]").on("focus",function(){
					var obj = $(".repeatPassword");
					obj.hide();
				});
				
				//协议判断
				/*var flag = true;
				$(".regist-agree").find("span").on("click",function(){
					if( flag ){
						$(this).find("b").removeClass("regist-yes");
						flag = false;
					}else if( flag == false ){
						$(this).find("b").addClass("regist-yes");
						flag = true;
					}
				})*/
				var flagAgree = true;
				$(".regist-agree").find("span").on("click",function(){
					$(this).find("b").toggleClass("regist-yes");
					if( $(".regist-agree").find("b").hasClass("regist-yes") ){
						console.log("选中")
						flagAgree = true;
					}else{
						flagAgree = false;
					}
				})
				
				//注册验证判断
				$(".account-btn").click(function(event){
					event.preventDefault()
					if( flagName&&flagCode&&flagWord&&flagAgain&&flagAgree&&flagImgCode){
						$.cookie("userName", $("input[name=userName]").val() , { expires: 10 }); 
			  			$.cookie("userPwd", $("input[name=password]").val() , { expires: 10 });
			  			console.log(document.cookie);
						location.href = "login.html";
					}else{
						return false;
					}
				})
			})
		},
		enter:function(){
			$(function(){
				//跳转注册页面
			$(".account-regist").on("click",function(){
				location.href="register.html";
			})
			//登录读取cookie
			$("#check").on("click",function(){
				if( /*$("#userName").val()==$.cookie("userName")&&$("#passWord").val()==$.cookie("userPwd")*/flagName&&flagWord&&flagImgCode ){
					window.location.href = "index.html"
				}
			});
			//登录验证
			var flagName = null;
			$("input[name=userName]").on("blur",function(){
				var obj = $(".userName");
				var userName = $(this).val();
				var Cname = $.cookie("userName");
				if(userName==""){
					obj.text("请输入手机号");
					obj.show();
					flagName = false;
				}else if( userName!=Cname ){
					obj.text("用户名不存在");
					obj.show();
					flagName = false;
				}else{
					obj.hide();
					flagName = true;
				}
			});
			//密码验证
			var flagWord = null;
			$("input[name=password]").on("blur",function(){
				var obj = $(".passWord");
				var password = $(this).val();
				var Cpwd = $.cookie("userPwd");
				if(password==""){
					obj.text("请输入密码");
					obj.show();
					flagWord = false;
				}else if( password != Cpwd ){
					obj.text("密码不正确");
					obj.show();
					flagWord = false;
					console.log(password)
				}else{
					obj.hide();
					flagWord = true;
				}
			});
			$("input[name=password]").on("focus",function(){
				var obj = $(".passWord");
				obj.hide();
			});
			//图片验证码验证
			var flagImgCode = null;
			var arr = [2741,9414,3251,6921];
			var index = 0;
			$(".account-imgCode span").on("click",function(){
				index = Math.floor(Math.random()*4)
				$(".account-imgCode img").attr({src:'images/'+index+'.png'})
			})
			$("input[name=imgCode]").on("blur",function(){
				var obj = $(".imgCode");
				var imgCode = $(this).val();
				if( imgCode=="" ){
					obj.text("请输入验证码");
					obj.show();
					flagImgCode = false;
				}else if( imgCode!=arr[index]  ){
					obj.text("验证码不正确，请重新输入");
					obj.show();
					flagImgCode = false;
				}else{
					obj.hide();
					flagImgCode = true;
				}
			});
			//下次自动登录
			var flagAgree = null;
			$(".login-auto").find("span").on("click",function(){
				$(".login-auto").find("span").find("b").toggleClass("login-remember");
				if( $(".login-auto").find("b").hasClass("login-remember") ){
					$(".autoBlock").hide();
					$(".autoNone").show();
					flagAgree = true;
				}else{
					$(".autoBlock").show();
					$(".autoNone").hide();
					flagAgree = false;
				}
			})
			})
			
		}
	}
})