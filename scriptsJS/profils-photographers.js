//import class from photographer.js
import {Profil} from "./class/profil";
import{ProfilMedia} from "./class/profil";

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
         profil.personalPageHeader(sectionHeader);
         photographerName.innerHTML= profil.name;
        
      
    });
}





