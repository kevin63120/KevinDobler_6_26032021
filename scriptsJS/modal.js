const buttonModalStart = document.querySelectorAll(".btn-contact");

const buttonModalClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")
const modalActive = false;
const openModal = (button)=>{ 
    button.addEventListener("click",(e)=>{
    modal.classList.replace('modal',"modal-active");
    
    modalActive= true;
    e.preventDefault()
    e.stopPropagation()
    if(modalActive){
        const main = document.querySelector(".container_media");
        main.style.opacity="0.5";
        modal.childNodes.style.opacity="1";
        
    }
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