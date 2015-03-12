Router.configure({
    layoutTemplate: 'application',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'index',
    template: 'main'
});

var requireLogin = function (req, res, next) {
    console.log(req);
    console.log('requireLogin');

    if (Meteor && !Meteor.user()) {
        this.layout('auth');
        this.render('auth');
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin);
