/* LOCAL DATA OBJECT */
(function($) {
	$.localData = {
		saveAllInputs: function storeData() {
			/* saves all inputs on screen to html5 local storage. it uses the input's name as the key and value is the value */
			$('input').each(function() {
				$.jStorage.set($(this).attr("name"), $(this).val());
			});
		},
		saveObject: function storeDataItem(object) {
			/* passed an object, saves the value of object where key is the name and value is value */
			$.jStorage.set($(object).attr("name"), $(object).val());
		},
		saveItem: function storeDataItem(key, value) {
			/* saves a key / value to local storage */
			$.jStorage.set(key,value)
		},
		getAllInputs: function getData() {
			/* sets each input to value it has in local storage */
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
			$.jStorage.flush();
		},
		getJSON: function getJSON() {
			/* gets JSON representation of data in local storage that's bound to view model */
			return ko.toJSON(this.viewModel);
		},
		bind: function bindData() {
			/* bind UI to view Model */
			ko.applyBindings(this.viewModel);
		},
		viewModel: this.viewModel
	}
})(jQuery);