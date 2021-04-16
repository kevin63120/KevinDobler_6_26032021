import {Profil} from "./photographers";
import{ProfilMedia} from "./photographers"
const sectionHeader = document.querySelector('.section_photograph_profil_container');
const main = document.querySelector('.container_media')
fetch("/data-profils/data-photographers.json")
.then(Response=>(Response.json()))
.then(data =>{
    const photographers = data;
    const pictures = data.media;
    photographers.photographers.forEach(photographer => {
        new Profil(photographer).personalPageHeader(sectionHeader);
        
        
    });
    photographers.photographers.forEach(photographer=>{
        if (Profil.id == ProfilMedia.idPhoto){
            ProfilMedia(photographer).personalPageMedia(main)
        }
    })
        
})

