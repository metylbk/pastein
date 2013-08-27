Template.text_area.result = function() {	
	var txt = texts.findOne();
	if (txt) return txt["text"];
	return "";
	// if (text_collection) {
	// 	var text = text_collection["text"];
	// 	if (text) return text;
	// }
	// return "";
};

Template.text_area.events({
	'keyup #main_text': function(e, templ) {		
		if (e.which === 13) {
			var txt = texts.findOne();
			if (txt) {
			texts.update({_id: txt['_id']}, {text: String(e.target.value)});
			}
		}
	}
});