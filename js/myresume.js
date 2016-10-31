$(document).ready(function(){
	var shadow=$(".shadow");
	var shadow1=$(".shadow1");
	var like=$(".ready .two .tu2 .like");
	shadow.css("display","none");
	like.click(function(){
		shadow.css("display","block");
		
		
	})
	shadow.click(function(){
		shadow.css("display","none");
		
	})
	shadow1.click(function(e){
		e.stopPropagation();
		shadow.css("display","block");
	
	})
	
	
})
