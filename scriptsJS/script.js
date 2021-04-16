import { Profil } from "./photographers";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 




//dataProfil(photographName,gars.name)


fetch("/data-profils/data-photographers.json")
.then((response) => response.json())
.then(data => {
        
    const photographers = data;
   
        
    photographers.photographers.forEach(photographer => {
     
        new Profil(photographer).createProfilStructure(containerArticle);    
   
    })
     
    });

 