import { likes } from "./scriptCounterHeart";

const optionSelectionButton = document.querySelector("#header_media_container-selected");
const optionSelectionList = document.querySelector("#list-option")
const options = document.querySelectorAll(".option-filter")
const optionActive = document.querySelector(".option-active")
const optionControler = document.querySelector("#option_active_container")

const dropDown = (e)=>{
    e.preventDefault();
    e.stopPropagation();

    if(optionSelectionList.classList.contains("hidden-options")){
        optionSelectionList.classList.replace("hidden-options","visible-options")
        optionControler.setAttribute("aria-expanded",true)
    }

    options.forEach(option=>{
        if(option.classList.contains("active")){
            option.classList.remove("active")
        } 
    })   
}

optionSelectionButton.addEventListener("click",dropDown)

options.forEach(option=> {
    option.addEventListener("click", (e)=>{
        e.preventDefault()
        e.stopPropagation()
        
         option.classList.add("active") 
         optionActive.innerHTML = option.innerHTML;
         optionSelectionList.classList.replace("visible-options","hidden-options")
         optionControler.setAttribute("aria-expanded",false)
         
    }) 

});

function sortNumber (a , b) {
    return a - b
}

export async function sortPicture ()  {
    // je récupère toute les image et video , je les place dans un tableau , je verifie les valeur quelle contienent et je les test par rappport a ma demande 
    let box = document.querySelectorAll(".media_box")
    const dates = document.querySelectorAll(".media_item-price")
    const titles = document.querySelectorAll(".media_item-title")
    const likes = document.querySelectorAll(".counter")
    console.log()
    optionControler.addEventListener("click", (e)=>{
       
            if(likes){
                
                likes.forEach(like=>{
                    console.log(optionActive)
                    console.log(like)

                })
                
            }if(titles){
                titles.forEach(title=>{
                    console.log(optionActive)
                    console.log(title)   
                })
            }if(dates){
                dates.forEach(date=>{
                    console.log(optionActive)
                    console.log("perdu")
                })
            }

        })
}
