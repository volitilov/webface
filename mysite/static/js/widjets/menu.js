var j = jQuery.noConflict();

j(function() {
	j('.menu a').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		var titleValue = j(this).attr('title');

		j('.menu a').each(function() {
            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }
        });

        j('.body .menu-item').each(function() {
            if (j(this).hasClass('active')) {
                j(this).removeClass('active');
            }
        });

        j(this).addClass('active');

		switch (titleValue) {
			case 'Home':
				j(this).addClass('active');
				j('.slide-home').addClass('active');
				break;
			case 'About':
				j(this).addClass('active');
				j('.slide-about').addClass('active');
				break;
			case 'Portfolio':
				j(this).addClass('active');
				j('.slide-portfolio').addClass('active');
				break;
			case 'Services':
				j(this).addClass('active');
				j('.slide-services').addClass('active');
				break;
			default:
				j(this).addClass('active');
				j('.slide-contacts').addClass('active');
				break;
		}

		return false;
	});
});