import { Profil } from "./class/profil";
import './tags-selected';
import {PhotographPage} from "./class/photographerProfilPage";
import './pagesJs/HomePage';
import './pagesJs/pageProfils';
import './scriptCounterHeart';
import './modal';
import './lightBox';
import {checkedDataTag} from "./tags-selected";
import './filterPictureOnPage';
import { likes } from "./scriptCounterHeart";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 



//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html

if (window.location.pathname === '/'){
    UserIndexProfils()
}else{
    // /photographers/243
    const photographerId = window.location.pathname.split("/")[2];
    console.log({photographerId})
    displayPhotographerPage(Number(photographerId))
}


export async function retrieveData () {
    try{
        let response = await fetch("/data-profils/data-photographers.json")
        if(!response.ok){
            throw new Error("quelque chose a planté ")
        }
        return response.json()
    }catch(e){
        throw new Error(e)
    }
}

// profil photographe de la page d'acceuil (recupération et affichage)


async function UserIndexProfils(){
    try{
        const data = await retrieveData()          
            let photographers = data.photographers;
            
            photographers.forEach(photographer => {  
              new Profil(photographer).createProfilStructure(containerArticle,data);  
              
            })
            checkedDataTag()      
        } catch(err){
        console.log(err)
         }
    }       


async function displayPhotographerPage(photographerId) {
     try{
        const data = await retrieveData()
        const photographers = data.photographers;
        const media = data.media;
        
        const profilPage = document.querySelector(".individual_body-close")
        profilPage.classList.remove("individual_body-close");
        profilPage.classList.add('individual_body-active')

        const photographer = photographers.find(p => p.id === photographerId);
        const container = document.querySelector(".section_photograph_profil_container")
        const picturesContainer =  document.querySelector(".container_article"); 
        const photographerMedia = media.filter(m=> m.photographerId === photographerId)

        const photographerPage = new PhotographPage(photographer)
        photographerPage.personalPageHeader(container)
        photographerPage.createContainerPicture(picturesContainer ,photographerMedia)
        console.log({photographer})
        likes({photographer}, media)


     }catch(err){
        console.log(err)
         }
    
}



        
    




    




