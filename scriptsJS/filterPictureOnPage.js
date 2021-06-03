import { likes } from "./scriptCounterHeart";
import './script';
import { retrieveData } from "./script";

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

export function optionSelected() {
    options.forEach(option => {
        option.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation()

            option.classList.add("active")
            optionActive.innerHTML = option.innerHTML;
            optionSelectionList.classList.replace("visible-options", "hidden-options")
            optionControler.setAttribute("aria-expanded", false)
            return optionActive.innerHTML
        })

    });
}

let  chevronActive =  (e) =>{
    if(optionSelectionList.classList.contains("visible-options")){
        console.log("petit poids")
       let chevron = document.querySelector('.chevron');
    chevron.style.transform = "180deg"; 
    }
    
}

optionSelectionList.addEventListener('click',chevronActive)

