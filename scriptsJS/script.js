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
        
        let links =  document.querySelectorAll(".link_photographer-page");
        
    
        /*links.forEach(link =>{
            link.addEventListener("click",(e)=>{
                e.preventDefault();
                e.stopPropagation;
                const URLProfilDefault = new URL("/", "http://localhost:1234/photographers_pages.html");
                const URLProfilDefaultSlash = new URL("http://localhost:1234/photographers_pages.html");
                const URLProfilPhotographer = new URL(photographer,URLProfilDefaultSlash);
                try{
                    URLProfilPhotographer;
                }catch(err)
                    {console.error(err);
                    }
        })
        
    
     }); */
        
   
    })
     
    });

 