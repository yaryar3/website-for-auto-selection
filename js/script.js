//$('.whywe').fadeIn(1500);


$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });
  
  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  //modal
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
    $('.modal__close').on('click', function() {
     $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button__paket').on('click', function() {
      $('.overlay, #order').fadeIn('slow');
    });
   // $('.button_submit').on('click', function() {
    //  $('.overlay, #thanks').fadeIn('slow');
    //  $('#consultation, #order').fadeOut();
   // });
    //$(this) та кнопка на которую я щас нажал
     
  
    $('.button__paket').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__descr').text($('.tarif').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      })
    });
  
    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };
  
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

    
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //menu

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

  
  
  