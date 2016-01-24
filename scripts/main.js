$(function() {
	var currentPanel = $('.js-welcome-panel');
	var welcomeTimeoutId = setTimeout(showStartPanel, 5000);

	function menuClick() {
		if (welcomeTimeoutId != null) {
			clearTimeout(welcomeTimeoutId);
			welcomeTimeoutId = null;
		}

		var $el = $(this);

		$('nav li').removeClass('selected');
		$el.addClass('selected');

		var panelId = $el.attr('id').match(/^btn-(.+)/)[1];
		var nextPanel = $('#' + panelId);

		if (currentPanel && nextPanel.attr('id') === currentPanel.attr('id')) {
			return;
		}

		var showNextPanel = function showNext() {
			nextPanel.fadeIn();
			currentPanel = nextPanel;
		};

		if (currentPanel) {
			currentPanel.fadeOut(showNextPanel);
		} else {
			showNextPanel();
		}
	}

	function showStartPanel() {
		$('#btn-' + $('.js-start-panel').attr('id')).trigger('click');
	}

	$('body')
		.removeClass('no-js')
		.toggleClass('old-ie', !!window.oldIe)
		.on('click', 'nav li', menuClick)
	;

	$('.panel').hide();
	$('.js-show-on-load, .js-welcome-panel').fadeIn();

	if (!window.oldIe) {
		$('.js-slideshow').addClass('bss-slides');

		makeBSS('.bss-slides', {
			auto: {
				speed: 2500,
				pauseOnHover: true
			},
			fullScreen: false,
			swipe: false
		});
	}
});
