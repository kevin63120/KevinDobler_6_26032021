
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
    console.log(focusableElements)
    const lastFocusableElement = focusableElements[7];

    const firstFocusableElement = focusableElements[3];


    // function to open and close modal

    const openModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        modal.classList.replace('modal', "modal-active");
        modal.setAttribute('aria-hidden', 'false');
        containerGlobal.forEach(el => {
            el.setAttribute('aria-hidden', 'true');
        });
        if (!firstFocusableElement) {
            return;
        }
        firstFocusableElement.focus();
        namePhotograher.innerHTML = photographer.name
    }

    const closeModal = (e) => {
        modal.classList.remove('modal-active');
        modal.getAttribute('aria-hidden', 'true');
        containerGlobal.forEach(el => {
            el.getAttribute('aria-hidden', 'false');
        });
        modal.classList.add('modal');
        if(focusableElements[1]){
            focusableElements[1].focus();
        }else{
            focusableElements[0].focus();
        }
    };

    //event to opens every modals
    const openModals = (e) => e.addEventListener("click", openModal);
    // function to open each modal 
    buttonModalStart.forEach(openModals);

    //Event to close modal 
    buttonModalClose.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escap") {
            closeModal();
        }
    })
    focusableElements.forEach(element => {

        element.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal();
            } else if (e.target === lastFocusableElement) {
                focusableElements[2].focus();
            }
        })
    })

    const retrieveDataUser = (e) => {
        e.preventDefault()
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.name === 'name' || input.name === 'lastName' || input.name === 'email' || input.name === 'message') {
                const value = input.value;
                console.log(value)
            }

        })
    }

    submit.addEventListener("click", retrieveDataUser)
    submit.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                if (input.name === 'name' || input.name === 'lastName' || input.name === 'email' || input.name === 'message') {
                    const value = input.value;
                    console.log(value)
                }
            })
        }
    })
}