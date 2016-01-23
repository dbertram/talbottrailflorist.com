$(function() {
	var currentPanel = $('.js-welcome');
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

	$('.panel:not(.js-welcome)').hide();
	$('nav').fadeIn();

	$('body').on('click', 'nav li', menuClick);
});
