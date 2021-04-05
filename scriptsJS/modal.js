const butonModalStart = document.querySelector(".btn-contact");

const X = document.querySelector(".X");
const modal = document.querySelector(".modal")


console.log(X , butonModalStart );
let openModal = butonModalStart.addEventListener("click",(e)=>{
    modal.classList.replace('modal',"modal-active");
    modal.childNodes.style.opacity="1";
    e.preventDefault()
    e.stopPropagation()
});


let closeModal = X.addEventListener("click",(e)=>{
   modal.classList.remove('modal-active');
   modal.classList.add('modal')
   e.preventDefault()
});