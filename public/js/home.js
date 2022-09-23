$(document).ready(function () {
    $('.close-popup-cart').click(function(){
        $('.show-detail-eye-popup-success').fadeOut(500);
    })
    $('.show-detail-eye-list-item-image').click(function (){
       var dataItem = ($(this).attr('src'));
       $('.image-root').attr('src', dataItem);
    });
    $('.show-detail-eye-list-item-image').click(function (){
        $(this).attr('src');
    });

    $('.show-detail-eye-popup').click((e) => {
       if ($(e.target).children(".show-detail-eye-popup__content").length === 0) {
          
      }else {
        $('.show-detail-eye-popup').fadeOut(500);
      }
    })

    $('.show-detail-eye-popup-success').click((e) => {
       if ($(e.target).children(".show-detail-eye-success-add").length === 0) {
          
      }else {
        $('.show-detail-eye-popup-success').fadeOut(500);
      }
    })
     
    $('.display-popup-success').click(() => {
        $('.show-detail-eye-popup-success').fadeIn(500);
        $(".show-detail-eye-popup-success").css("display","flex");
    })
    $('.display-popup').click(() => {
        $('.show-detail-eye-popup').fadeIn(500);
        $(".show-detail-eye-popup").css("display","flex");
    })
    $(".owl-carousel").owlCarousel();
    
});
$('.display-menu').click(function(){
    $('.top-nav__list').css('display', 'block');
    $('.over-layer').css('display', 'block');
})
$('.top-nav__list-mobile-close').click(function() {
    $('.top-nav__list').css('display', 'none');
    $('.over-layer').css('display', 'none');
})
$('.over-layer').click(function() {
    $('.top-nav__list').css('display', 'none');
    $('.over-layer').css('display', 'none');
})
$('.owl-carousel').owlCarousel({
    items: 1,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    dots: false,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },

        800: {
            items: 1,

        },
        1000: {
            items: 1,

        }
    }
});
