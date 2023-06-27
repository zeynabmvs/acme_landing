
const swiper = new Swiper('.swiper', {
    loop: true,

    // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

});

//  add customer's picture to testimonial's background
var testimonial = document.getElementById('testimonial1');
var bg_url = ''

testimonial.addEventListener('mouseenter', function() {
    bg_url = document.querySelector('.swiper-slide-active img').getAttribute('src');
    testimonial.style.setProperty('--before-background-image', 'url(../'+ bg_url + ')');
})

testimonial.addEventListener('mouseleave', function() {
    bg_url = document.querySelector('.swiper-slide-active img').getAttribute('src');
    testimonial.style.setProperty('--before-background-image', 'url(" ")');
})


