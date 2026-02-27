document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.onpageshow = function(event) {
    if (event.persisted) {
      location.reload(); // Reload the page when navigated back to
    }
  };

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.nav-bar').addClass('sticky-top');
    } else {
        $('.nav-bar').removeClass('sticky-top');
    }
});

// Dropdown on mouse hover
// $(document).ready(function () {
//     function toggleNavbarMethod() {
//         if ($(window).width() > 992) {
//             $('.navbar .dropdown').on('mouseover', function () {
//                 $('.dropdown-toggle', this).trigger('click');
//             }).on('mouseout', function () {
//                 $('.dropdown-toggle', this).trigger('click').blur();
//             });
//         } else {
//             $('.navbar .dropdown').off('mouseover').off('mouseout');
//         }
//     }
//     toggleNavbarMethod();
//     $(window).resize(toggleNavbarMethod);
// });


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


});