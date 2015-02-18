var elementValueById = function(id) {
    var element = document.getElementById(id);
    if (!element)
        return null;
    else
        return element.value;
};

var trimmedElementValueById = function(id) {
    var element = document.getElementById(id);
    if (!element)
        return null;
    else
        return element.value.replace(/^\s*|\s*$/g, ""); // trim() doesn't work on IE8;
};

Template.auth.helpers({
    createAccount: function () {
        return Session.get('createAccount');
    }
});

Template.auth.events({
    'click #signin': function () {
        var email = trimmedElementValueById('login-email');
        var password = elementValueById('login-password');

        Meteor.loginWithPassword({email: email}, password, function (error, result) {
            if (error) {
                console.log(error);
            } else {
                console.log('success login')
            }
        });
    },

    'click #signup': function () {
        var options = {};
        options.email = trimmedElementValueById('login-email');
        options.password = elementValueById('login-password');

        Accounts.createUser(options, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('success create user');
            }
        });
    },

    'click .go-to-signin': function () {
        Session.set('createAccount', false);
    },

    'click .go-to-signup': function () {
        Session.set('createAccount', true);
    }

});
