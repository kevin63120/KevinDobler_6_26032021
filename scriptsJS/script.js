import { Profil } from "./photographers";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


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

 