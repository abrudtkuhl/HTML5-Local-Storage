(function($) {
	
	$("#step1 .next").click(function() {
		$("#step1, #step2").toggle();
		updateProgress(1);
		$.localData.saveItem("step", "2");
	});

	$("#step2 .back").click(function() {
		$("#step1, #step2").toggle();
		$.localData.saveItem("step", "1");
		updateProgress(2);
	});

	$("#step2 .next").click(function() {
		$("#step2, #step3").toggle();
		updateProgress(3);
		$.localData.saveItem("step", "3");
	});

})(jQuery);

function updateProgress(step) {
	$("#progress-step").html(step);

	var percent = 0;

	if (step == 1)
		percent = 20;
	if (step == 2)
		percent = 60;
	if (step == 3)
		percent = 90;

	$(".progress .bar").css("width", percent + "%");
}

//* Show current step *//
function checkStep() {
	$(".step").each(function() {
		$(this).hide();
	});

	var step = $.jStorage.get("step", "1");

	$("#step" + step).show();
	updateProgress(step);
}