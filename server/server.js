Meteor.startup(function() {
	if (texts.find().count() === 0) {		
		texts.insert({text: ""});
	}
});
