const password = 'FREEGAMES';

$('#password').on('focusin', () => {
  $('.arrow').css('display', 'inline-flex');
});

$('.arrow').on('click', () => {
  if($('#password').val().toUpperCase() === password) {
    $('.content').slideUp();
    $('.tbar').css('color', 'black').css('background-color', 'rgb(200,200,200)');
    $('.chrome').css('display', 'block');
    setTimeout(() => {
      // console.log("Delayed for 1 second.");
      window.location.href = '../../windows/index2.html';
    }, 500);
  } else {
      $('#password').effect("shake")  }
});
