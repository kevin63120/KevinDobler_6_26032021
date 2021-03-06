//creation de function de creation de profil

export class Profil {
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
  
    createProfilStructure(rootElement) {

        const article = rootElement.appendChild(document.createElement("article"));
        //tags array chang for return new array on desktop list 
        const tags = this.tags.map(tag => {
            return `<li class="photograph_tag-item personal><span><a href="#">#${tag}</a></span></li>`
        })
        // url for picture profil photographer
        const rootPhoto = 'Sample Photos/Photographers ID Photos/';

        const card = `
        <a class="link_photographer-page"href="/photographer.html?id=${this.id}" >
            <img class="profil_picture" src="${rootPhoto + this.portrait}" alt="">
            <h2 class="name">${this.name}</h2>
        </a>
        <div class="photograph_description">
            <p class="photograph_location">${this.city}${this.country ? ', ' + this.country : ''}</p>
            <p class="photograph_description-text">${this.tagline}</p> 
            <p class="photograph_pricePerDay">${this.price}€/jour</p>  
        </div>
        <footer class="photograph_tag">
            <ul aria-label="photograph_tag-list" class="photograph_tag-list">
              ${tags.join('')}
            </ul>
        </footer>`

        article.classList.add("container_photographs_profils", ...this.tags);
        article.innerHTML = (card);

    }
}


