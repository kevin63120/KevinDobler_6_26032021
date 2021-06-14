 const containerLightbox = document.querySelector('.lightbox-container');
    export function createLightbox(){
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox-active')
    
    const lightboxHtml = `
    <button class="lightbox_button_prev lightbox-btn" aria-controls="lightbox_container_image" aria-label="précedent" tabindex="2">précedent</button>
    <button class="lightbox_button_close lightbox-btn" aria-controls="lightbox_container_image" aria-label="fermer" tabindex="3">fermer</button>
    <button class="lightbox_button_next lightbox-btn"  aria-controls="lightbox_container_image" aria-label="suivant" tabindex="1">suivant</button>
    <div class="lightbox_container_image">
        <img id="lightbox_picture-active" src="" alt="">
       
    </div>
    `
    lightbox.innerHTML=(createLightbox.innerHTML=(lightboxHtml))
    containerLightbox.appendChild(lightbox)

    }

export function activeLightbox() {
    //DOM Elements
    const lightbox = document.querySelector(".lightbox");
    const pictures = document.querySelectorAll(".media_item");
    const closeButton = document.querySelector(".lightbox_button_close")
    const containerPicture =document.querySelector(".lightbox_container_image");

    //function open lightbox if click to pictures nodes
   

    const OpenLightbox = () => {
        if (!lightbox) {
            
           
        } else {
           console.log("deja creer")
        }
    };
    //function close  lightbox if click to button close nodes
    const CloseLightboxWithButton = () => {
        lightbox.classList.replace("lightbox-active", "lightbox");    
    };
    const MoveButtonBykeyboard =  (e) => {
        if(e.key ==="Enter"){
         
        }
    }
    // event to open or close lightbox if click to pictures nodes
    pictures.forEach(picture => picture.addEventListener("click", OpenLightbox));
    pictures.forEach(picture => picture.addEventListener("keyup", MoveButtonBykeyboard));

    // event to close lightbox if click to button close
    //closeButton.addEventListener("click", CloseLightboxWithButton);
    
}
