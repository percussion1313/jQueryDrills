

$(document).ready(function () {


    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function () {
        if ($(this).val() != '') {
            $(':input[type="submit"]').prop('disabled', false);
        }
    });

    //alert function disabled
    /*function notify() {
       let value = $('#text-name').val();
       alert(value);
     }

     $("button").on( "click", notify );*/

    $('body').append($('<div></div>'));
    $('div').append($('<ul></ul>'));

    $("form").submit(function (element) {
        element.preventDefault();
        let value = $('#text-name').val();
        $('ul').append(`<li>${value}</li>`);
    })

    // mouseover item
    /*$(document).mouseover(function(){
      $("h2").mouseover(function(){
          $("h2").css(
              {'background-color' : 'lightblue',
              'border-radius': '1em',}
          );
      });
      $("h2").mouseout(function(){
          $("h2").css("background-color", "white");
      });
  });*/

    function randomColor() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor
    }

    $('ul').click(function (event) {
        console.log(event);
        $(event.target).css({ 'background-color': randomColor(), 'border-radius': '5px'});
    });

    $('ul').dblclick(function (event) {
        $(event.target).remove();
    });

})

