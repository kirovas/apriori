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
/$('.j-price-block-title a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
	
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
});