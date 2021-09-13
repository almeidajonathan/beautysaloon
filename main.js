const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (let element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a');

for (let link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show');
    })
}


const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

/* Swiper | Carosel Testimonials */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/* ScrollReveal | Scroll Animation */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #sevices header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links
    footer .brand, footer .social`,
    { interval: 100 })

/* Button | back to top */
const btnBackToTop = document.querySelector('.back-to-top');

function backToTop() {
    if (window.scrollY >= 950) {
        btnBackToTop.classList.add('show');
    } else {
        btnBackToTop.classList.remove('show');
    }
}

/*  */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}


/* Scrolling */
window.addEventListener('scroll', function () {
    changeHeaderScroll();
    backToTop();
    activateMenuAtCurrentSection();
})