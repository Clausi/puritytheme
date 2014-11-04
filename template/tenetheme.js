$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});

$(function () {
    $('.list-group.checked-list-box .list-group-item').each(function () {
        
        // Settings
        var $widget = $(this),
            $checkbox = $('<input type="checkbox" class="hidden" />'),
            color = ($widget.data('color') ? $widget.data('color') : "primary"),
            style = ($widget.data('style') == "button" ? "btn-" : "list-group-item-"),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };
            
        $widget.css('cursor', 'pointer')
        $widget.append($checkbox);

        // Event Handlers
        $widget.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });
          

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $widget.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $widget.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$widget.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $widget.addClass(style + color + ' active');
            } else {
                $widget.removeClass(style + color + ' active');
            }
        }

        // Initialization
        function init() {
            
            if ($widget.data('checked') == true) {
                $checkbox.prop('checked', !$checkbox.is(':checked'));
            }
            
            updateDisplay();

            // Inject the icon if applicable
            if ($widget.find('.state-icon').length == 0) {
                $widget.prepend('<span class="state-icon ' + settings[$widget.data('state')].icon + '"></span> ');
            }
        }
        init();
    });
});

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

	createSelectpicker();
	createInputbox();
	scrollHandler();
	
	$('.btn').tooltip({container: 'body'});
	$('a').tooltip({container: 'body'});
	
	$('.progress-popover').popover({
		html: true,
		delay: 200
	}).click(function(e) {
        e.preventDefault();
    });

	
    $('#site-logo img').attr('class','img-responsive center-block');
	$('.content img:not(".smilies")').attr('class','img-responsive');

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
