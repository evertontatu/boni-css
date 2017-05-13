//MENU NAV
// $(function() {
//     $('.menu-mobile').click(function(e) {
//         e.stopPropagation();
//         toggleNav();
//     });
//
//     $('body, .navMobile > ul').click(function(e){
//         var target = $(e.target);
//         if($('#nav').hasClass('navMobile')) toggleNav();
//     });
//
//     function toggleNav(){
//         if($('#nav').hasClass('navMobile')){
//             $('#nav').removeClass('navMobile');
//         }else{
//             $('#nav').addClass('navMobile');
//         }
//     }
// });

//Menu header button burger
$(function(){

	$('.menu-button-burger').click(function(e){
		e.stopPropagation();
		toggleNav();
	});

	$('.main').click(function(e){
		var target = $(e.target);
		if(!target.closest('.menu-list').length && $('.main').hasClass('show-nav')) toggleNav();
	});

	function toggleNav(){
		if($('.main').hasClass('show-nav')){
			$('.main').removeClass('show-nav');
		}
		else{
			$('.main').addClass('show-nav');
		}

    if($('.menu-list').hasClass('show-nav')){
      $('.menu-list').removeClass('show-nav');
    }
    else{
      $('.menu-list').addClass('show-nav');
    }
	}

});

//Height device
$(function() {
    var heightDevice = $(window).height();
    var widthDevice = $(window).width();

    if(widthDevice < "900"){
        $('.header-mobile').css('height', heightDevice);
        $('.photo-box').css('height', heightDevice);
    }
});

//Mask form
// function mascara(o,f){
//     v_obj=o
//     v_fun=f
//     setTimeout("execmascara()",1)
// }
// function execmascara(){
//     v_obj.value=v_fun(v_obj.value)
// }
// function mtel(v){
//     v=v.replace(/\D/g,"");
//     v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
//     v=v.replace(/(\d)(\d{4})$/,"$1-$2");
//     return v;
// }
// function id( el ){
//     return document.getElementById( el );
// }
// window.onload = function(){
//     id('telefone').onkeyup = function(){
//         mascara( this, mtel );
//     }
// }
