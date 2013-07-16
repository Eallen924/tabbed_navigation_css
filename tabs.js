$(document).ready(function () {
  $('a').on('click', function(){
    $('li').removeClass('active');
    $('this').find('li').addClass('active');
  })
  // capture an event on the screen with jQuery, and then...
  //change the appearace of the page based on that click. 
});
