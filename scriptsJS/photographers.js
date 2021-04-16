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

    //mehtod for index on website 
    createProfilStructure (rootElement){

    const article = rootElement.appendChild(document.createElement("article"));
    //tags array chang for return new array on desktop list 
    const tags = this.tags.map(tag=>{
        return `<li class="photograph_tag-item personal">#${tag}</li>`
    })
    // url for picture profil photographer
    const rootPhoto ='Sample Photos/Photographers ID Photos/';
    // create card for 

    const card = `
        <a class="link_photographer-page"href="/photographers_pages.html">
            <img class="profil_picture" src="${rootPhoto + this.portrait}" alt="photo de profil">
            <h2 class="name">${this.name}</h2>
        </a>
        <div class="photograph_description">
            <p class="photograph_location">${this.city}${this.country?  ',' + this.country : '' }</p>
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

    // method for create a personal page for photographers
    personalPageHeader (rootElement){

        const header = document.createElement("article");
        header.classList.add("photograph_profil_container");
        rootElement.appendChild(header);
        
         //tags array chang for return new array on desktop list 
        const tags = this.tags.map(tag=>{
        return `<li class="photograph_tag-item personal">#${tag}</li>`
        })

        // url for picture profil photographer
        const rootPhoto ='Sample Photos/Photographers ID Photos/';

        const headerProfil = `
            <div class="photograph_profil-reference">
                <h1 class="name" id="name_personal_page">${this.name}</h1>
                <p class="photograph_location" id="location_personal_page">${this.city}${this.country?  ',' + this.country : '' }</p>
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
    
    personalPageMedia (){
        const containerMedia = document.createElement("div").classList.add("media_item") ;
        const media = `
            <article class="media_box">
                <div class="media_item">
                    <img src="/Sample Photos/Ellie Rose/Architecture_Horseshoe.jpg" alt="image exemple">
                </div>
                <footer class="media_item-descripton">
                    <p class="media_item-title">arc-en-ciel</p>
                    <p class="media_item-price">70$</p>
                    <div class="media_item_likes_container">
                        <p class="counter"></p>
                        <img src="/Sample Photos/imageOfModel/Vectorheart.svg" alt="like" class="counter-btn" aria-pressed="true">
                    </div>
                </footer>
            </article>`;}
    personalPageModal (containerModal){
        const modalForm = `
            <form action="" method="post" class="form">
                    <header class="form_header">
                        <label>Contactez-moi</label>
                        <button type="button" class="close-modal" aria-label="close-modal"><img src="/Sample Photos/imageOfModel/x.svg"></img></button>
                        <h1 id="photographer-name">test test</h1>
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
        }       


    
    
}

