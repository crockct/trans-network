Messages = new Meteor.Collection("Messages");

if (Meteor.isClient) {
  Template.messages.messages = function() {
    return Messages.find({

    }, {
      sort: {
        timestamp: -1
      },
      limit: 100
    });
  };

  Template.input.events({
    'click #send': function() {
      var message = $('#newMessage').val();
      if (!message) {
        alert('You are missing some information!');
      }
      Meteor.saveMessage({
        message: message,
      });
    }
  });

  Meteor.autorun(function() {
    Meteor.subscribe("Messages");
  });

  Meteor.saveMessage = function(content) {
    var message = content.message;
    if (!message) {
      return;
    }
    Messages.insert({
      message: message,
      timestamp: Date.now()
    }, function(err, id) {
      if (err) {
        alert('Something defnitely went wrong!');
      }
      if (id) {
        $('#newMessage').val('');
      }
    });
  };

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

  Meteor.publish("Messages", function() {
    return Messages.find();
  });

  Messages.allow({
    'insert': function(userId, doc) {
      return true;
    },
    'remove': function(userId, doc) {
      return false;
    }
  });
}