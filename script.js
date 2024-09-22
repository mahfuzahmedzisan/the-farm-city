// Navigation  Menu

const menu = document.getElementById('menu')
const openMenu = document.getElementById('open-menu-btn')
const closeMenu = document.getElementById('close-menu-btn')
openMenu.addEventListener('click', ()=>{
    menu.style.display = "block"
    openMenu.style.display = "none"
    closeMenu.style.display = "block"
})
closeMenu.addEventListener('click', ()=>{
    menu.style.display = "none"
    openMenu.style.display = "block"
    closeMenu.style.display = "none"
})

// Right Menu 

const rightMenu = document.getElementById('right-menu')
const openRightMenu = document.getElementById('open-right-menu')
const closeRightMenu = document.getElementById('close-right-menu')
openRightMenu.addEventListener('click', ()=>{
    rightMenu.style.display = "flex"
    openRightMenu.style.display = "none"
    closeRightMenu.style.display = "block"
})
closeRightMenu.addEventListener('click', ()=>{
    rightMenu.style.display = "none"
    openRightMenu.style.display = "block"
    closeRightMenu.style.display = "none"
})


// Slider Section 

const slides = document.querySelector('.carousel-slides');
const slideCount = document.querySelectorAll('.slide').length;

let currentSlide = 0;
let slideInterval;

const showSlide = (i) => {
    if (i >= slideCount) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slideCount - 1;
    } else {
        currentSlide = i;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
};

const prevSlide = () => {
    showSlide(currentSlide - 1);
};

const nextSlide = () => {
    showSlide(currentSlide + 1);
};

const prevSlideShow = document.querySelector('.carousel-prev');
const nextSlideShow = document.querySelector('.carousel-next');

prevSlideShow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

nextSlideShow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, 3000); // Set to 3000ms (3 seconds) for a smoother experience
};

const stopAutoSlide = () => {
    clearInterval(slideInterval);
};

const createDots = () => {
    const dotsContainer = document.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            showSlide(i);
            stopAutoSlide();
            startAutoSlide();
        });
    }
    updateDots(); // Ensure the first dot is active when dots are created
};

const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

showSlide(currentSlide);
startAutoSlide();
createDots();
