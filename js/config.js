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
	$("#logo").attr("src", config.logo);
	$("#logo").attr("alt", config.company + " Online Job Application");

	/* title */
	$("#company-name").html(config.company);

	/* tabs */
	$(config.tabs).each(function(key,value) {
		//alert(value.work);
	});
}