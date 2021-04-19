//import class from photographer.js
import {Profil} from "./photographers";
import{ProfilMedia} from "./photographers";

//dom elements
const sectionHeader = document.querySelector('.section_photograph_profil_container');
const containerArticle = document.querySelector('.container_article');
const containerModal = document.querySelector('.container-modal');
const photographerName = document.querySelector("#photographer-name")



const headerProfil = (id) => {
         fetch("/data-profils/data-photographers.json")
         .then(Response=>(Response.json()))
         .then(data =>{
         
         const photographers = data;
         const profil = new Profil(photographers.photographers[id]);
        // const profilMedia = new ProfilMedia(photographers) 
       /* if(profil.id === profilMedia.idPhotographer){
             profilMedia.personalPageMedia(containerArticle)
         }else{
             containerArticle.innerHTML = "Aucune photo actuelement disponnible"
         }*/
         profil.personalPageHeader(sectionHeader);
         photographerName.innerHTML= profil.name;
        
      
    });
}


headerProfil(4);


