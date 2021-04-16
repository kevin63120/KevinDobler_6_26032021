import {Profil} from "./photographers";
const sectionHeader = document.querySelector('.section_photograph_profil_container');
fetch("/data-profils/data-photographers.json")
.then(Response=>(Response.json()))
.then(data =>{
    const profils = data.photographers;
    const pictures = data.media;
    profils.forEach(profil => {
        new Profil(profil).personalPageHeader(sectionHeader)
        console.log(profil)
    });
    
})

