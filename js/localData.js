(function($) {
	$.localData = {
		saveAllInputs: function storeData() {
			$('input').each(function() {
				console.log("storing data -> " + $(this).attr("name") + ":" + $(this).val());
				$.jStorage.set($(this).attr("name"), $(this).val());
			});
		},
		saveObject: function storeDataItem(object) {
			console.log("saving item data -> " + $(object).val());
			$.jStorage.set($(object).attr("name"), $(object).val());
		},
		saveItem: function storeDataItem(key, value) {
			$.jStorage.set(key,value)
			console.log("saving data item -> " + key + " = " + value);
		},
		getAllInputs: function getData() {
			console.log("getting data");
			$('input').each(function() {
				$(this).val($.jStorage.get($(this).attr("name")));
			});
		},
		getItem: function getItem(key) {
			return $.jStorage.get(key);
		},
		flush: function flushData() {
			console.log("flushing local data");
			$.jStorage.flush();
		},
		getJSON: function getJSON() {
			console.log("getting json data from local data storage");
			return ko.toJSON(this.viewModel);
		},
		bind: function bindData() {
			console.log("binding data");
			ko.applyBindings(this.viewModel);
		},
		viewModel: this.viewModel
	}
})(jQuery);