var j = jQuery.noConflict();

j(function() {
	j('.freebie-btn .likes').click(function(event) {
		event = event || window.event;
		event.preventDefault();
			
		// j.$.ajax({
		// 	url: '/path/to/file',
		// 	type: 'default GET (Other values: POST)',
		// 	dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// 	data: {param1: 'value1'},
		// })
		// .done(function() {
		// 	console.log("success");
		// })
		// .fail(function() {
		// 	console.log("error");
		// })
		// .always(function() {
		// 	console.log("complete");
		// });
		

		return false;
	});
});