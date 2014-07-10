$(document).ready(function(){
	$('#mytab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
/////////////////////
	$('.j-form-button, .j-form').addClass('close');
	$('.j-form').hide();
	$('.j-form-button').bind('click', function(){
		if($(this).parent().next().hasClass('close')){
			$(this).addClass('open').removeClass('close');
			$(this).parent().next().addClass('open').removeClass('close').slideDown(500);
			
		} else if($(this).parent().next().hasClass('open')){
			$(this).addClass('close').removeClass('open');
			$(this).parent().next().addClass('close').removeClass('open').slideUp(500);;
		}
		return false;
	})
	
	$('.j-prices-li a').bind('click', function(){
		
		return false;
	})
/////////////////////////////////////////////////////////
$('.j-price-block-title a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('.more-photo a').bind('click', function(){
	$(".more-photo-hide").slideToggle('slow');
})
});
$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 150) {
             $('.a-top').addClass('fixed').animate({top: 0}, 600);
         }
         else {
             $('.a-top').removeClass('fixed');
         }
    });
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 150) {
		$('.hide-bottom').hide();
        $('.hide-on-top').fadeIn();
		
    } else {
        $('.hide-on-top').fadeOut();
		$('.hide-bottom').show();
    }
});
$(document).ready(function(){
  $('.bxslider').bxSlider({
	pager:true,
	//auto:true,
	autoHover:true,
	adaptiveHeight:true,
	infiniteLoop:false,
	hideControlOnEnd:true,
	pagerType:'short',
	nextSelector:('#carousel-next'),
	prevSelector:('#carousel-prev')
  });
  $('.form-slider').bxSlider({
	pager:true,
	//auto:true,
	autoHover:true,
	adaptiveHeight:true,
	infiniteLoop:false,
	hideControlOnEnd:true,
	pagerType:'short',
	nextSelector:('#form-slider-next'),
	prevSelector:('#form-slider-prev')
  });
  $('.talk-slider').bxSlider({
	pager:true,
	//auto:true,
	autoHover:true,
	adaptiveHeight:true,
	infiniteLoop:false,
	hideControlOnEnd:true,
	pagerType:'short',
	nextSelector:('#talk-slider-next'),
	prevSelector:('#talk-slider-prev')
  });
});

////////////////////////
$(document).ready(function() {
    $('.form-free-c').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: 'Имя введено не верно!',
                validators: {
                    notEmpty: {
                        message: 'Поле имя не может быть пустым!'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'Имя должно содержать больше 6 символов'
                    },
                    regexp: {
                        regexp: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Поле бязательное к заполнению'
                    },
                    regexp: {
                        regexp: /^[\s\d]+$/,
                        message: 'Должны быть только цифры'
                    }
                }
            }
        }
    });
});
$(function() {
  $('a.button-yellow[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});