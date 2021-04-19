//creation de function de creation de profil

export class Profil{
    constructor  (photographer){
        this.name = photographer.name;
        this.id = photographer.id;
        this.city = photographer.city;
        this.country = photographer.country;
        this.tags = photographer.tags;
        this.tagline = photographer.tagline;
        this.price = photographer.price;
        this.portrait = photographer.portrait;
    
        
    } 
    
   

    
    createProfilStructure (rootElement){

    const article = rootElement.appendChild(document.createElement("article"));
    //tags array chang for return new array on desktop list 
    const tags = this.tags.map(tag=>{
        return `<li class="photograph_tag-item personal">#${tag}</li>`
    })

    // url for picture profil photographer
    const rootPhoto ='Sample Photos/Photographers ID Photos/';
    
    const card = `
        <a class="link_photographer-page"href="/photographers_pages.html">
            <img class="profil_picture" src="${rootPhoto + this.portrait}" alt="photo de profil">
            <h2 class="name">${this.name}</h2>
        </a>
        <div class="photograph_description">
            <p class="photograph_location">${this.city}${this.country?  ', ' + this.country : '' }</p>
            <p class="photograph_description-text">${this.tagline}</p> 
            <p class="photograph_pricePerDay">${this.price}</p>  
        </div>
        <footer class="photograph_tag">
            <ul aria-label="photograph_tag-list" class="photograph_tag-list">
              ${tags.join('')}
            </ul>
        </footer>`
      
      
      article.classList.add("container_photographs_profils");
      article.innerHTML=(card);
      
    }

     //method for create a personal page for photographers
   
    
    
    /*personalPageModal (containerModal){
        const rootPhoto ='/Sample Photos/Photographers ID Photos/';
        const modal = document.createElement("div");
        modal.classList.add("modal");

        const modalForm = `
            <form action="" method="post" class="form">
                    <header class="form_header">
                        <label>Contactez-moi</label>
                        <button type="button" class="close-modal" aria-label="close-modal"><img src="${rootPhoto + this.portrait}"></img></button>
                        <h1 id="photographer-name">${this.name}</h1>
                    </header>
                     <div class="form_item">
                         <label for="name" aria-labelledby="name">Prénom</label>
                         <input type="text" name="name" id="name" required>
                     </div>
                     <div class="form_item">
                         <label for="lastName" aria-labelledby="lastName" >nom</label>
                         <input type="text" aria-label="nom de famille"name="lastName" id="lastName" required>
                     </div>
                     <div class="form_item">
                         <label for="email" aria-labelledby="email">email</label>
                         <input type="email" aria-label="email" name="email" id="email">
                     </div>
                     <div class="form_item">
                         <label for="message" aria-labelledby="message">Votre message</label>
                        <input type="text" aria-label="votre message" name="message" id="message">
                     </div>
                     <input id="submit" type="submit" value="Envoyer">

                 </form>
            `
        containerModal.appendChild(modalForm);
        modal.innerHTML = (modalForm);
        }   */    


    
    
}

   

export class ProfilMedia extends Profil{
    constructor(media){
        super();
        this.idPhoto =  media.id;
        this.idPhotographer = media.photographerId;
        this.image   =  media.image;
        this.tags    =  media.tags;
        this.likes   =  media.likes;
        this.date    =  media.date;
        this.price   =  media.price;
    }

    

    personalPageMedia (containerArticles){
        const containerMedia = document.createElement("div");
        containerMedia.classList.add("media_item");
        containerArticles.appendChild(containerMedia);
        const mediabox = `
            <article class="media_box">
                <div class="media_item">
                    <img src="/Sample Photos/${this.name}/${this.image}" alt="photographie de ${this.name}">
                </div>
                <footer class="media_item-descripton">
                    <p class="media_item-title">${this.tags}</p>
                    <p class="media_item-price">${this.price}</p>
                    <div class="media_item_likes_container">
                        <p class="counter">${this.likes}</p>
                        <img src="/Sample Photos/imageOfModel/Vectorheart.svg" alt="like" class="counter-btn" aria-pressed="true">
                    </div>
                </footer>
            </article>`;
            console.log(mediabox)
        containerMedia.innerHTML = mediabox;
    }

}