/**
 * Core
 *
 */

var frontend = {
    current:
    {
        language: $('html').attr('lang')
    },

    optionOnClick: function(){
        var disabled = $(this).find('input').prop('disabled') || $(this).closest('.input').find('input').prop('disabled');

        if(!disabled){
            $(this).closest('.input').find('input[type="radio"]').prop('checked', false);
            $(this).find('input[type="radio"]').prop('checked', true);
            $(this).find('input[type="radio"]').trigger('change');
        }
    }
};

/* GLOBAL */
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
         function getCookie(name) {
             var cookieValue = null;
             if (document.cookie && document.cookie !== '') {
                 var cookies = document.cookie.split(';');
                 for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                     break;
                 }
             }
         }
         return cookieValue;
         }
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     }
});
