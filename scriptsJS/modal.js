const buttonModalStart = document.querySelectorAll(".btn-contact");

const buttonModalClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")
let modalActive = false;
const openModal = (button)=>{ 
    button.addEventListener("click",(e)=>{
    modal.classList.replace('modal',"modal-active");
    
    modalActive= true;
    e.preventDefault()
    e.stopPropagation()
});
}

console.log(buttonModalClose , buttonModalStart );

// function to open modal 
buttonModalStart.forEach(openModal)



let closeModal = buttonModalClose.addEventListener("click",(e)=>{
   modal.classList.remove('modal-active');
   modal.classList.add('modal')
   e.preventDefault()
});