'use strict';

$(function() {
    var current = '#main_menu_' + window.location.pathname.substr(1).split('/')[0];
    if ($(current).length > 0) {
        $(current).addClass('active');
    } else {
        $('#main_menu_home').addClass('active');
    }

    $('.locale_selector').click(function() {
      $.ajax('/language', {
          method: 'post',
          data: {
              lang: $(this).data('lang')
          },
          success: function() {
              console.log('Language sucessfully changed.');
              window.location.reload();
          },
          error: function() {
              console.log('Failed to change Language.');
          }
      });
    });
});
