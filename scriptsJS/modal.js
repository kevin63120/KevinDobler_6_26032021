//Dom elements for the modal 
const buttonModalStart = document.querySelectorAll(".btn-contact");
const buttonModalClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")

// fuction to open and close modal 
  openModal =(e)=>{
        modal.classList.replace('modal',"modal-active");
        e.preventDefault()
        e.stopPropagation()
    }

const closeModal = (e)=>{
    modal.classList.remove('modal-active');
    modal.classList.add('modal')
    e.preventDefault()
 }


 //event to opens every modals
const openModals = (e)=> e.addEventListener("click",openModal);
// function to open each modal 
buttonModalStart.forEach(openModals)

//Event to close modal 
const close = buttonModalClose.addEventListener("click", closeModal);


async function modalOpening(){
    
}