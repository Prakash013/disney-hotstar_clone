const carousel = document.querySelector('.carousel');
let sliders = []

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    // Creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Attaching all elements

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content)
    slide.appendChild(imgElement)
    carousel.appendChild(slide);

    //Setting up image

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // Setting elements classname

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // Adding sliding Effect

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


// VIdeo Cards

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
    let video = item.children[1];
    video.play();
    })

    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
        })
})


// Card sliders

let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i)=>{
    let containerDimensions = item.getBoundingClientReact();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})
