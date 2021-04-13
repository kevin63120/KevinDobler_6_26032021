
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
    
    


   //creation de la structure de chaque profils de photographes

 createDomCard (rootElement){
  
  const article =  rootElement.appendChild(document.createElement("article"));
  const rootPhoto = "/Sample Photos/Photographers ID Photos/";
  const tags = this.tags.map(tag => {
    return `<li class="photograph_tag-item personal">#${tag}</li>`
  })
  const card =` 
  
      <a class="link_photographer-page"href="/photographers_pages.html">
          <img class="profil_picture" src="${rootPhoto + this.portrait}" alt="photo de profile ${this.name}">
          <h2 class="name">${this.name}</h2>
      </a>
    <div class="photograph_description">
        <p class="photograph_location">${this.city}${this.country? "," + this.country : ''}</p>
        <p class="photograph_description-text">${this.tagline}</p> 
        <p class="photograph_pricePerDay">${this.price}€</p>  
    </div>
    <footer class="photograph_tag">
        <ul aria-label="photograph_tag-list" class="photograph_tag-list index_photograph_tag-list">
            ${tags.join('')}
            
            </ul>
      </footer>
  `;

    article.innerHTML = card
 


    const a = document.createElement("a");
    const containerDescription = document.createElement("div");
    const footerProfil =document.createElement("footer");
    const list = document.createElement("ul");
   
   
    

      //article.classList.add("container_photographs_profils");
      //article.appendChild(a).classList.add("link_photographer-page");
      //article.appendChild(containerDescription).classList.add("photograph_description");
      //article.appendChild(footerProfil).classList.add("photograph_tag");
      //a.appendChild(document.createElement("img")).classList.add("profil_picture");
      //a.appendChild(document.createElement("h2")).classList.add("name");
      //containerDescription.appendChild(document.createElement("p")).classList.add("photograph_location");
      //containerDescription.appendChild(document.createElement("p")).classList.add('photograph_description-text');
      //containerDescription.appendChild(document.createElement("p")).classList.add('photograph_pricePerDay');
      //footerProfil.appendChild(list).classList.add("photograph_tag-list");
      //list.appendChild(document.createElement("li")).classList.add("photograph_tag-item")
      
} 
}