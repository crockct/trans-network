

if (Meteor.isClient) {

  Template.mentoring.events({
    'click #request_mentor': function(event, template) {
	
	$("#request_text").val("");
	$("#request_text2").val("");
	//document.getElementById("request_text").innerHTML="";
		
		
		
		
    }
  });

 

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

}