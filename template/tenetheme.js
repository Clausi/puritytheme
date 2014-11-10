function createSelectpicker() {
	$("select").addClass("selectpicker");
	$(".selectpicker").selectpicker({
		container: 'body',
		width: 'auto'
	})
	.selectpicker('setStyle', 'btn-default', 'add')
	.selectpicker('setStyle', 'btn-sm', 'add');
}

function createInputbox() {
	$("input.inputbox").addClass("form-control");
}

function scrollHandler() {
	if ($(this).scrollTop() > 100) {
		$('#back-to-top').fadeIn();
		$('#main-nav').addClass('navbar-shrink');
	} else {
		$('#back-to-top').fadeOut();
		$('#main-nav').removeClass('navbar-shrink');
	}
}

$(document).ready(function() {


	$( '.swipebox' ).swipebox();

	createSelectpicker();
	createInputbox();
	scrollHandler();
	
	$('.btn').tooltip({container: 'body'});
	$('a').tooltip({container: 'body'});
	$('#homepage-menu > li > a').tooltip('destroy')
	
	$('.progress-popover').popover({
		html: true,
		delay: 200
	}).click(function(e) {
        e.preventDefault();
    });

	
    $('#site-logo img').attr('class','img-responsive center-block');
	$('.content img:not(".smilies")').attr('class','img-responsive');
	$('.signature img:not(".smilies")').attr('class','img-responsive');

    $(".btn-radio-group .btn-radio").click(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).addClass('active');
        return true;
    });
    
    $(".btn-radio-group .btn-radio input:checked").each(function() {
        $(this).parents('.btn-radio-group').find('.btn-radio.active').removeClass('active');
        $(this).parent().addClass("active");
    })

    $(window).scroll(function () {
        scrollHandler();
    });
	
    // scroll body to 0px on click
    $('#back-to-top').click(function (event) {
		event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

});
