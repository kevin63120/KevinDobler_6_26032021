<<<<<<< HEAD
import { Profil } from "./profil-photographer";
=======
import { Profil } from "./photographers";
>>>>>>> dynamiqueCarte


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");
<<<<<<< HEAD
const containerProfil = document.querySelector(".container_photographs_profils")
=======
>>>>>>> dynamiqueCarte


<<<<<<< HEAD
const photographDescriptionContainer = document.querySelectorAll(".photograph_description");
const photographLocation = document.querySelectorAll('.photograph_location');
const photographDescription = document.querySelectorAll(".photograph_description-text");
const photographPricePerDay = document.querySelectorAll(".photograph_pricePerDay");

const photographFooterProfil = document.querySelectorAll(".photograph-tag");
const photographTagList = document.querySelectorAll(".photograph_tag-item");
const photographTagItems = document.querySelectorAll('.personal');







/* dataProfil récupère le selecteur ciblé et renvoi les données selctionnées dans le selecteur*/
=======
//let gars = new Profils("aaaaaaa");
>>>>>>> dynamiqueCarte

const dataProfil = (selector , data , data2)=>{selector.innerHtml = data , data2}

//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html


fetch("/data-profils/data-photographers.json")
.then((response) => response.json())
<<<<<<< HEAD

.then((data) =>{
 
       
        const photographers = data.photographers;
        const pictures = data.media;
        
    photographers.forEach(photographer => {
        new Profil(photographer).createDomCard(containerArticle)

      
        //création d'une structure d'article qui est revoyé dans le fichier html avec les données 
         
      
        console.log(photographer) 
       // test de données 
      //console.log(photographLocation,photographName,photographTagItems,photographDescription,photographPricePerDay,profilsPicture)   
     }); 
     
=======
.then(data => {
        
    const photographers = data.photographers;
    const pictures = data.media;
        
    photographers.forEach(photographer => {
     
        new Profil(photographer).createProfilStructure(containerArticle);

        
        console.log(Profil)
>>>>>>> dynamiqueCarte
    
     }); 
      
    
      
    }); 

 