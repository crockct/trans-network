Messages2 = new Meteor.Collection("Messages2");

if (Meteor.isClient) {
  Template.messages2.messages2 = function() {
    return Messages2.find({

    }, {
      sort: {
        timestamp: -1
      },
      limit: 100
    });
  };

  Template.input2.events({
    'click #send2': function() {
      var message = $('#newMessage2').val();
      if (!message) {
        alert('You are missing some information!');
      }
      Meteor.saveMessage2({
        message2: message,
      });
    }
  });

  Meteor.autorun(function() {
    Meteor.subscribe("Messages2");
  });

  Meteor.saveMessage2 = function(content) {
    var message = content.message2;
    if (!message) {
      return;
    }
    Messages2.insert({
      message2: message,
      timestamp: Date.now()
    }, function(err, id) {
      if (err) {
        alert('Something defnitely went wrong!');
      }
      if (id) {
        $('#newMessage2').val('');
      }
    });
  };

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup

  });

  Meteor.publish("Messages2", function() {
    return Messages2.find();
  });

  Messages2.allow({
    'insert': function(userId, doc) {
      return true;
    },
    'remove': function(userId, doc) {
      return false;
    }
  });
}