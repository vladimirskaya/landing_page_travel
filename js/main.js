(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    };
}());

// Burger header 
(function() {
    const burgerItem = document.querySelector('.burger'),
         menu = document.querySelector('.header__nav'),
         menuCloseItem = document.querySelector('.header__nav-close');
    console.log(burgerItem);
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })

}());


// // скрипт для анимации
// const elem = document.querySelector('.my-element');
// let startTime = null,
//     endPos = 500, // in px
//     duration = 2000; // in ms

// function render(time) {
//     console.log('вызов рендера');
//     if (time === undefined) {
//         time = new Date().getTime();
//     }
    
//     if (time === null) {
//         startTime = time;
//     }

//     elem.style.left = ((time - startTime) / duration * endPos % endPos) + 'px';

// }
// elem.addEventListener('click', () => {
//     (function animationLoop() {
//         render();
//         requestAnimationFrame(animationLoop, elem);
//     })();
// });
