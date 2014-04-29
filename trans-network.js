// Collections (to model data)
Messages = new Meteor.Collection("messages");
Questions = new Meteor.Collection("questions");
Stories = new Meteor.Collection("stories");

// Routing
Router.configure({
});

Router.map(function() {
  this.route('stories'),
  this.route('questions'),
  this.route('index', {path: '/', }),
  
  this.route('requestbecome'),
  this.route('mentoring'),
  this.route('request'),
  this.route('become')
});


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

	// Seed Data
	Questions.insert({title: "I think my partner might be trans*", content: "I think my partner is questioning his gender identity. He is maab and has been talking a lot about how he doesn't feel comfortable with male gender roles, and seems to have some body dysphoria. He is struggling with not conforming to gender roles; he says he feels guilty. I 100% support him no matter what, but as a ciswoman I don't know how he is feeling or what I should do. He hasn't explicitly told me he's questioning, and 							obviously I don't want to push him on this. How can I be most supportive?", topics: "significant others", answers: "0", askedby: "anonymous", askeddate: "", followers: "0"});


	Questions.insert({title: "What is the difference between sex and gender?", content: "this is a sample question", topics: "", answers: "0", askedby: "username1", askeddate: "February 1, 2014", followers: "0"});

Questions.insert({title: "Question Title", content: "this is a sample question", topics: "sex and gender, trans* basics", answers: "1", askedby: "anonymous", askeddate: "", followers: "0"});

  });
}


if (Meteor.isClient) {

	// all questions
	Template.questions.all = function () {
		return Questions.find({});
	};

	Template.questions.unanswered = function () {
		return Questions.find({answers: "0"});
	};



}
