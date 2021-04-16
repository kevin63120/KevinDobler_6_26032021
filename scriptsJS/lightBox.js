<<<<<<< HEAD
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
=======
//DOM Elements
const lightbox = document.querySelector(".lightbox");
const pictures = document.querySelectorAll(".media_item");
const closeButton = document.querySelector(".lightbox_button_close")
//function open or close lightbox if click to pictures nodes
console.log(pictures)
const OpenOrCloseLightbox =() => {
    if(lightbox.classList.contains("lightbox")){
          lightbox.classList.replace("lightbox","lightbox-active")
    }else{
        lightbox.classList.replace( "lightbox-active" , "lightbox")
    }    
};
//function close or close lightbox if click to button close nodes
const CloseLightboxWithButton = () =>{
    lightbox.classList.replace( "lightbox-active" , "lightbox")   
}
// event to open or close lightbox if click to pictures nodes
pictures.forEach(picture => picture.addEventListener("click", OpenOrCloseLightbox));

// event to close lightbox if click to button close
closeButton.addEventListener("click",CloseLightboxWithButton);
>>>>>>> dynamiqueCarte
