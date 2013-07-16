$(document).ready(function () {
  //default to show #tab1
  $('#tab1').show();
  // identify click
  $('a').on('click', function(){
    // hide all tabs
    $('li').removeClass('active');
    // 'show' tab by adding back class actice of tab that was clicked
    var tabClicked = $(this).attr('href');
    $(this).closest('li').addClass('active');
    // hide text with id=tag#
    $('.tab').hide();
    // show tab with the div.id = a.href of the clicked link
    $(tabClicked).show();

  });
  // capture an event on the screen with jQuery, and then...
  //change the appearace of the page based on that click. 
});
