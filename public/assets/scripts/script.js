const
    loginBtn = document.querySelector('.nav-last button:nth-of-type(2)'),
    onClick = document.querySelector('.onClick'),
    arrow = document.querySelector('.onClick .toggle span'),
    tongues = document.querySelector('.tongues'),
    dismissal = document.querySelector('.dismissal'),
    links = document.querySelectorAll('.nav-links-container > ul > li:not(.nav-links-container > ul li:last-child)'),
    hiddenContents = document.querySelectorAll('.hidden-content'),
    heros = document.querySelectorAll('.hero [class^="div"]'),
    heroes = document.querySelector('.heroes'),
    indicators = document.querySelectorAll('.hero .indicators div'),
    displayToggles = document.querySelectorAll('.ghostly .display-toggles li:not(.ghostly._2 .display-toggles li)'),
    displays = document.querySelector('.ghostly .displays:not(.ghostly._2 .displays)'),
    sliders = document.querySelectorAll('.ghostly [class^="switch"]:not(.ghostly._2 [class^="switch"])'),
    displayToggles_2 = document.querySelectorAll('div._2 .display-toggles li'),
    displays_2 = document.querySelector('div._2 .displays'),
    sliders_2 = document.querySelectorAll('div._2 [class^="switch"]'),
    funnyImage = document.querySelectorAll('.funny-image'),
    parentGG = document.querySelector('.ghostly .parent'),
    clickToExpand = document.querySelectorAll('.v_2 .expand'),
    hiddenV2s = document.querySelectorAll('.v_2 [class^="d"]'),
    expandDivs = document.querySelectorAll('.v_2 .expand div'),
    helping = document.querySelector('.helping'),
    helpingFunnyImage = document.querySelector('.h-funny-image'),
    speed = document.querySelector('.speed'),
    speedFunnyImage = document.querySelector('.s-funny-image'),
    safeHands = document.querySelector('.safe-hands'),
    safeHandsFunnyImage = document.querySelector('.sh-funny-image');
let toggle = true,
    mon = 0,
    mon_2 = 0;

(() => {
    loginBtn.addEventListener('click', () => location.href = '/login');
})()

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
        clearTimeout(watcher);
        hiddenContents[index].style.display = 'flex';
    });
    hiddenContents[index].addEventListener('mouseout', () => {
        hiddenContents[index].style.display = 'none';
    });
});

(() => {
    let counter = 0;
    const indicate = (index) => {
        indicators.forEach(indicator => indicator.classList.remove('current'));
        indicators[index].classList.add('current');
    };
    let swiper = setInterval(() => {
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
                heroes.style.transform = `translate(${counter}, 0)`;
                clearTimeout(timer);
            }, 301);
        }
    }, 5000);
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(swiper);
            indicators.forEach(indicator => indicator.classList.remove('current'));
            indicator.classList.add('current');
            heroes.style.transform = `translate(${index == 0 ? 0 : index == 1 ? '-100' : '-200'}%, 0)`;
            index == 0 && (counter = 0);
            index == 2 ? (() => {
                let c = setTimeout(() => {
                    heroes.style.transform = `translate(-300 %, 0)`;
                    clearInterval(swiper);
                    indicators.forEach(indicator => indicator.classList.remove('current'));
                    indicators[0].classList.add('current');
                    counter = 0;
                    const inTime = setTimeout(() => {
                        heroes.style.transition = 'transform 0s';
                        heroes.style.transform = `translate(${counter}, 0)`;
                        swiper = setInterval(() => {
                            counter += 100;
                            heroes.style.transition = 'transform .3s';
                            heroes.style.transform = `translate(-${counter} %, 0)`;
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
                                    heroes.style.transform = `translate(${counter}, 0)`;
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
                    heroes.style.transform = `translate(-${counter} %, 0)`;
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
                            heroes.style.transform = `translate(${counter}, 0)`;
                            clearTimeout(timer);
                        }, 301);
                    }
                }, 5000);
        });
    });
})();

(() => {
    displayToggles.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            displayToggles.forEach(each => each.classList.remove('in-view'));
            toggle.classList.add('in-view');
            displays.style.transform = `translate(calc(-${index * 100}% - ${index * 20}px), 0)`;
            mon = index;
            index == 0 ?
                (sliders[0].style.backgroundColor = 'rgba(0, 238, 255, 0.259)',
                    sliders[1].style.backgroundColor = '#fff') :
                index == 3 ?
                    (sliders[1].style.backgroundColor = 'rgba(0, 238, 255, 0.259)',
                        sliders[0].style.backgroundColor = '#fff') :
                    sliders.forEach(slider => slider.style.backgroundColor = '#fff');
        });
    });

    sliders.forEach((slider, index) => {
        slider.addEventListener('click', () => {
            index == 0 ?
                (() => {
                    mon > 1 ? (() => {
                        displays.style.transform = `translate(calc(-${(mon - 1) * 100}% - ${(mon - 1) * 20}px), 0)`;
                        mon--;
                    })() :
                        mon == 1 && (() => {
                            displays.style.transform = `translate(0, 0)`;
                            mon--;
                        })();
                    displayToggles.forEach(each => each.classList.remove('in-view'));
                    displayToggles[mon].classList.add('in-view');
                    mon == 0 && (sliders[0].style.backgroundColor = 'rgba(0, 238, 255, 0.259)');
                    sliders[1].style.backgroundColor = '#fff';
                })() :
                (() => {
                    mon < 2 ? (() => {
                        displays.style.transform = `translate(calc(-${(mon * 100) + 100}% - ${(mon * 20) + 20}px), 0)`;
                        mon++;
                    })() :
                        mon == 2 && (() => {
                            displays.style.transform = `translate(calc(-${(mon + 1) * 100}% - ${(mon + 1) * 20}px), 0)`;
                            mon++;
                        })();
                    displayToggles.forEach(each => each.classList.remove('in-view'));
                    displayToggles[mon].classList.add('in-view');
                    mon == 3 && (sliders[1].style.backgroundColor = 'rgba(0, 238, 255, 0.259)');
                    sliders[0].style.backgroundColor = '#fff';
                })();
        });
    });
})();

(() => {
    let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
    let scrollPosition = 0;
    window.onscroll = () => {
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        window;
        if (document.documentElement.scrollTop >= (parentGG.scrollHeight - 400) && document.documentElement.scrollTop <= ((parentGG.scrollHeight + parentGG.clientHeight + 100))) {
            if (previousPosition < currentPosition) {
                currentPosition - previousPosition >= 1 && (scrollPosition -= 2.5),
                    funnyImage.forEach((image) => image.style.transform = `translate(0, ${(scrollPosition)}px)`);
            } else {
                previousPosition - currentPosition >= 1 && (scrollPosition += 2),
                    funnyImage.forEach((image) => image.style.transform = `translate(0, ${(scrollPosition)}px)`);
            }
        } else {
            funnyImage.forEach((image) => image.style.transform = `translate(0, 0)`);
            scrollPosition = 0;
        };
        previousPosition = currentPosition;
    };
})();

(() => {
    displayToggles_2.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            displayToggles_2.forEach(each => each.classList.remove('in-view'));
            toggle.classList.add('in-view');
            displays_2.style.transform = `translate(calc(-${index * 100}% - ${index * 20}px), 0)`;
            mon_2 = index;
            index == 0 ?
                (sliders_2[0].style.backgroundColor = 'rgba(0, 238, 255, 0.259)',
                    sliders_2[1].style.backgroundColor = '#fff') :
                index == 3 ?
                    (sliders_2[1].style.backgroundColor = 'rgba(0, 238, 255, 0.259)',
                        sliders_2[0].style.backgroundColor = '#fff') :
                    sliders_2.forEach(slider => slider.style.backgroundColor = '#fff');
        });
    });

    sliders_2.forEach((slider, index) => {
        slider.addEventListener('click', () => {
            index == 0 ?
                (() => {
                    mon_2 > 1 ? (() => {
                        displays_2.style.transform = `translate(calc(-${(mon_2 - 1) * 100}% - ${(mon_2 - 1) * 20}px), 0)`;
                        mon_2--;
                    })() :
                        mon_2 == 1 && (() => {
                            displays_2.style.transform = `translate(0, 0)`;
                            mon_2--;
                        })();
                    displayToggles_2.forEach(each => each.classList.remove('in-view'));
                    displayToggles_2[mon_2].classList.add('in-view');
                    mon_2 == 0 && (sliders_2[0].style.backgroundColor = 'rgba(0, 238, 255, 0.259)');
                    sliders_2[1].style.backgroundColor = '#fff';
                })() :
                (() => {
                    mon_2 < 2 ? (() => {
                        displays_2.style.transform = `translate(calc(-${(mon_2 * 100) + 100}% - ${(mon_2 * 20) + 20}px), 0)`;
                        mon_2++;
                    })() :
                        mon_2 == 2 && (() => {
                            displays_2.style.transform = `translate(calc(-${(mon_2 + 1) * 100}% - ${(mon_2 + 1) * 20}px), 0)`;
                            mon_2++;
                        })();
                    displayToggles_2.forEach(each => each.classList.remove('in-view'));
                    displayToggles_2[mon_2].classList.add('in-view');
                    mon_2 == 3 && (sliders_2[1].style.backgroundColor = 'rgba(0, 238, 255, 0.259)');
                    sliders_2[0].style.backgroundColor = '#fff';
                })();
        });
    });
})();

(() => {
    const switches = [false, false, false, false];
    clickToExpand.forEach((toggle, index) => {
        toggle.addEventListener('click', () => {
            !switches[index] ?
                (() => {
                    expandDivs.forEach(eD => eD.classList.remove('expand-div-clicked'));
                    expandDivs[index].classList.add('expand-div-clicked');
                    hiddenV2s.forEach(hd => hd.style.display = 'none');
                    hiddenV2s[index].style.display = 'block';
                    switches.fill(false);
                    switches[index] = true;
                })()
                :
                (() => {
                    hiddenV2s[index].style.display = 'none';
                    expandDivs[index].classList.remove('expand-div-clicked');
                    switches[index] = false;
                })();
        });
    });
})();

const actFunny = (parent) => {
    const func = (funnyImage) => {
        let previousPosition = window.pageYOffset || document.documentElement.scrollTop;
        let scrollPosition = 0;
        window.addEventListener('scroll', () => {
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
            window;
            if (document.documentElement.scrollTop >= (parent.scrollHeight - 400) && document.documentElement.scrollTop <= ((parent.scrollHeight + parent.clientHeight + 100))) {
                if (previousPosition < currentPosition) {
                    currentPosition - previousPosition >= 1 && (scrollPosition -= 2.5),
                        funnyImage.style.transform = `translate(0, ${(scrollPosition)}px)`;
                } else {
                    previousPosition - currentPosition >= 1 && (scrollPosition += 2),
                        funnyImage.style.transform = `translate(0, ${(scrollPosition)}px)`;
                }
            } else {
                funnyImage.style.transform = `translate(0, 0)`;
                scrollPosition = 0;
            };
            previousPosition = currentPosition;
        });
        return;
    };
    return func;
};

actFunny(helping)(helpingFunnyImage);
actFunny(speed)(speedFunnyImage);
actFunny(safeHands)(safeHandsFunnyImage);

