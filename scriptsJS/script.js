

// retrieved an items in the DOM for photograph card
const mainIndex = document.querySelector(".main_index");
const containerArticle = document.querySelector(".article-container");
const containerProfil = document.querySelectorAll(".container_photographs_profils")

const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");
const profilsPicture = document.getElementsByClassName('profil_picture').src = "Sample Photos\Photographers ID Photos\ ";
const photographName = document.querySelectorAll(".name");

const photographDescriptionContainer = document.querySelectorAll(".photograph_description");
const photographLocation = document.querySelectorAll('.photograph_location');
const photographDescription = document.querySelectorAll(".photograph_description-text");
const photographPricePerDay = document.querySelectorAll(".photograph_pricePerDay");

const photographFooterProfil = document.querySelectorAll(".photograph-tag");
const photographTagList = document.querySelectorAll(".photograph_tag-item");
const photographTagItems = document.querySelectorAll('.personal');




//creation de function de creation de profil

class Profils{
    constructor  (name, id, city, country, tags, tagline, price, portrait ){
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
        
    }    
}

function createProfilStructure (){
    const article =  containerArticle.appendChild(document.createElement("article"));
    const a = document.createElement("a");
    const containerDescription = document.createElement("div");
    const footerProfil =document.createElement("footer");
    const list = document.createElement("ul");
    

    article.classList.add("container_photographs_profils");
      article.appendChild(a).classList.add("link_photographer-page");
      article.appendChild(containerDescription).classList.add("photograph_description");
      article.appendChild(footerProfil).classList.add("photograph_tag");
      a.appendChild(document.createElement("img")).classList.add("profil_picture");
      a.appendChild(document.createElement("h2")).classList.add("name");
      containerDescription.appendChild(document.createElement("p")).classList.add("photograph_location");
      containerDescription.appendChild(document.createElement("p")).classList.add('photograph_description-text');
      containerDescription.appendChild(document.createElement("p")).classList.add('photograph_pricePerDay');
      footerProfil.appendChild(list).classList.add("photograph_tag-list");
      list.appendChild(document.createElement("li")).classList.add("photograph_tag-item")
      
}

const dataProfil = (selector , data , data2)=>{selector.innerHtml = data , data2}

let gars = new Profils("aaaaaaa");


//dataProfil(photographName,gars.name)


fetch("data-profils\data-photographers.json")
.then((response) => response.json())
.then(data => {
        
        const photographers = data.photographers;
        const pictures = data.media;
        
     photographers.forEach(photographer => {
      
        dataProfil(photographName,photographer.name)
        dataProfil(photographLocation,photographer.city,photographer.country)
        dataProfil(photographTagItems,photographer.tags)
        dataProfil(photographDescription,photographer.tagline)
        dataProfil(photographPricePerDay,photographer.price) 
        dataProfil(profilsPicture,photographer.portrait)
         createProfilStructure ()
      
        
       console.log(photographer)
      console.log(photographLocation,photographName,photographTagItems,photographDescription,photographPricePerDay,profilsPicture)   
     }); 
     
       
       
    
      
    });

 