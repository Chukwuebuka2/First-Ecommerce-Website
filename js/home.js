// navbar

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {

    if (scrollY > 180){
        navbar.classList.add('bg');
    }else{
        navbar.classList.remove('bg');
    }
})

//image collage
const collagImages = [...document.querySelectorAll('.collage-img')]

collagImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collagImages.map((image, index) => {
            if (index != i){
                image.style.filter = 'blur(10px)';
                item.style.zIndex = 2;
            }
        })
    })

    item.addEventListener('mouseleave', () => {
        collagImages.map((image, index) => {
            image.style = null;
        })
    })
})