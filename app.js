

$(document).ready(function () {

    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $(':input[type="submit"]').prop('disabled', false);
        }
     });

     function notify() {
        let value = $('#text-name').val();
        alert(value);
      }
      $("button").on( "click", notify );

})
