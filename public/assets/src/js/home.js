$(document).ready(function () {
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
});
