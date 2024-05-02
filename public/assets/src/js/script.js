AOS.init({ disable: 'mobile' });

$(document).ready(function () {
  // Preloader
  $('#spinner').show().animate({ opacity: 1 }, 500);
  $('main').css('opacity', 0);
  setTimeout(function () {
    $('#spinner').hide().animate({ opacity: 0 }, 500);
    $('main').show().animate({ opacity: 1 }, 500);
  }, 500);

  $('.btn-nav').click(function () {
    $('#mobile-menu').toggle();
  });

  $('.nav-link').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $(target).get(0).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
