
export function modal(photographer) {

    //Dom elements for the modal 
    const buttonModalStart = document.querySelectorAll(".btn-contact");
    const buttonModalClose = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal")
    const namePhotograher = document.querySelector("#photographer-name");
    const containerGlobal = document.querySelectorAll(".containerg-global") 
    const submit = document.querySelector('#submit');
    const focusableElementsForm = [
        'button:not(.lightbox-btn)',
        'input:not([disabled])',
        
    ]
    const focusableElements = document.querySelectorAll(focusableElementsForm);
    const lastFocusableElement = focusableElements[2]
    
    const firstFocusableElement = focusableElements[3]
    // function to open and close modal
     
    const openModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        modal.classList.replace('modal', "modal-active");
        modal.setAttribute('aria-hidden','false');
        containerGlobal.forEach(el => {
            el.setAttribute('aria-hidden','true');    
        });
        if(!firstFocusableElement){
            return;
        }
        firstFocusableElement.focus();
        namePhotograher.innerHTML = photographer.name
    }

    const closeModal = (e) => {   
        modal.classList.remove('modal-active');
        modal.getAttribute('aria-hidden','true');
        containerGlobal.forEach(el => {
            el.getAttribute('aria-hidden','false');  
        });
        modal.classList.add('modal');
    };

    //event to opens every modals
    const openModals = (e) => e.addEventListener("click", openModal);
    // function to open each modal 
    buttonModalStart.forEach(openModals);

    //Event to close modal 
    buttonModalClose.addEventListener("click", closeModal);
    modal.addEventListener("keyup",(e)=>{
        if(e.key === "Escape"){
            closeModal();
        }if (e.target === submit && e.key === "Tab"){
            lastFocusableElement.focus();
        }   
    })

}