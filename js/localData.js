/* LOCAL DATA OBJECT */
(function($) {
	$.localData = {
		saveAllInputs: function storeData() {
			/* saves all inputs on screen to html5 local storage. it uses the input's name as the key and value is the value */
			$('input').each(function() {
				console.log("storing data -> " + $(this).attr("name") + ":" + $(this).val());
				$.jStorage.set($(this).attr("name"), $(this).val());
			});
		},
		saveObject: function storeDataItem(object) {
			/* passed an object, saves the value of object where key is the name and value is value */
			console.log("saving item data -> " + $(object).val());
			$.jStorage.set($(object).attr("name"), $(object).val());
		},
		saveItem: function storeDataItem(key, value) {
			/* saves a key / value to local storage */
			$.jStorage.set(key,value)
			console.log("saving data item -> " + key + " = " + value);
		},
		getAllInputs: function getData() {
			/* sets each input to value it has in local storage */
			console.log("getting data");
			$('input').each(function() {
				$(this).val($.jStorage.get($(this).attr("name")));
			});
		},
		getItem: function getItem(key) {
			/* get item from local storage by key */
			return $.jStorage.get(key);
		},
		flush: function flushData() {
			/* flush local storage */
			console.log("flushing local data");
			$.jStorage.flush();
		},
		getJSON: function getJSON() {
			/* gets JSON representation of data in local storage that's bound to view model */
			console.log("getting json data from local data storage");
			return ko.toJSON(this.viewModel);
		},
		bind: function bindData() {
			/* bind UI to view Model */
			console.log("binding data");
			ko.applyBindings(this.viewModel);
		},
		viewModel: this.viewModel
	}
})(jQuery);