$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
  	  $submenu = $('#submenu'),
      $menulink = $('.menu-link'),
      $submenulink = $('.submenu-link');
  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});

	$submenulink.click(function(){
	  $submenulink.toggleClass('active');
	  $submenu.toggleClass('active');
	  return false;
	});


});