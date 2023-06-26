var testimonial = document.getElementById('testimonial1');
var bg_url = ''

console.log(testimonial)
console.log(bg_url)

testimonial.addEventListener('mouseenter', function() {
    console.log("hi")
    bg_url = document.querySelector('.swiper-slide-active img').getAttribute('src');
    testimonial.style.setProperty('--before-background-image', 'url('+ bg_url + ')');
})


testimonial.addEventListener('mouseleave', function() {
    console.log("bye")
    bg_url = document.querySelector('.swiper-slide-active img').getAttribute('src');
    testimonial.style.setProperty('--before-background-image', 'url(" ")');
})
