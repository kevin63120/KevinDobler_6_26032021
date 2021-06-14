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
const navlist = document.querySelector('.nav-list');
export function displayButtonReturnMain () {
    window.addEventListener('scroll',(e)=>{
        console.log(scrollY)
        if(scrollY >= 161){
            returnButton.classList.remove();
            returnButton.classList.add('return_main-active')
        }
        if(scrollY < 161){
            returnButton.classList.remove();
            returnButton.classList.add('return_main')
        }
    })
}