/* this needs refactored... probably to jQuery Form Wizard */

(function($) {
	
	$("#step1 .next").click(function() {
		if (!$("#formStep1").valid()) { 
			return;
		}

		setTab("work");
	});

	$("#step2 .back").click(function() {
		setTab("contact");
	});

	$("#step2 .next").click(function() {
		if (!$("#formStep2").valid()) { 
			return;
		}
		setTab("review");
	});

})(jQuery);

function setTab(tab) {
	$('#tabs a[href="#' + tab + '"]').tab('show');
	$.localData.saveItem("tab", tab);
}

//* Show current step *//
function checkStep() {
	var step = $.jStorage.get("tab", "contact");
}