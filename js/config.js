$(document).ready(function() {
	var configUrl = 'js/config.json';
	$.getJSON(configUrl, function(data) {
		customize(data);
	});
});

function customize(config) {
	console.log("customizing the UI based on local config");
	console.log(config);

	/* logo */
	$("#title").css('background', 'url(' + config.logo + ') left no-repeat');
	$("#title").attr("title", config.company + " Online Job Application");

	/* title */
	$("#company-name").html(config.company);

	/* tabs */
	$.each(config.tabs, function(key, value) {
		if (!value) {
			$("#" + key).hide();
			$("#" + key + "-tab").hide();
		}
	});
}