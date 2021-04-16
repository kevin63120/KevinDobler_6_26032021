import { Profil } from "./photographers";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//let gars = new Profils("aaaaaaa");

const dataProfil = (selector , data , data2)=>{selector.innerHtml = data , data2}

//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html


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

 