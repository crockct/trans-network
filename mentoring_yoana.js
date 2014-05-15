

if (Meteor.isClient) {

  Template.mentoring.events({
    'click #request_mentor': function(event, template) {
	
		$("#request_text").val("");
		$("#request_text2").val("");
		
		}, 

		'click .pmbtn': function (event, template) {
		// var button = document.getElementById(event.currentTarget.id);
		// button.disabled;
		$("#right_pm_div").show().width("30%").css("position=relative");
		$("#left_main_div").width("60%").css("float=left", "margin-right=10px");
		
    }
  });

 

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

}
