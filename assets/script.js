// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});





var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px';
    }
    else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});




new PureCounter({

    selector: ".customer",
    start: 500,
    end: 800,
    duration: 2,
    delay: 10,
});


new PureCounter({

    selector: ".cctv",
    start: 250,
    end: 400,
    duration: 2,
    delay: 10,
});

new PureCounter({

    selector: ".biometric",
    start: 400,
    end: 600,
    duration: 2,
    delay: 10,
});

new PureCounter({

    selector: ".premises",
    start: 30,
    end: 50,
    duration: 2,
    delay: 10,
});
