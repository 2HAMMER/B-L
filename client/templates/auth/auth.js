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

Template.auth.events({
    'click .social-buttons__button_vk': function () {
        Meteor.loginWithVk({}, function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('success login')
            }
        });
    }
});

