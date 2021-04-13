const imageMini = document.querySelectorAll('.img-lights');
const lightboxContainer = document.querySelector(".lightbox");
const lightboxCloseBtn =document.querySelector('#close-lightbox');


imageMini.forEach(image =>{
    image.addEventListener("click",()=>{
lightboxContainer.classList.add("active-lightbox");
    console.log(lightboxContainer)
});
} )

lightboxCloseBtn.addEventListener("click",()=>{lightboxContainer.classList.replace("active-lightbox","lightbox")});