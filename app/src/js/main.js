let boot1 = document.querySelector('.boot1');
let boot2 = document.querySelector('.boot2');
let boot3 = document.querySelector('.boot3');
let big_img = document.querySelector('.big_img');
let price = document.querySelector('.header__intro__left__price h1');
let h1 = document.querySelector('.customer_h1');
let h11 = document.querySelector('.customer_h11');
let skidka = document.querySelector('.skidka p');
let boots = document.querySelectorAll('.boots');

boot1.addEventListener('click', () => {
    boot3.classList.remove('active')
    boot2.classList.remove('active')
    boot1.classList.add('active')
    big_img.setAttribute('src', './images/header__boot.webp')
    price.innerHTML = `Price : $125`
    h11.innerHTML = `17k`
    skidka.innerHTML = `25%`
    h1.innerHTML = `70k`
})

boot2.addEventListener('click', () => {
    boot1.classList.remove('active')
    boot3.classList.remove('active')
    boot2.classList.add('active')
    big_img.setAttribute('src', './images/header__boot2.webp')
    big_img.style = `width: 685px`
    price.innerHTML = `Price : $200`
    h1.innerHTML = `90k`
    h11.innerHTML = `20k`
    skidka.innerHTML = `10%`
})

boot3.addEventListener('click', () => {
    boot1.classList.remove('active')
    boot2.classList.remove('active')
    boot3.classList.add('active')
    big_img.setAttribute('src', './images/header__boot3.webp')
    big_img.style = `width: 685px`
    price.innerHTML = `Price : $250`
    h1.innerHTML = `80k`
    h11.innerHTML = `30k`
    skidka.innerHTML = `30%`
})

let stars = document.querySelectorAll('.star');

for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars.length; k++) {
            stars[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars[a].classList.add('active')
        }
    })
}

let stars2 = document.querySelectorAll('.star2');

for (let i = 0; i < stars2.length; i++) {
    const star = stars2[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars2.length; k++) {
            stars2[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars2[a].classList.add('active')
        }
    })
}

let stars3 = document.querySelectorAll('.star3');

for (let i = 0; i < stars3.length; i++) {
    const star = stars3[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars3.length; k++) {
            stars3[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars3[a].classList.add('active')
        }
    })
}
let stars4 = document.querySelectorAll('.star4');

for (let i = 0; i < stars4.length; i++) {
    const star = stars4[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars4.length; k++) {
            stars4[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars4[a].classList.add('active')
        }
    })
}

let stars5 = document.querySelectorAll('.star5');

for (let i = 0; i < stars5.length; i++) {
    const star = stars5[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars5.length; k++) {
            stars5[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars5[a].classList.add('active')
        }
    })
}

let stars6 = document.querySelectorAll('.star6');

for (let i = 0; i < stars6.length; i++) {
    const star = stars6[i];
    star.addEventListener('click', () => {
        let num_a = star.getAttribute('num-a')
        for (let k = 0; k < stars6.length; k++) {
            stars6[k].classList.remove('active')
        }

        for (let a = 0; a < num_a; a++) {
            stars6[a].classList.add('active')
        }
    })
}

let play = document.querySelector('.play');
let video = document.querySelector('.video');
let view__img = document.querySelector('.view__img');
let controls__play = document.querySelector('.controls__play');
let video_play = document.querySelector('.video_play');
let progress = document.querySelector('.controls__progress input');
let time = document.querySelector('.controls__time');
let wrapper = document.querySelector('.wrapper');

controls__play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video_play.classList.remove('fa-play')
        video_play.classList.add('fa-pause')
    } else {
        video.pause();
        video_play.classList.add('fa-play')
        video_play.classList.remove('fa-pause')
    }
})

video.addEventListener('timeupdate', () => {

    progress.value = (video.currentTime / video.duration) * 100

    let minute = Math.floor(video.currentTime / 60)
    if (minute < 10) {
        minute = '0' + String(minute)
    }

    let seconds = Math.floor(video.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }

    time.innerHTML = `${minute}:${seconds}`
})

progress.addEventListener('change', () => {
    video.currentTime = (progress.value * video.duration) / 100
})

let media_680 = window.matchMedia("(max-width: 680px)")
let media_550 = window.matchMedia("(max-width: 550px)")
let media_450 = window.matchMedia("(max-width: 450px)")
let media_350 = window.matchMedia("(max-width: 350px)")

play.addEventListener('click', video_play_click);
view__img.addEventListener('click', video_play_click);

function video_play_click() {
    wrapper.style.zIndex = `100`
    video.play();
    view__img.style = `height: 340px;`
    media(media_680);
    space()
}

function space() {
    let trueOrFalse = true
    window.addEventListener('keyup', function (e) {
        if (e.code == 'Space') {
            if (trueOrFalse) {
                video.pause()
                video_play.classList.add('fa-play')
                video_play.classList.remove('fa-pause')
                trueOrFalse = false
            } else {
                video.play();
                video_play.classList.remove('fa-play')
                video_play.classList.add('fa-pause')
                trueOrFalse = true
            }
        }
    })
}

function media(media_680) {
    if (media_680.matches) {
        view__img.style = `height: 241px;`
    }
    if (media_550.matches) {
        view__img.style = `height: 191px;`
    }
    if (media_450.matches) {
        view__img.style = `height: 168px;`
    }
    if (media_350.matches) {
        view__img.style = `height: 118px;`
    }
}

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video_play.classList.remove('fa-play')
        video_play.classList.add('fa-pause')
    } else {
        video.pause();
        video_play.classList.add('fa-play')
        video_play.classList.remove('fa-pause')
    }
})

const player = document.querySelector('.player');

video.addEventListener('dblclick', () => {
    wrapper.classList.toggle('active')
    if (wrapper.classList.contains('active')) {
        body.style = `overflow: hidden`
    }else {
        body.style = `overflow: visibly`
    }
})

var swiper = new Swiper(".sw-1", {
    effect: "flip",
    grabCursor: true,
    loop: true
});

var swiper = new Swiper(".sw-2", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop: true
});

const menu = document.querySelector('.menu');
const header__right = document.querySelector('.header__right');
let body = document.querySelector('body');
let header = document.querySelector('.container');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        header__right.style = `right: 0px`;
        body.style = `overflow: hidden`;
    } else if (menu.classList.item('active')) {
        header__right.style = `right: -100%`;
        body.style = `overflow: visibly`;
    }
});