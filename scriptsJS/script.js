import { Profil } from "./photographers";
import './profils-photographers';
import {PhotographPage} from "./class/photographerProfilPage";
import './pagesJs/HomePage';
import './pagesJs/pageProfils';
import './scriptCounterHeart';
import './modal';
import './lightBox';



// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 



//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html


// test de fecth dans une fonction async
const getUsers = async function () {
    try{
        let response = await fetch("/data-profils/data-photographers.json")
    if(response.ok){
        let data = await response.json()
    console.log(data)
    }else{
        console.error("retour du serveur",response.status)
    }
    
    } catch(err){
        console.log(err)
    }
    
}

// profil photographe de la page d'acceuil (recupération et affichage)

const UserIndexProfils = async function(){
    try{
        let response = await fetch("/data-profils/data-photographers.json")
        if(response.ok){
            let data = await response.json()
            let photographers = data.photographers;
            let pictures = data.media;

            photographers.forEach(photographer => {
                
              new Profil(photographer).createProfilStructure(containerArticle,data);  
                console.log(photographer)

                // ouverture / fermeture de la page profil
                let profils = document.querySelectorAll('.link_photographer-page')
                
                let profilPage = document.querySelector(".individual_body-close")
                let linkIndex = document.querySelector(".link-homepage")

                //container article picture 
                const containerPicturePhotographers = document.querySelector(".container_article"); 
                
                let profilsPageOpen = (e)=>{
                
                    e.preventDefault()
                    e.stopPropagation()
                    profilPage.classList.remove("individual_body-close");
                    profilPage.classList.add('individual_body-active')
                    let containerArticle = document.querySelector(".section_photograph_profil_container")
                    new PhotographPage(photographer).personalPageHeader(containerArticle)
                  
                    
                    /*creation des filtre */
                   let images = pictures.filter(image => image.photographerId == photographer.id)
                    
                    new PhotographPage(photographer).createContainerPicture(containerPicturePhotographers,images)
                 debugger
                }
                let openProfils = (e) => e.addEventListener("click",profilsPageOpen )

                profils.forEach(openProfils)


                let returnHomePage = (e)=>{

                    e.preventDefault
                    profilPage.classList.remove('individual_body-active');
                    profilPage.classList.add('individual_body-close');


                }
                /*fin de la page de profils*/

                linkIndex.addEventListener("click",returnHomePage)
                //************************************************ */

            
            


            })
            
            
            
            


        }else{
            console.error("retour du serveur",response.status)
        }

    } catch(err){
        console.log(err)
    }
}



//profil de photographe pour la page personel recuperation et renvoi 

const UserPersonalPage  = async function(){
    try{
        let response= await response.json()
        if(response.ok){
            let data = await response.json();
            let profils = document.querySelectorAll('.link_photographer-page')
            console.log(profils)
            
        }
    }catch(err){
        console.log(err)
    }
}

UserIndexProfils()

//fetch("/data-profils/data-photographers.json")
//.then((response) => response.json())
//.then(data => {        
//    const photographers = data.photographers;
//    
//     
//})

 
    //if (window.location.pathname === '/photographer_pages.html') {
    //new PhotographPage().generatePage()
//}