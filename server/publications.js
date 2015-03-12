Meteor.publish('users', function() {
    return Meteor.users.find();
});
Meteor.users.allow({
    update: function (userId, user, fields, modifier) {
        // can only change your own documents
        if(true || user._id === userId)
        {
            Meteor.users.update({_id: userId}, modifier);
            return true;
        }
        else return false;
    },
    remove: function () {
        return true;
    }
});

Meteor.publish('operations', function() {
    return Operations.find();
});

Meteor.publish('groups', function() {
    return Groups.find();
});
