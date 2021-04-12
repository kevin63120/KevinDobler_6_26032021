const imageMini = document.querySelectorAll('.img-lights');
const lightboxContainer = document.querySelector(".lightbox");
const lightboxCloseBtn =document.querySelector('#close-lightbox');


imageMini.forEach(image =>{
    image.addEventListener("click",(e)=>{
    lightboxContainer.classList.add("active-lightbox");
});
} )

lightboxCloseBtn.addEventListener("click",(e)=>{lightboxContainer.classList.replace("active-lightbox","lightbox")});