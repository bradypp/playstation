window.addEventListener(
    'DOMContentLoaded',
    () => {
        const carousel = document.getElementById('carousel');
        if (carousel) {
            const items = carousel.children;
            const itemsLength = items.length;
            let itemIndex = 0;
            items[0].classList.add('home__grid__item__carousel-item--active');
            carousel.classList.add('home__grid__carousel-parent--animate');
            setInterval(() => {
                items[itemIndex % itemsLength].classList.remove(
                    'home__grid__item__carousel-item--active',
                );
                items[(itemIndex + 1) % itemsLength].classList.add(
                    'home__grid__item__carousel-item--active',
                );
                itemIndex++;
            }, 8000);
        }

        const burger = document.getElementById('header-burger');
        const menu = document.getElementById('menu');
        if (burger && menu && header) {
            burger.onclick = () => {
                burger.classList.toggle('header__main__burger--open');
                menu.classList.toggle('menu--open');
            };
            const menuEmpty = document.querySelector('.menu__empty');
            menuEmpty.onclick = () => {
                if (burger.classList.contains('header__main__burger--open')) {
                    burger.classList.remove('header__main__burger--open');
                }
                if (menu.classList.contains('menu--open')) {
                    menu.classList.remove('menu--open');
                }
            };
        }

        if (window.location.pathname !== '/') {
            const root = document.getElementById('root');
            if (root) {
                root.classList.add('u-scrollable');
            }
        }
    },
    false,
);
