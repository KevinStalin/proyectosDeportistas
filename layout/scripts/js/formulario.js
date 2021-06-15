$(function() {

	$(".btn").click(function() {

		$(".form-signin").toggleClass("form-signin-left");

    $(".form-signup").toggleClass("form-signup-left");

    $(".frame").toggleClass("frame-long");

    $(".signup-inactive").toggleClass("signup-active");

    $(".signin-active").toggleClass("signin-inactive");

    $(".forgot").toggleClass("forgot-left");   

    $(this).removeClass("idle").addClass("active");

    if($(this).attr('confirmador')=="salida"){

      $(".formulario__inicial").removeClass('frame');

      $(".formulario__inicial").addClass('frame2');

    }else{

      $(".formulario__inicial").addClass('frame');

      $(".formulario__inicial").removeClass('frame2');

    }

	});


});

