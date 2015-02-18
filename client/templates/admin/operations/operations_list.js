Template.operationsList.helpers({
    users: function () {
        return Meteor.operations.find();
    }
});
