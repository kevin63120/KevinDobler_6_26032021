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

    const tags = this.tags.map(tag=>{
        return `<li class="photograph_tag-item personal">#${tag}</li>`
    })

    const rootPhoto ='Sample Photos\Photographers ID Photos\'';

    const card = `
        <a class="link_photographer-page"href="/photographers_pages.html">
            <img class="profil_picture" src="${rootPhoto + this.name}.jpg" alt="photo de profil">
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
    
}