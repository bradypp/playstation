window.addEventListener(
    'DOMContentLoaded',
    () => {
        const carousel = document.getElementById('carousel');
        // const carousel = document.querySelector('.home__grid__item__carousel');
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
    },
    false,
);
