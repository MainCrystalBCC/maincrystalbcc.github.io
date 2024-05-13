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
      // window.location.href = '../../windows/index2.html';
    }, 500);
  } else {
      $('#password').effect("shake")  }
});


function maxWindow() {
  var window = document.getElementById('test');
  if (!document.fullscreenElement) {
    window.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}
