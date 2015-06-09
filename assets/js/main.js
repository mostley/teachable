$(function() {
    var current = '#main_menu_' + window.location.pathname.substr(1).split('/')[0];
    if ($(current).length > 0) {
        $(current).addClass('active');
    } else {
        $('#main_menu_home').addClass('active');
    }
});
