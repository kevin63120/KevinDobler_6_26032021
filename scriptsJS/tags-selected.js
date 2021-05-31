import {UserIndexProfils} from "./script";









export  function checkedDataTag()  {
    let previousValue;
    const listSelectorTag = document.querySelectorAll(".nav-item");
    const cartPhotographer = document.querySelectorAll(".container_photographs_profils");
    

    listSelectorTag.forEach(selectorTag => {
        selectorTag.addEventListener("click",(e)=>{
        
           listSelectorTag.forEach(tag=>tag.classList.remove("active"))
           selectorTag.classList.add("active")
            
            const value = e.target.innerHTML.replace('#', ''); 
          
            if(previousValue === value){
                cartPhotographer.forEach(article =>{
                    article.removeAttribute('style')
                    
                })
                return;
            }

            previousValue = value;
            console.log(value)
            cartPhotographer.forEach(article=>{
                if(article.classList.contains(value)){
                    
                    article.removeAttribute("style")
                    console.log(article)
                }
                else{
                    
                    article.style.display="none"
                }
            })      
        })    
    });    
}

function checkedDataPictureTag (photographers) {
    let tag = photographers.tag


}