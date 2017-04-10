$(function(){

	//Scroll to top function
	$('footer p a.top').click(function(event){
				// stop default anchor behavior 
				event.preventDefault();
				$('html, body').animate({scrollTop: 0}, 300);
				});

	//Scroll top
	$(document).ready(function() {
				$(window).scroll(function(){
				if ($(this).scrollTop() > 150) {
				//Make button appear
				$('.top').fadeIn(100);
				} else {
				//Make button disappear
					$('.top').fadeOut(100);
					}
				});
			});

	//Create a variable for floating nav toggle
	var navTop = $('#floatingNav').offset().top;

				$(window).scroll(function() {
					//Once window has scrolled past the nav height, add class .floater
					if ($(window).scrollTop() > navTop) {
						//Add class .floater");
						$('#floatingNav').addClass('floater');
					}
					else {
						//remove class floater
						$('#floatingNav').removeClass('floater');
					}
				});
							
});