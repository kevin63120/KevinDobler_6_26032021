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