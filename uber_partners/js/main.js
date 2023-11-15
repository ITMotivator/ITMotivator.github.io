"use strict"

let menuBars = document.querySelector('.nav_bars'),
menu = document.querySelector('.menu'),
menuItem = document.querySelectorAll('.menu_item');

menuBars.addEventListener('click', function () {
    this.classList.toggle('nav_bars_active');
    menu.classList.toggle('menu_open');
});

menuItem.forEach(item => {
    item.addEventListener('click', function() {
        menuBars.classList.toggle('nav_bars_active');
        menu.classList.toggle('menu_open');
    });
});
