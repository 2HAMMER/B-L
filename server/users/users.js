Meteor.methods({
    userInsert: function (options) {
        return Accounts.createUser(options);
    }
});
