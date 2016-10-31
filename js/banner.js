	$(document).ready(function(){
		var now=0;
		var next=0;
		var t=setInterval(move,3000);
		var flag=true;
		// 设置所有图片的透明度隐藏为0，而第一张的图片显示为1；
		$(".banner .banner-img .ban-img").css("opacity","0").eq(0).css("opacity","1");
		// 设置下标的第一个给他增加一个类名，同理也是显示；
		$(".banner .circle").eq(0).addClass("first");
		function move(){
			// 天关，避免客户因点击过度而造成的影响
			if(flag==false){
				return;
			}
			flag=false;
			next++;
			if(next>=$(".banner .banner-img .ban-img").length){
				next=0;
			}
			$(".banner .banner-img .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
			$(".banner .circle").eq(now).removeClass("first").end().eq(next).addClass("first");
			now=next;
			flag=true;
		}
		// 添加鼠标移入事件，移入停止，离开执行时间函数；
		$(".banner .banner-img").hover(function(){
//			$(".banner .gt").css("display","block");
			clearInterval(t);
		},function(){
//			$(".banner .gt").css("display","none");
			t=setInterval(move,3000);
		});
		// 给左右按钮添加点击事件
		$(".banner .btn .pre").click(function(){
			moveL();
		});
		$(".banner .btn .next").click(function(){
			move();
		});
		// 左右按钮点击(移到该元素上)事件执行的函数
		function moveL(){
			if(flag==false){
				return;
			}
			flag=false;
			next--;
			if(next<0){
				next=($(".banner .banner-img .ban-img").length)-1;
			}
			$(".banner .banner-img .ban-img").eq(now).animate({opacity:0},1000).end().eq(next).animate({opacity:1},1000);
			$(".banner .circle").eq(now).removeClass("first").end().eq(next).addClass("first");
			now=next;
			flag=true;
		}
		// 添加选项卡事件
		$(".banner .circle").mouseover(function(){
			var index=$(this).index();
			if(index>now){
				if(flag==false){
					return;
				}
				flag=false;
				$(".banner .banner-img .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
				$(".banner .circle").eq(now).removeClass("first").end().eq(index).addClass("first");
				flag=true;
			}else if(index<now){
				if(flag==false){
					return;
				}
				flag=false;
				$(".banner .banner-img .ban-img").eq(now).animate({opacity:0},1000).end().eq(index).animate({opacity:1},1000);
				$(".banner .circle").eq(now).removeClass("first").end().eq(index).addClass("first");
				flag=true;
			}else{
				return;
			}
			now=index;
		});
	});