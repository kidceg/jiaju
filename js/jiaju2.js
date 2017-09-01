 $(document).ready(function(e) {


var $signUp = $('#signUp');
var h= -($signUp.offsetHeight)/2+"px";
var w= -($signUp.offsetWidth)/2+"px";
$signUp.css({
	'top':'50%',
	'left':'50%',
	'margintop':h,
	'marginleft':w,
	'visibility':'visible',
	'display':'none'
});



$('#sign').on('click',function(){
	$signUp.css('display','block');
	$('#screen').css('display','block');
});


$('#signUpClose').on('click',function(){
	$signUp.css('display','none');
	$('#screen').css('display','none');
	$('#tips').html('　');
	$('#passtips').css('display','none');
	$('.text').css('border','').val('');

});









































});



































