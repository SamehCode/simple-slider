let sliderImages = document.getElementById('slider');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let bulletsContainer = document.getElementById('bullets');
let allImages = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
let currentslide = 1;
let allSlides = document.querySelectorAll('.slider-imgs .image'),
    allSlidesImgs = document.querySelectorAll('.slider-imgs .image img'),
    backImg = document.querySelector('.back-img');
let bullet,
    allBullets = bulletsContainer.children;
let allLis = document.querySelectorAll('ul.bullets li');
    

allImages.forEach((img, idx) => {
    bullet = `<li class='bullet' data-num='${idx + 1}'>${idx + 1}</li>`;
    bulletsContainer.innerHTML += (bullet)
})

bulletsContainer.children[0].classList.add('active')

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

//prev slide logic

function prevSlide () {
    currentslide--
    if(currentslide <= '0') {
        prevBtn.classList.add('disabled')
        currentslide = allImages.length + 1
        // return false
    }else {
        prevBtn.classList.remove('disabled')
        allSlides.forEach(slide => slide.classList.remove('active'));
        allSlides[currentslide - 1].classList.add('active')
        allSlidesImgs.forEach(img => img.classList.remove('active'));
        allSlidesImgs[currentslide - 1].classList.add('active')
        backImg.style.backgroundImage = 'url(' + './imgs/' + allImages[currentslide - 1] + '.jpg)';
        document.querySelectorAll('.bullet').forEach(bullet => bullet.classList.remove('active'))
        document.querySelectorAll('.bullet')[currentslide - 1].classList.add('active')
    }
}

function nextSlide () {
    currentslide++
    if(currentslide > allImages.length) {
        nextBtn.classList.add('disabled')
        currentslide = 0
        return false
    }else {
        nextBtn.classList.remove('disabled')
        allSlides.forEach(slide => slide.classList.remove('active'));
        allSlides[currentslide - 1].classList.add('active')
        allSlidesImgs.forEach(img => img.classList.remove('active'));
        allSlidesImgs[currentslide - 1].classList.add('active')
        backImg.style.backgroundImage = 'url(' + './imgs/' + allImages[currentslide - 1] + '.jpg)';
        document.querySelectorAll('.bullet').forEach(bullet => bullet.classList.remove('active'))
        document.querySelectorAll('.bullet')[currentslide - 1].classList.add('active')

    }
}


document.querySelectorAll('ul.bullets li').forEach(li => {
    li.addEventListener('click', (e) => {
        document.querySelectorAll('ul.bullets li').forEach(li => li.classList.remove('active'))
        e.target.classList.add('active')
        backImg.style.backgroundImage = 'url(imgs/' + allImages[e.target.dataset.num - 1] + '.jpg)';
        allSlides.forEach(slide => slide.classList.remove('active'))
        allSlides[e.target.dataset.num -1].classList.add('active')
        allSlidesImgs.forEach(img => img.classList.remove('active'))
        allSlidesImgs[e.target.dataset.num - 1].classList.add('active')
        currentslide = e.target.dataset.num - 1
    })
    
    } 
)
