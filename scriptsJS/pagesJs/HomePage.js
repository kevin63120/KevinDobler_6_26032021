import '../photographers';
import { ProfilMedia } from '../photographers';

const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");

const goToProfil =(e)=>{
        let containerPage = document.querySelector("#container_article")
            e.preventDefault(); 
            e.stopPropagation()
            ProfilMedia().personalPageMedia(containerPage)
            
            }

const openProfil = (e) => e.addEventListener("click",goToProfil); 

linkPhotographerPage.forEach(openProfil);
 

