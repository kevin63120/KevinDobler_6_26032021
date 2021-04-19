import { Profil } from "./photographers";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 



const dataProfil = (selector , data , data2)=>{selector.innerHtml = data , data2}

//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html


fetch("/data-profils/data-photographers.json")
.then((response) => response.json())
.then(data => {
        
    const photographers = data;
   
        
    photographers.photographers.forEach(photographer => {
     
        new Profil(photographer).createProfilStructure(containerArticle);    
   
    })
     
    });

 