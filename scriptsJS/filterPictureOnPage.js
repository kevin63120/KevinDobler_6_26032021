const optionSelectionButton = document.querySelector("#header_media_container-selected");
const optionSelectionList = document.querySelector("#list-option")
const options = document.querySelectorAll(".option-filter")
const optionActive = document.querySelector(".option-active")
const optionControler = document.querySelector(".option_active_container")
const dropDown = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    
    console.log("ca clique")
    if(optionSelectionList.classList.contains("hidden-options")){
        optionSelectionList.classList.replace("hidden-options","visible-options")
        
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
  let ariaLabelValue = option.classList.contains[0]  
  optionActive.innerHTML = option.innerHTML;
  optionSelectionList.classList.replace("visible-options","hidden-options")
  optionSelectionButton.setAttribute("aria-expend", false)
  optionControler.setAttribute("aria-label", ariaLabelValue)
  
  
 })   
});