const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const img = dropdown.querySelector('.img');
    const options = dropdown.querySelectorAll('.menu div');
    const selected = dropdown.querySelector('.selected');

     
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        img.classList.toggle('img-rotate');
        menu.classList.toggle('menu-open');
    });

});
const dropdownse = document.querySelectorAll('.dropdown__two');

dropdownse.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const menu = dropdown.querySelector('.menu');
    const foo__img = dropdown.querySelector('.foo__img');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

     
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        foo__img.classList.toggle('foo__img-rotate');
        menu.classList.toggle('menu-open');
    });

});

const products = document.querySelectorAll('.products__nav_right');

products.forEach(products__nav_right => {
    const rog__left = products__nav_right.querySelector('.rog__left');
    const option = products__nav_right.querySelectorAll('.rog__left');

     
    rog__left.addEventListener('click', () => {
        rog__left_middle.classList.toggle('rog__left_middle-rog__left_link');
    });

});
// options.forEach(options => {

//     options.addEventListener('click', () => {
//     selected.innerText = options.innerText;

//     select.classList.remove('select-clicked');
//     select.classList.remove('select-rotate');
//     menu.classList.remove('menu-open');

//     options.forEach(options => {
//         options.classList.remove('active');
//     });
//     options.classList.add('active');
//   });
// });


