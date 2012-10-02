(function($) {
	$.localData = {
		set: function storeData() {
			$('input').each(function() {
				console.log("storing data -> " + $(this).attr("name") + ":" + $(this).val());
				$.jStorage.set($(this).attr("name"), $(this).val());
			});
		},
		get: function getData() {
			console.log("getting data");
			$('input').each(function() {
				$(this).val($.jStorage.get($(this).attr("name")));
			});
		},
		flush: function flushData() {
			console.log("flusing local data");
			$.jStorage.flush();
		}
	}
})(jQuery);