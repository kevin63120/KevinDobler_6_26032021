export function activeLightbox() {
    //DOM Elements
    const lightbox = document.querySelector(".lightbox");
    const pictures = document.querySelectorAll(".media_item");
    const closeButton = document.querySelector(".lightbox_button_close")
    const displayDefault =document.querySelector(".display-default");

    //function open or close lightbox if click to pictures nodes

    const OpenLightbox = () => {
        if (lightbox.classList.contains("lightbox")) {
            lightbox.classList.replace("lightbox", "lightbox-active");
            
            
        } else {
            lightbox.classList.replace("lightbox-active", "lightbox");
        }
    };
    //function close or close lightbox if click to button close nodes
    const CloseLightboxWithButton = () => {
        lightbox.classList.replace("lightbox-active", "lightbox");
        
    };
    const MoveButtonBykeyboard =  (e) => {
        if(e.key ==="Enter"){
            OpenLightbox()
        }
        
    }
    // event to open or close lightbox if click to pictures nodes
    pictures.forEach(picture => picture.addEventListener("click", OpenLightbox));
    pictures.forEach(picture => picture.addEventListener("keyup", MoveButtonBykeyboard));

    // event to close lightbox if click to button close
    closeButton.addEventListener("click", CloseLightboxWithButton);





}
