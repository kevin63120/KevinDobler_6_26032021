
export function modal(photographer) {

    //Dom elements for the modal 
    const buttonModalStart = document.querySelectorAll(".btn-contact");
    const buttonModalClose = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal")
    const namePhotograher = document.querySelector("#photographer-name");
    
    // function to open and close modal 
    const openModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        modal.classList.replace('modal', "modal-active");
        modal.setAttribute('tabindex',"1");
        namePhotograher.innerHTML = photographer.name

    }

    const closeModal = (e) => {
        e.preventDefault()
        modal.classList.remove('modal-active');
        modal.removeAttribute('tabindex')
        modal.classList.add('modal')
        
    };

    //event to opens every modals
    const openModals = (e) => e.addEventListener("click", openModal);
    // function to open each modal 
    buttonModalStart.forEach(openModals)



    //Event to close modal 
    const close = buttonModalClose.addEventListener("click", closeModal);

}