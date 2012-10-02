(function($) {
	$("#step1 .next").click(function() {
		// step 1: validate
			//TODO
		// step 2: save to local storage
		$.localData.set();
		// step 3: go to next
		$("#step1, #step2").toggle();

		updateProgress("20", "2");
	});

	$("#step2 .back").click(function() {
		// step 3: go to next
		$("#step1, #step2").toggle();

		updateProgress("10", "1");
	});

})(jQuery);

function updateProgress(percent, step) {
	$("#progress-step").html(step);
	$(".progress .bar").css("width", percent + "%");
}