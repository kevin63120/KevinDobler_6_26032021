

// retrieved an items in the DOM for photograph card
/*const mainIndex = document.querySelector(".main_index");

const containerProfil = document.querySelectorAll(".container_photographs_profils")

const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");
const profilsPicture = document.querySelectorAll('.profil_picture');
const photographName = document.querySelectorAll(".name");

const photographDescriptionContainer = document.querySelectorAll(".photograph_description");
const photographLocation = document.querySelectorAll('.photograph_location');
const photographDescription = document.querySelectorAll(".photograph_description-text");
const photographPricePerDay = document.querySelectorAll(".photograph_pricePerDay");

const photographFooterProfil = document.querySelectorAll(".photograph-tag");
const photographTagList = document.querySelectorAll(".photograph_tag-item");
const photographTagItems = document.querySelectorAll('.personal');*/




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

function photographerDecriptionItems(){
    const location = document.createElement("p");
    const descriptionText = document.createElement("p");
    const descriptionPrice = document.createElement("p");
    
        const descriptionLocation = ()=>{photographDescriptionContainer.appendChild(location).classList("photograph_location")}
        const descriptionTxt = ()=>{photographDescriptionContainer.appendChild(descriptionText).classList("photograph_description-text")}
        const price = ()=>{photographDescriptionContainer.appendChild(descriptionPrice).classList("photograph_pricePerDay")}

    return descriptionLocation , price ,descriptionTxt 
}
function photographerDescription(){
     let containerdescritpion = ()=>{containerProfil.appendChild(document.createElement("div")).classList.add("photograph_description")}
     
   return containerdescritpion
}

function headProfil(){
    function pictureProfil(){
        return containerProfil.appendChild(document.createElement("img")).classList.add("profil_picture");}
    function nameProfil() {
        return containerProfil.appendChild(document.createElement("h2")).classList.add("name")}
        return pictureProfil(),nameProfil() 
}

function linkPage(){
    return containerProfil.appendChild(document.createElement("a")).classList.add("link_photographer-page")
}

const dataProfil = (selector , data)=>{selector.innerHTML = data}

let gars = new Profils("aaaaaaa");

//dataProfil(photographName,gars.name)


fetch("/data-profils/data-photographers.json")
    .then((response) => response.json())
    .then(data => {
        
        const photographers = data.photographers;
        const pictures = data.media;
        
       console.log(pictures)
     for (let photographer of photographers){
     
        const mainIndex = document.querySelector(".main_index");

        const containerProfil = document.querySelectorAll(".container_photographs_profils")
        
        const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");
        const profilsPicture = document.querySelectorAll('.profil_picture');
        const photographName = document.querySelectorAll(".name");
        
        const photographDescriptionContainer = document.querySelectorAll(".photograph_description");
        const photographLocation = document.querySelectorAll('.photograph_location');
        const photographDescription = document.querySelectorAll(".photograph_description-text");
        const photographPricePerDay = document.querySelectorAll(".photograph_pricePerDay");
        
        const photographFooterProfil = document.querySelectorAll(".photograph-tag");
        const photographTagList = document.querySelectorAll(".photograph_tag-item");
        const photographTagItems = document.querySelectorAll('.personal');
            

       
    const article =  mainIndex.appendChild(document.createElement("article"));
    const a = document.createElement("a");
    const containerDescription = document.createElement("div");
    const footerProfil =document.createElement("footer");
    const list = document.createElement("ul");
    const p = document.createElement("p")
    
      article.classList.add("container_photograph_profils");
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
      
      dataProfil(photographLocation,photographer.city)
       
      console.log(photographLocation)
       
    }
      
    });

 