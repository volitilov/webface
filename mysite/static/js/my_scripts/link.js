var j = jQuery.noConflict();

j(function() {
	j('a').click(function() {
		j(this).removeClass('animated');
		j(this).removeClass('bounceIn');
		
		j(this).addClass('animated');
		j(this).addClass('bounceIn');
	});
});