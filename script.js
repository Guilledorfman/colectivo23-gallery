const gallery = document.getElementById("elements-cont")
const rightBtn = document.getElementById("right-btn")
const leftBtn = document.getElementById("left-btn")
const closeBtn = document.getElementById("close-btn")

const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')

modal.addEventListener('click', (e)=>{
    if(e.target === modal || e.target === closeBtn){
        showHideModal()
    }
})
function resetScroll(){
    gallery.scrollTo(0 ,0);
}

resetScroll()

rightBtn.addEventListener('click', ()=>{

    scrollRight()
    
})

leftBtn.addEventListener('click', ()=>{
    scrollLeft()
    
})
gallery.addEventListener('scroll', ()=>{
    let scrollPosition = gallery.scrollLeft + 650;
    scrollPosition >= gallery.scrollWidth ?  rightBtn.classList.add('disabled') : rightBtn.classList.remove('disabled');
    scrollPosition - 670 <= 0 ? leftBtn.classList.add('disabled') : leftBtn.classList.remove('disabled');
})
function checkLimits(){

}
function scrollRight(){
    let disabledBtn = false;
    let scrollPosition = gallery.scrollLeft + 200;

    if (scrollPosition < gallery.scrollWidth) {

        gallery.scrollTo(scrollPosition ,0);
    }
}

function scrollLeft(){
    let scrollPosition = gallery.scrollLeft - 200;

    if (scrollPosition > 0) {

        gallery.scrollTo(scrollPosition ,0);
    }
}

const photos= [
    {
        title: 'Mercurio',
        text: '3,7 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647988401/planetas/3D_Mercury_fradfc.png'
    },
    {
        title: 'Venus',
        text: '8,87 m/s²',
        img: "https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647985208/planetas/580b585b2edbce24c47b2712_tepz4h.png"
    },
    {
        title: 'Tierra',
        text: '9,80665 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647985252/planetas/5a00de530e8525eec2752fff_1_d0azny.png'
    },
    {
        title: 'Marte',
        text: '3,72076 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647985405/planetas/png_mars_planet_6479_n3fftn.png'
    },
    {
        title: 'Jupiter',
        text: '	24.79 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647985751/planetas/download-jupiter02-jupiter-gif-background-transparent-png-2725884_wzl4e9.png'
    },
    {
        title: 'Saturno',
        text: '10,44 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647986036/planetas/Saturnx_vn1kac.png'
    },
    {
        title: 'Urano',
        text: '8,69 m/s²',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647986302/planetas/pngwing.com_e5f4xd.png'
    },
    {
        title: 'Neptuno',
        text: '11,15 m/s²​',
        img: 'https://res.cloudinary.com/dxoqq4yvo/image/upload/v1647986212/planetas/3D_Neptune_amarze.png'
    }

]


photos.forEach((e, index)=>{
    let idIndex = index + 1;

    let galleryElement = document.createElement('div');
    galleryElement.className = 'gallery-element';
    galleryElement.id = (`galleryElement${idIndex}`)
    
    let imgCont =  document.createElement('div');
    imgCont.className = 'img-cont';

    let roundBackground =  document.createElement('div');
    roundBackground.className = 'background';

    let imgSrc =  document.createElement('img');
    imgSrc.id = (`imgSrc${idIndex}`)
    imgSrc.src = e.img;

    let info =  document.createElement('div');
    info.className= 'info';

    let title =  document.createElement('h2');
    title.id = (`title${idIndex}`)

    title.innerText = e.title;
    let description = document.createElement('p');
    description.id = (`description${idIndex}`)
    description.innerText = e.text;

    let cardBtn = document.createElement('button');
    cardBtn.addEventListener('click', ()=>{
        clickPhoto(idIndex)
    })

    info.appendChild(title)
    info.appendChild(description)

    imgCont.appendChild(roundBackground)
    imgCont.appendChild(imgSrc)

    galleryElement.appendChild(imgCont)
    galleryElement.appendChild(info)
    galleryElement.appendChild(cardBtn)

    gallery.appendChild(galleryElement)
})

function clickPhoto(id){

    let title = document.getElementById(`title${id}`).innerText;
    let description = document.getElementById(`description${id}`).innerText;
    let photo = document.getElementById(`imgSrc${id}`).src;

    createModal(title, description, photo);
}

function createModal(title, description, photo){
    showHideModal()
    modalTitle.innerText = title;
    modalText.innerText = description;
    modalImg.src = photo;
}

function showHideModal(){
    modal.classList.toggle('visible')
    
}