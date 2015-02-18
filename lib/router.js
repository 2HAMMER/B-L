Router.configure({
    layoutTemplate: 'application',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'index',
    template: 'auth'
});

Router.route('/admin', {
    name: 'dashboard',
    layoutTemplate: 'admin',
    template: 'dashboard'
});

Router.route('/admin/users/:id?', {
    name: 'users',
    layoutTemplate: 'admin',
    template: 'users',
    data: function () {
        return this.params.id;
    }
});

Router.route('/admin/groups', {
    name: 'groups',
    layoutTemplate: 'admin',
    template: 'groupsList'
});

Router.route('/admin/operations', {
    name: 'operations',
    layoutTemplate: 'admin',
    template: 'operationsList'
});

Router.route('/admin/settings', {
    name: 'settings',
    layoutTemplate: 'admin',
    template: 'settings'
});

var goToDashboard = function() {
    if (Meteor.user()) {
        Router.go('/admin');
    } else {
        this.next()
    }
};

Router.onBeforeAction(goToDashboard, {only: ['index']});
