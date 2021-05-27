import { PhotographPage } from "./class/photographerProfilPage";






export function modal (photographer) {

//Dom elements for the modal 
const buttonModalStart = document.querySelectorAll(".btn-contact");
const buttonModalClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")
const namePhotograher = document.querySelector("#photographer-name");

// fuction to open and close modal 
const openModal =(e)=>{
        modal.classList.replace('modal',"modal-active");
        e.preventDefault()
        e.stopPropagation()
        namePhotograher.innerHTML=photographer.name
        
    }

const closeModal = (e)=>{
    modal.classList.remove('modal-active');
    modal.classList.add('modal')
    e.preventDefault()
 };




 //event to opens every modals
const openModals = (e)=> e.addEventListener("click",openModal);
// function to open each modal 
 buttonModalStart.forEach(openModals)



//Event to close modal 
const close = buttonModalClose.addEventListener("click", closeModal);

}