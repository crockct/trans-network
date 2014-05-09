// Collections (to model data)
Messages = new Meteor.Collection("messages");
Messages2 = new Meteor.Collection("messages2");
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
  
  this.route('request'),
  this.route('become'),
  this.route('storiesAllEve'),
  this.route('storiesAllJill'),
  this.route('mentoring'),
  this.route('storiesMyStory'),
  this.route('search_stories'),
  this.route('search_questions'),
  this.route('answer_questions'),
  this.route('ask_questions'),
  this.route('urgent'),
  this.route('hey'),
  this.route('pm'),
  this.route('mentor_confirm')

});


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

	// Seed Data
	if (Questions.find().count() === 0) {
	Questions.insert({title: "I think my partner might be trans*", content: "I think my partner is questioning his gender identity. He is maab and has been talking a lot about how he doesn't feel comfortable with male gender roles, and seems to have some body dysphoria. He is struggling with not conforming to gender roles; he says he feels guilty. I 100% support him no matter what, but as a ciswoman I don't know how he is feeling or what I should do. He hasn't explicitly told me he's questioning, and 							obviously I don't want to push him on this. How can I be most supportive?", topics: "significant others", answers: 0, askedby: "anonymous", askeddate: "", followers: 0, followed: false});


	Questions.insert({title: "What is the difference between sex and gender?", content: "this is a sample question", topics: "", answers: 0, askedby: "username1", askeddate: "February 1, 2014", followers: 0, followed: false});

Questions.insert({title: "Question Title", content: "this is a sample question", topics: "sex and gender, trans* basics", answers: 1, askedby: "anonymous", askeddate: "", followers: 0, followed: false});

  } // end if questions empty

	if (Stories.find().count() === 0) {
	Stories.insert({title: "Jill's Story", content: "I’m transgender, meaning the gender that was assigned   to me at birth doesn’t match the gender I identify with. For most of my life, I couldn’t articulate this feeling in a coherent way.", hugs: 50, hugged: false});

	Stories.insert({title: "Eve's Story", content: "I've just got off the phone with one of my childhood bullies. He used to call me names and hit me on the way home from school, but we're friends now. He's slightly in awe of my life today and, to be honest, so am I. This year has been intense.", hugs: 0, hugged: false});

  } // end if stories empty

	});
} // end if server


if (Meteor.isClient) {

/*	Template.stories = function() { 
	  $('body').attr({
		onload: 'init();'
	  });
	}*/

	// all questions
	Template.questions.all = function () {
		return Questions.find({});
	};

	Template.questions.unanswered = function () {
		return Questions.find({answers: 0});
	};

	Template.questions.followed = function () {
		return Questions.find({followed: true});
	};

	Template.questions.events({
		'click #submitq': function() {
  		var q_content = $('#qcontent').val();
		  Questions.insert({title: $('#qtitle').val(), content: $('#qcontent').val(), topics: "", answers: 0, askedby: "cheesecakeboi", askeddate: Date.now(), followers: 1, followed: true}); 
    },
		'click .followbtn': function() {
			Questions.update(this._id, {$inc: {followers: 1}}, {$set: {followed: true}});
		},
		'click #unfollow': function() {
			//TODO unfollow all selected questions
		}
	});

	Template.stories.all = function () {
		return Stories.find({});
	};

	Template.stories.popular = function () {
		return Stories.find({});
		//return Stories.find({hugs: {$gt: 9}});
	};

		Template.stories.events({
		'click .hugbtn': function() {
			if (!this.hugged){
				Stories.update(this._id, {$inc: {hugs: 1}}, {$set: {hugged: true}});
			}
    }
	});
}
