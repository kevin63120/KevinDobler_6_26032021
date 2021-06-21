import './class/profil';
import { ProfilMedia } from './class/profil';

const linkPhotographerPage = document.querySelectorAll(".link_photographer-page");

const goToProfil = (e) => {
    let containerPage = document.querySelector("#container_article")
    e.preventDefault();
    e.stopPropagation()
    ProfilMedia().personalPageMedia(containerPage)
}

const openProfil = (e) => e.addEventListener("click", goToProfil);

linkPhotographerPage.forEach(openProfil);



// function backMain 

const returnButton = document.querySelector('.return_main');
export function displayButtonReturnMain () {
    window.addEventListener('scroll',(e)=>{
        console.log(scrollY)
        if(scrollY > 161){
            returnButton.classList.add('return_main-active')
            console.log('activé')
        }
        else{
            
            returnButton.classList.replace('return_main-active','return_main')
            console.log('desactivé')
        }
    })
}