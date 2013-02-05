$(document).ready(function() {
	var configUrl = 'js/config.json';
	$.getJSON(configUrl, function(data) {
		customize(data);
	});
});

function customize(config) {
	/* title + logo */
	$("#title").css('background', 'url(' + config.logo + ') left no-repeat');
	var appTitle = config.company + " " + config.application;
	$("#title").attr("title", appTitle);
	$("#title").html(appTitle);
	document.title = appTitle;

	/* tabs */
	$.each(config.tabs, function(key, value) {
		if (!value) {
			$("#" + key).hide();
			$("#" + key + "-tab").hide();
		}
	});
}