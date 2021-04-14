import { Profil } from "./photographers";


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







const dataProfil = (selector , data , data2)=>{selector.innerHtml = data , data2}

//let gars = new Profils("aaaaaaa");


//dataProfil(photographName,gars.name)


fetch("/data-profils/data-photographers.json")
.then((response) => response.json())
.then(data => {
        
    const photographers = data.photographers;
    const pictures = data.media;
        
    photographers.forEach(photographer => {
     
        new Profil(photographer).createProfilStructure(containerArticle);

        
        console.log(Profil)
    
     }); 
      
    });

 