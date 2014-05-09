

if (Meteor.isClient) {
    Template.stories.rendered = 
	function(){

	Template.stories.checkEdits();
	}

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

}