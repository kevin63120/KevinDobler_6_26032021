import "./profil";
import { Profil } from "./profil";



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
            return `<li class="photograph_tag-item personal nav-item">#${tag}</li>`
        })

        // url for picture profil photographer
        const rootPhoto = '/Sample Photos/Photographers ID Photos/';

        const headerProfil = `
                <div class="photograph_profil-reference">
                    <h1 class="name" id="name_personal_page">${this.name}</h1>
                    <p class="photograph_location" id="location_personal_page">${this.city}${this.country ? ', ' + this.country : ''}</p>
                    <p class="photograph_description-text" id="description_personal_page">${this.tagline}</p>
                </div>
                <button class="btn-contact btn-contact-1" aria-label="contact-me">Contactez-moi</button>
                <img src="${rootPhoto + this.portrait}" alt="" class="profil_picture">
                <div class="container_photograph_tag-list">
                    <ul class="photograph_tag-list" role="">
                        ${tags.join('')}
                    </ul> 
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

        const article = media.map(singleMedia => {
            const url = getMediaUrl(this.name, singleMedia)

            return `
                        <article class="media_box" data-url = "${url}">
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
            ? `<img src="/Sample Photos/${this.name}/${media.image}"  class="lightbox-img" aria-roledescription="image" aria-pressed="true" tabindex="0">`
            : `<video controls width="250" class="video-controls"> <source src="/Sample Photos/${this.name}/${media.video}" type="video/mp4" class="lightbox-video" aria-roledescription="video" aria-pressed="true" tabindex="0"></video>`
    }
    getDOMELementFromUrl(url) {

        const mediaType = url.split('.')[1]
        return mediaType === 'jpg'
            ? `<img src="${url}" class="lightbox-img" aria-pressed="true">`
            : `<video controls width="250"  class="video-controls"> <source src="${url}"   class="lightbox-video" type="video/mp4" aria-roledescription="video" aria-pressed="true"><video>`
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

        mediaElement.forEach(media => {
            mediaList.push(media.getAttribute("data-url"))

        });

        [...mediaElement].forEach(singleMedia => {
            singleMedia.addEventListener('click', (e) => {
                const url = singleMedia.getAttribute("data-url")
                const mediaElement = mediaFactory.getDOMELementFromUrl(url);
                mediaFactory.displayMedia(mediaElement);
                curentMedia = url;
                console.log(url + ' url dans la creation')
                navigation(curentMedia)
            })

        })

        function navigation(startElement) {
            const buttonNext = document.querySelector('.lightbox_button_next');
            const buttonPrev = document.querySelector('.lightbox_button_prev');
            const lightboxContainer = document.querySelector('.lightbox-active')
            let curentElement = startElement;
            let nextElement;
            let newCurentElement;
            console.log(curentElement, mediaList)

            const nextMediaInLightbox = (e) => {

                if (nextElement == undefined) {
                    console.log("va a l'element suivant")
                    curentElement = mediaList.indexOf(curentElement);
                    console.log(curentElement)
                    curentElement++
                    nextElement = curentElement;
                    console.log(nextElement + ' nextelement')

                    const curentDisplayMedia = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.dir(curentDisplayMedia)
                    return mediaFactory.displayMedia(curentDisplayMedia)



                } if (nextElement == mediaList.length) {
                    nextElement = 0
                    console.log(nextElement + 'nextelement')
                    newCurentElement = nextElement;
                    console.log(newCurentElement)
                    newCurentElement++
                    nextElement = newCurentElement;
                    newCurentElement = mediaList[nextElement];
                    console.log(newCurentElement + 'new')
                    console.log(nextElement)

                    const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.log(url + 'media list url')
                    return mediaFactory.displayMedia(url)
                }
                else {
                    console.log(nextElement + 'nextelement')
                    newCurentElement = nextElement;
                    console.log(newCurentElement)
                    newCurentElement++
                    nextElement = newCurentElement;
                    newCurentElement = mediaList[nextElement];
                    console.log(newCurentElement + 'new')
                    console.log(nextElement)


                    const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.log(url + 'media list url')
                    return mediaFactory.displayMedia(url)

                }


            }

            const prevMediaInLightbox = (e) => {

                console.log("va a l'element precedent");
                if (nextElement == undefined) {

                    console.log("va a l'element prev")
                    curentElement = mediaList.indexOf(curentElement);
                    console.log(curentElement)
                    curentElement--
                    nextElement = curentElement;
                    console.log(nextElement + ' prevelement')

                    const curentDisplayMedia = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.dir(curentDisplayMedia)
                    return mediaFactory.displayMedia(curentDisplayMedia)



                } if (nextElement <= 0) {
                    nextElement = mediaList.length
                    console.log(nextElement + 'prevElemente')
                    newCurentElement = nextElement;
                    console.log(newCurentElement)
                    newCurentElement--
                    nextElement = newCurentElement;
                    newCurentElement = mediaList[nextElement];
                    console.log(newCurentElement + 'new')
                    console.log(nextElement)


                    const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.log(url + 'media list url')
                    return mediaFactory.displayMedia(url)
                }
                else {
                    console.log(nextElement + 'nextelement')
                    newCurentElement = nextElement;
                    console.log(newCurentElement)
                    newCurentElement--
                    nextElement = newCurentElement;
                    newCurentElement = mediaList[nextElement];
                    console.log(newCurentElement + 'new')
                    console.log(nextElement)


                    const url = mediaFactory.getDOMELementFromUrl(mediaList[nextElement])
                    console.log(url + 'media list url')
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


