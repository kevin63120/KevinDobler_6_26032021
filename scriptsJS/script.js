

// retrieved an items in the DOM for photograph card
const containerProfil = document.querySelector(".container_photographs_profils")
const photographName = document.querySelector(".name");
const photographLocation = document.querySelector('.photograph_location');
const photographDescription = document.querySelector(".photograph_description-text");
const photographPricePerDay = document.querySelector(".photograph_pricePerDay");
const photographTagItems = document.querySelectorAll('.personal');
const profilsPicture = document.querySelector('.profil-picture');
const photographDescriptionContainer = document.querySelector('.photograph_description');
const mainIndex = document.querySelector(".main_index");

console.log(mainIndex);


//creation de function de creation de profil

class Profil{
    constructor  (name, id, city, country, [tags], tagline, price, portrait ){
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = [tags];
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }
}
 //const createProfil = ()=>{mainIndex.appendChild(document.createElement("article")).classList.add("container_photographs_profils");};
 
 
     let createLink = document.createElement('a').classList.add('link_photographer-page')
     let createProfil = document.createElement("article").classList.add("container_photographs_profils");
     let createTitleCart = document.createElement("h2").classList.add("name");
     let createPhotographerDescription = document.createElement("div").classList.add("photograph_description");
     let createLocation = document.createElement("p").classList.add('photograph_location')
     let createDescription = document.createElement("p").classList.add("photograph_description-text")
    
    
/*createProfilType = ()=>{
    mainIndex.appendChild(document.createElement("article")).classList.add("container_photographs_profils");
    containerProfil.appendChild(document.createElement("div")).classList.add("photograph_description-text");

}*/




fetch("/data-profils/data-photographers.json")
    .then((response) => response.json())
    .then(data => {
        const photographs = data.photographers;
     
      for( let photographers of photographs){     
        
        photographers = [new profil(photographers.name,) ]

        }
    });

