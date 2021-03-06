
import '../../script';

const optionSelectionButton = document.querySelector("#header_media_container-selected");
const optionSelectionList = document.querySelector("#list-option")
const options = document.querySelectorAll(".option-filter")
const optionActive = document.querySelector(".option-active")
const optionControler = document.querySelector("#option_active_container")

const dropDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (optionSelectionList.classList.contains("hidden-options")) {
        optionSelectionList.classList.replace("hidden-options", "visible-options")
        optionControler.setAttribute("aria-expanded", true)
    }

    options.forEach(option => {
        if (option.classList.contains("active")) {
            option.classList.remove("active")
        }
    })
}

optionSelectionButton.addEventListener("click", dropDown)
optionSelectionButton.addEventListener("keydown",dropDown)

export function optionSelected(typeEvent) {
    options.forEach(option => {
        option.addEventListener(typeEvent, (e) => {
            if(e.key == "Enter" || typeEvent == "click"){
                e.preventDefault()
                e.stopPropagation()
                option.classList.add("active")
                optionActive.innerHTML = option.innerHTML;
                optionSelectionList.classList.replace("visible-options", "hidden-options")
            optionControler.setAttribute("aria-expanded", false)
            }
            

        })

    });
}



