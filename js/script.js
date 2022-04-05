new Swiper('.stocks-slider', {
    navigation: {
        nextEl: '.stocks-button-next',
        prevEl: '.stocks-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    mousewheel: {
        sensivity: 1,
    },
    slidesPerView: 2.5,
    slidesPerGroup: 1,
    spaceBetween: 150,
    breakpoints: {
        1122: {
            slidesPerView: 2.5,
        },
        968: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        776: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        576: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        }
    }
});

const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.header-list');
    iconMenu.addEventListener('click', function() {
        iconMenu.classList.toggle('active')
        menuBody.classList.toggle('active')
    })
}