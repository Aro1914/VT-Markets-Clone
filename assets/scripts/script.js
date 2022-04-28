const onClick = document.querySelector('.onClick'),
    arrow = document.querySelector('.onClick .toggle span'), tongues = document.querySelector('.tongues'),
    dismissal = document.querySelector('.dismissal'),
    links = document.querySelectorAll('.nav-links-container > ul > li:not(.nav-links-container > ul li:last-child)'),
    hiddenContents = document.querySelectorAll('.hidden-content'),
    heros = document.querySelectorAll('.hero [class^="div"]'),
    heroes = document.querySelector('.heroes'),
    indicators = document.querySelectorAll('.hero .indicators div');
let toggle = true, s = 3;


[onClick, dismissal].forEach(el => el.addEventListener('click', () => {
    toggle = !toggle;
    toggle ?
        (
            arrow.classList.remove('arrow-up'),
            arrow.classList.add('arrow-down'),
            tongues.style.height = '0px',
            dismissal.style.display = 'none',
            tongues.style.transform = 'translate(0 , -20px)'
        )
        :
        (
            arrow.classList.remove('arrow-down'),
            arrow.classList.add('arrow-up'),
            tongues.style.height = '800px',
            dismissal.style.display = 'block',
            tongues.style.transform = 'translate(0 , 0)'
        );
}));

links.forEach((link, index) => {
    let watcher;
    link.addEventListener('mouseover', () => {
        clearTimeout(watcher);
        hiddenContents.forEach(content => {
            content.style.display === 'flex' && (isAnyDisplayed = true);
            content.style.display = 'none';
        });
        hiddenContents[index].style.display = 'flex';
    });
    link.addEventListener('mouseout', () => {
        watcher = setTimeout(() => {
            hiddenContents[index].style.display = 'none';
            hiddenContents[index].addEventListener('mouseover', () => {
                clearTimeout(watcher);
            });
        }, 2000);

    });
    hiddenContents[index].addEventListener('mouseover', () => {
        hiddenContents[index].style.display = 'flex';
    });
    hiddenContents[index].addEventListener('mouseout', () => {
        hiddenContents[index].style.display = 'none';
    });
});

(() => {
    let counter = 0;
    const indicate = (index) => {
        indicators.forEach(indicator => {
            indicator.classList.remove('current');
        });
        indicators[index].classList.add('current');
    };
    let swiper = setInterval(() => {
        counter += 100;
        heroes.style.transition = 'transform .3s';
        heroes.style.transform = `translate(-${counter}%, 0)`;
        switch (counter) {
            case 100:
                indicate(1);
                console.log(counter, 0);
                break;
            case 200:
                indicate(2);
                console.log(counter, 1);
                break;
            case 300:
                indicate(0);
                console.log(counter, 2);
                break;
            default:
                break;
        }
        if (counter == 300) {
            counter = 0;
            const timer = setTimeout(() => {
                heroes.style.transition = 'transform 0s';
                heroes.style.transform = `translate(${counter}, 0 )`;
                clearTimeout(timer);
            }, 301);
        }
    }, 5000);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(swiper);
            indicators.forEach(indicator => {
                indicator.classList.remove('current');
            });
            indicator.classList.add('current');
            heroes.style.transform = `translate(${index == 0 ? 0 : index == 1 ? '-100' : '-200'}%, 0 )`;
            index == 0 && (counter = 0);
            index == 2 ? (() => {
                let c = setTimeout(() => {
                    heroes.style.transform = `translate(-300%, 0 )`;
                    clearInterval(swiper);
                    indicators.forEach(indicator => {
                        indicator.classList.remove('current');
                    });
                    indicators[0].classList.add('current');
                    counter = 0;
                    const inTime = setTimeout(() => {
                        heroes.style.transition = 'transform 0s';
                        heroes.style.transform = `translate(${counter}, 0 )`;
                        swiper = setInterval(() => {
                            counter += 100;
                            heroes.style.transition = 'transform .3s';
                            heroes.style.transform = `translate(-${counter}%, 0)`;
                            switch (counter) {
                                case 100:
                                    indicate(1);
                                    break;
                                case 200:
                                    indicate(2);
                                    break;
                                case 300:
                                    indicate(0);
                                    break;
                                default:
                                    break;
                            }
                            if (counter == 300) {
                                counter = 0;
                                const timer = setTimeout(() => {
                                    heroes.style.transition = 'transform 0s';
                                    heroes.style.transform = `translate(${counter}, 0 )`;
                                    clearTimeout(timer);
                                }, 1000);
                            }
                        }, 5000);
                        clearTimeout(inTime);
                    }, 301);
                    clearTimeout(c);
                }, 4000);
            })() :
                swiper = setInterval(() => {
                    counter += 100;
                    heroes.style.transition = 'transform .3s';
                    heroes.style.transform = `translate(-${counter}%, 0)`;
                    switch (counter) {
                        case 100:
                            indicate(1);
                            console.log(counter, 0);
                            break;
                        case 200:
                            indicate(2);
                            console.log(counter, 1);
                            break;
                        case 300:
                            indicate(0);
                            console.log(counter, 2);
                            break;
                        default:
                            break;
                    }
                    if (counter == 300) {
                        counter = 0;
                        const timer = setTimeout(() => {
                            heroes.style.transition = 'transform 0s';
                            heroes.style.transform = `translate(${counter}, 0 )`;
                            clearTimeout(timer);
                        }, 301);
                    }
                }, 5000);
        });
    });
})();

