
import { lightBoxMediaFactory } from "./lightBox";
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
        this.altText = photographer.description;
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
            return `<li><a href="#" class="photograph_tag-item personal nav-item">#${tag}</a></li>`
        })

        // url for picture profil photographer
        const rootPhoto = '/Sample Photos/Photographers ID Photos/';

        const headerProfil = `
        <div id=first-part-header>
                <div class="photograph_profil-reference">
                    <div class="container-header">
                        <header>
                         <h1 class="name" id="name_personal_page">${this.name}</h1>
                         <button class="btn-contact btn-contact-1" type="button" aria-haspopup="dialog" >Contactez-moi</button>
                        </header>
                        <p class="photograph_location" id="location_personal_page">${this.city}${this.country ? ', ' + this.country : ''}</p>
                        <p class="photograph_description-text" id="description_personal_page">${this.tagline}</p>                       
                    </div>
                    <div>
                        <img src="${rootPhoto + this.portrait}" alt="${this.name}" class="profil_picture">
                    </div>
                </div>
                <div class="container_photograph_tag-list">
                    <ul class="photograph_tag-list">
                        ${tags.join('')}
                    </ul> 
                </div>
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
            const url = getMediaUrl(this.name, singleMedia )
            return `
                        <article class="media_box ${singleMedia.tags}" data-url = "${url}" data-title ="${singleMedia.title}">
                            <div class="media_item">
                            ${mediaFactory.getDOMELementFromMedia(singleMedia)}
                            </div>
                            <footer class="media_item-descripton">
                                <p class="media_item-title">${singleMedia.title}</p>
                                <p class="media_item-price"></p>
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





