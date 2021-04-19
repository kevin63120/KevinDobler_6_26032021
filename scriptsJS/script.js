import { Profil } from "./photographers";
import './profils-photographers';
import './pagesJs/HomePage';
import './pagesJs/pageProfils';

// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 



//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html



class PhotographPage {
    generatePage() {
        const root = document.querySelector('#root')
        // ...
        root.innerHTML = `ta page photographe...`
    }
}



fetch("/data-profils/data-photographers.json")
.then((response) => response.json())
.then(data => {
        
    const photographers = data.photographers;
   
        
    photographers.forEach(photographer => {
     
        new Profil(photographer).createProfilStructure(containerArticle);  
   
    })
     
    });

 
    //if (window.location.pathname === '/photographer_pages.html') {
    //new PhotographPage().generatePage()
//}