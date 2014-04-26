
Router.configure({


});

Router.map(function() {
  this.route('stories'),
  this.route('questions'),
  
    this.route('index', {
    path: '/',
  }),
 
   this.route('requestbecome'),
  
   this.route('request'),
   this.route('become')
});


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


if (Meteor.isClient) {

}
