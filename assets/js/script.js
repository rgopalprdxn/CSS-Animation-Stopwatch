$(document).ready(function(){
	$('.pause-btn').click(function(event) {
		$(".hand").addClass("paused");
	}); 
	$('.play-btn').click(function(event) {
		$(".hand").addClass("hand-animation");
		$(".hand").removeClass("paused");
	});
	
	$('.reset-btn').click(function(event) {
		$(".hand").removeClass("hand-animation");
	}); 
});
