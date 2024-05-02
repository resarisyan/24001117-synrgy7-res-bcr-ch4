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

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  let owl = $('.owl-carousel');
  $('.next-btn').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.prev-btn').click(function () {
    owl.trigger('prev.owl.carousel');
  });
  $(owl).on('translated.owl.carousel', (event) => {
    if ($('.owl-prev').hasClass('disabled')) {
      $('.prev-btn').addClass('disabled');
    } else {
      $('.prev-btn').removeClass('disabled');
    }
    if ($('.owl-next').hasClass('disabled')) {
      $('.next-btn').addClass('disabled');
    } else {
      $('.next-btn').removeClass('disabled');
    }
  });

  $('.faq-item__question').click(function () {
    $(this).next().slideToggle();
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
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
