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
    export class lightBoxMediaFactory {
        constructor(name) {
            this.name = name || '';
        }
        getDOMELementFromMedia(media) {
            return media.image
                ? `<img src="/Sample Photos/${this.name}/${media.image}"  class="lightbox-img" aria-roledescription="image" alt="${media.title}" tabindex="0"> 
                <p class="lightbox_title_img" aria-label="titre d'image">${media.title}</p>`
                : `<video controls width="250"  class="video-controls" tabindex="-1" > <source src="/Sample Photos/${this.name}/${media.video}" alt="${media.video}" type="video/mp4" class="lightbox-video" aria-roledescription="video"  tabindex="0"></video> 
                <p class="lightbox_title_img" aria-label="titre d'image">${media.title}</p>`
        }
        getDOMELementFromUrl(url, altText) {
            const mediaType = url.split('.')[1];       
            return mediaType === 'jpg'
                ? `<img src="${url}" alt="${altText}"class="lightbox-img" >
                    <p class="lightbox_title_img" aria-label="titre d'image">${altText}</p>`
                : `<video controls width="250"  class="video-controls" tabindex="0"> <source src="${url}"   class="lightbox-video" tabindex = "0" type="video/mp4" alt="${altText}" aria-roledescription="video" tabindex = "0"></video>
                <p class="lightbox_title_img" aria-label="titre d'image">${altText}</p>`
        }
        displayMedia(media) {
            const containerImage = document.querySelector('.lightbox_container_image');
            containerImage.innerHTML = media;
        }
    
    }
    export class Lightbox {
        inititalize() {
            const mediaElement = document.querySelectorAll('.media_box');
            const mediaFactory = new lightBoxMediaFactory();
            let active = false;
            
            
    
            let curentMedia;
            let mediaList = [];
            let titleList = [];
    
            mediaElement.forEach(media => {
                mediaList.push(media.getAttribute("data-url"));
                titleList.push(media.getAttribute("data-title"));
                
            });
            [...mediaElement].forEach(singleMedia => {
                singleMedia.addEventListener('keydown', (e)=>{
                    if(e.key === "Enter" && active === false){
                        createLightbox();
                        active = true;
                        const title = singleMedia.getAttribute('data-title');
                    const url = singleMedia.getAttribute("data-url");
                    const mediaElement = mediaFactory.getDOMELementFromUrl(url, title);
                    mediaFactory.displayMedia(mediaElement);
                    console.log(titleList)    
                    curentMedia = url;
                    
                    navigation(curentMedia , titleList)
                    }
                    
                })
                
                singleMedia.addEventListener('click', (e) => {
                   if(active === false){
                        createLightbox()
                    active = true ;
                    const title = singleMedia.getAttribute('data-title')
                    const url = singleMedia.getAttribute("data-url");
                    const mediaElement = mediaFactory.getDOMELementFromUrl(url, title);
                    mediaFactory.displayMedia(mediaElement);
                    console.log(titleList)    
                    curentMedia = url;
                    navigation(curentMedia , titleList)
                   }
                })
    
            })
    
            function navigation(startElement , titleElement) {
                const buttonNext = document.querySelector('.lightbox_button_next');
                const buttonPrev = document.querySelector('.lightbox_button_prev');
                const lightboxContainer = document.querySelector('.lightbox-active')
                const lightboxTitle =document.querySelector('.lightbox_title_img')
                let curentElement = startElement;
                let nextElement;
                let newCurentElement;
    
                const nextMediaInLightbox = (e) => {
                    if (nextElement == undefined) {
                        curentElement = mediaList.indexOf(curentElement); 
                        curentElement++
                        nextElement = curentElement;
                        if(nextElement == curentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
    
                        }
                        const curentDisplayMedia = mediaFactory.getDOMELementFromUrl(mediaList[nextElement],titleList[nextElement])
                        return mediaFactory.displayMedia(curentDisplayMedia)
                    } if (nextElement == mediaList.length) {
                        nextElement = 0
                        newCurentElement = nextElement;
                        newCurentElement++
                        nextElement = newCurentElement;
                        newCurentElement = mediaList[nextElement];
                        if(nextElement == newCurentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
                        }
                        const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement], titleList[nextElement])   
                        return mediaFactory.displayMedia(url)
                    }
                    else {
                        newCurentElement = nextElement;
                        newCurentElement++
                        nextElement = newCurentElement;
                        newCurentElement = mediaList[nextElement];
                        if(nextElement == newCurentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
                            console.log(lightboxTitle)
                        }
                        const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement], titleList[nextElement])
                        return mediaFactory.displayMedia(url)
                    }
                }
    
    
                const prevMediaInLightbox = (e) => {               
                    if (nextElement == undefined) {
                        curentElement = mediaList.indexOf(curentElement);
                        curentElement--
                        nextElement = curentElement;
                        
                        if(nextElement == curentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
                        }
                        const curentDisplayMedia = mediaFactory.getDOMELementFromUrl(mediaList[nextElement],titleList[nextElement])
                        console.dir(curentDisplayMedia)
                        return mediaFactory.displayMedia(curentDisplayMedia)
    
                    } if (nextElement <= 0) {
                        nextElement = mediaList.length               
                        newCurentElement = nextElement;
                        newCurentElement--
                        nextElement = newCurentElement;
                        newCurentElement = mediaList[nextElement];
                        
                        if(nextElement == newCurentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
                            console.log(lightboxTitle)
                        }
                        const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement],titleList[nextElement])
                        return mediaFactory.displayMedia(url)
                    }
                    else {
                        newCurentElement = nextElement;
                        newCurentElement--
                        nextElement = newCurentElement;
                        newCurentElement = mediaList[nextElement];
            
                        if(nextElement == newCurentElement){
                            lightboxTitle.innerHTML=(titleElement[nextElement])
                        }
                        const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement],titleList[nextElement])
                        return mediaFactory.displayMedia(url)
                    }
                }
                function navWithMouse(){
                    const closeBtn = document.querySelector(".lightbox_button_close")
                    closeBtn.addEventListener("click",()=>{
                        lightboxContainer.remove();
                        active = false;
                    })
                }
                function navWithLightboxByKeyboard() {
                
                    document.addEventListener("keyup", (e) => {
                        if (e.key === "Escape") {
                          lightboxContainer.remove()
                          active = false;
                          
    
                        } else if (e.key === "ArrowRight") {
                            nextMediaInLightbox()
                        } else if (e.key === "ArrowLeft") {
                            prevMediaInLightbox()
                        }
                    })
                }
                
                buttonNext.addEventListener('click', nextMediaInLightbox);
                buttonPrev.addEventListener('click', prevMediaInLightbox);
                navWithLightboxByKeyboard()
                navWithMouse()
              
            }
        }
    }