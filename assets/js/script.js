$(document).ready(function(){
	$('.pause-btn').click(function(event) {
		$(".hand").addClass("paused");
	}); 
	$('.play-btn').click(function(event) {
		$(".hand").addClass("hand-animation");
		$(".hand").removeClass("paused");
	});
	$('.stop-btn').click(function(event) {
		$(".hand").removeClass("hand-animation");
	});      
});