$(document).ready(function(){
  $(".menu").click(function(){
    $(".navbar-menu-links").css("display", "block");
  });
  $(".close-dv").click(function(){
    $(".navbar-menu-links").css("display", "none");
  });
});

/*--------------------------------------------------------------------*/
$(document).ready(function(){
  $(".nav-link").click(function(){
    $(".navbar-menu-links").css("display", "none");
  });
});