Template.application.events({
    'touchstart #showMenu': function () {
        document.getElementById('perspective').classList.add('b-page_show-menu');
    },
    'touchstart #perspective': function () {
        return false;
    },
    'touchstart .b-page_show-menu .b-page__content': function () {
        document.getElementById('perspective').classList.remove('b-page_show-menu');
    }
});
