Template.usersList.helpers({
    users: function () {
        return Meteor.users.find();
    },

    activeClass: function () {
        return Router.current().params.id == this._id ? 'info' : '';
    }
});

Template.usersList.events({
    'click tr': function () {
        Router.go('users', {id: this._id});
    }
});

Template.usersEdit.helpers({
    info: function () {
        return Meteor.users.findOne(Router.current().params.id);
    }
});
