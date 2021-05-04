import {UserIndexProfils} from "./script";


export async function checkedDataTag(photograph)  {
    const photographers= await photograph;
    
    const listSelectorTag = document.querySelectorAll(".nav-item");
    const listPhotographerSelectorTag = document.querySelectorAll(".photograph_tag-item")
    const cartPhotographer = document.querySelectorAll(".container_photographs_profils")

    function articleHiden (elem){
       elem.remove() 
        console.log()
    }
    function articleAppear (elem) {
        
    }
    
    listSelectorTag.forEach(selectorTag => {
        selectorTag.addEventListener("click",(e)=>{
            let value = e.target.innerHTML
           
                if(photographers.find(tag => '#'+tag === value)){
                console.log("gagné" + " "+ value)
                    
                   
                      
                }else{
                    const articles = document.querySelectorAll(".container_photographs_profils")
                      articles.forEach(article =>{article.style.display="none"})             
                }
            })
           
        
        
    });
        

}

