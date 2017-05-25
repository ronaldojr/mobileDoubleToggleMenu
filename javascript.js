$(document).ready(function() {

  $('body').addClass('js');	
  $('#menu').click(function(e){
  	$('#menu span').toggleClass('active');
  	$('#nav-menu > ul').toggleClass('active');
  	e.preventDefault();
  })
});