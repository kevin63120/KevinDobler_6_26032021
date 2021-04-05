const buttonModalStart = document.querySelectorAll(".btn-contact");

const buttonModalClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal")

const openModal = (button)=>{ 
    button.addEventListener("click",(e)=>{
    modal.classList.replace('modal',"modal-active");
    modal.childNodes.style.opacity="1";
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