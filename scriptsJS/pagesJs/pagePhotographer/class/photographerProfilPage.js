
export class PhotographPage {

    constructor(photographer) {
        this.name = photographer.name;
        this.id = photographer.id;
        this.city = photographer.city;
        this.country = photographer.country;
        this.tags = photographer.tags;
        this.tagline = photographer.tagline;
        this.price = photographer.price;
        this.portrait = photographer.portrait;

        this.idPhoto = photographer.id;
        this.idPhotographer = photographer.photographerId;
        this.image = photographer.image;
        this.tags = photographer.tags;
        this.likes = photographer.likes;
        this.date = photographer.date;
        this.price = photographer.price;
        this.title = photographer.title;

    }

    createDetailPage(rootElement) {
        this.personalPageHeader(rootElement)
    }

    personalPageHeader(rootElement) {
        const header = document.createElement("article");
        header.classList.add("photograph_profil_container");
        rootElement.appendChild(header);
        //tags array chang for return new array on desktop list 
        const tags = this.tags.map(tag => {
            return `<li class="photograph_tag-item personal nav-item" tabindex="0   ">#${tag}</li>`
        })

        // url for picture profil photographer
        const rootPhoto = '/Sample Photos/Photographers ID Photos/';

        const headerProfil = `
        <div id=first-part-header>
                <div class="photograph_profil-reference">
                    <header>
                     <h1 class="name" id="name_personal_page">${this.name}</h1>
                     <button class="btn-contact btn-contact-1" type="button" aria-haspopup="dialog" aria-controls="dialog">Contactez-moi</button>
                    </header>
                    <p class="photograph_location" id="location_personal_page">${this.city}${this.country ? ', ' + this.country : ''}</p>
                    <p class="photograph_description-text" id="description_personal_page">${this.tagline}</p>
                </div>
                <div class="container_photograph_tag-list">
                    <ul class="photograph_tag-list" role="">
                        ${tags.join('')}
                    </ul> 
                </div>
        </div>
        <div>
            <img src="${rootPhoto + this.portrait}" alt="${this.name}" class="profil_picture">
        </div>
                `
        header.innerHTML = (headerProfil)
    }

    createContainerPicture(rootElement, media) {
        const mediaFactory = new lightBoxMediaFactory(this.name);

        function getMediaUrl(name, media) {
            return media.image
                ? `/Sample Photos/${name}/${media.image}`
                : `/Sample Photos/${name}/${media.video}`;
        }
        function getMediaTitle(media){
            return media.title        
        }
        const article = media.map(singleMedia => {
            const url = getMediaUrl(this.name, singleMedia)
            return `
                        <article class="media_box ${singleMedia.tags}" data-url = "${url}" data-title ="${singleMedia.title}">
                            <div class="media_item">
                            ${mediaFactory.getDOMELementFromMedia(singleMedia)}
                            </div>
                            <footer class="media_item-descripton">
                                <p class="media_item-title">${singleMedia.title}</p>
                                
                                <p class="media_item-price">${singleMedia.price} $</p>
                                <div class="media_item_likes_container">
                                    <p class="counter">${singleMedia.likes}</p>
                                    <img role="button"src="/Sample Photos/imageOfModel/Vectorheart.svg" alt="like button" class="counter-btn" aria-pressed="true" tabindex="0">
                                </div>
                            </footer>
                        </article>
                
                    `

        });
        rootElement.innerHTML = article.join('')

    }
}

class lightBoxMediaFactory {
    constructor(name) {
        this.name = name || '';
    }
    getDOMELementFromMedia(media) {
        return media.image
            ? `<img src="/Sample Photos/${this.name}/${media.image}"  class="lightbox-img" aria-roledescription="image" alt="${media.title}" tabindex="0"> 
            <p class="lightbox_title_img" aria-label="titre d'image">${media.title}</p>`
            : `<video controls width="250" class="video-controls"> <source src="/Sample Photos/${this.name}/${media.video}" alt="${media.video}" type="video/mp4" class="lightbox-video" aria-roledescription="video"  tabindex="0"></video> 
            <p class="lightbox_title_img" aria-label="titre d'image">${media.title}</p>`
    }
    getDOMELementFromUrl(url, altText) {
        const mediaType = url.split('.')[1];       
        return mediaType === 'jpg'
            ? `<img src="${url}" alt="${altText}"class="lightbox-img" >
                <p class="lightbox_title_img" aria-label="titre d'image">${altText}</p>`
            : `<video controls width="250"  class="video-controls"> <source src="${url}"   class="lightbox-video" type="video/mp4" alt="${altText}" aria-roledescription="video" $><video>
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
        let curentMedia;
        let mediaList = [];
        let titleList = [];

        mediaElement.forEach(media => {
            mediaList.push(media.getAttribute("data-url"));
            titleList.push(media.getAttribute("data-title"));
            
        });
        [...mediaElement].forEach(singleMedia => {
            singleMedia.addEventListener('click', (e) => {
                const title = singleMedia.getAttribute('data-title')
                const url = singleMedia.getAttribute("data-url");
                const mediaElement = mediaFactory.getDOMELementFromUrl(url, title);
                mediaFactory.displayMedia(mediaElement);    
                curentMedia = url;
                navigation(curentMedia , titleList)
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
            function navInLightboxByKeyboard() {
                document.addEventListener("keyup", (e) => {
                    if (e.key === "Escape") {
                        lightboxContainer.classList.replace("lightbox-active", "lightbox");

                    } else if (e.key === "ArrowRight") {
                        nextMediaInLightbox()
                    } else if (e.key === "ArrowLeft") {
                        prevMediaInLightbox()
                    }
                })
            }
            buttonNext.addEventListener('click', nextMediaInLightbox);
            buttonPrev.addEventListener('click', prevMediaInLightbox);
            navInLightboxByKeyboard()
        }
    }
}


