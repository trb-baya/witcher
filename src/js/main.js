let burger = $('.burger');
let nav = $('.header__nav');

burger.on('click', function () {
    nav.toggleClass('active');
    burger.toggleClass('active')
})