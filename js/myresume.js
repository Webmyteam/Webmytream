$(document).ready(function(){
	var shadow=$(".shadow");
	var like=$(".ready .two .tu2 .like");
	shadow.css("display","none");
	like.click(function(){
		shadow.css("display","block");
		
		
	})
	shadow.click(function(){
		shadow.css("display","none");
	})
	
	
})
