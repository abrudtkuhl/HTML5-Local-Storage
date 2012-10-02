(function($) {
	$("#step1 .next").click(function() {
		$("#step1, #step2").toggle();
		updateProgress("20", "2");
	});

	$("#step2 .back").click(function() {
		$("#step1, #step2").toggle();
		updateProgress("10", "1");
	});

	$("#step2 .next").click(function() {
		$("#step2, #step3").toggle();
		updateProgress("100", "3");
	});

})(jQuery);

function updateProgress(percent, step) {
	$("#progress-step").html(step);
	$(".progress .bar").css("width", percent + "%");
}