import {UserIndexProfils} from "./script";









export async function checkedDataTag(photograph)  {
    const photographers= await photograph;
    const listSelectorTag = document.querySelectorAll(".nav-item");
    const listPhotographerSelectorTag = document.querySelectorAll("photograph_tag-item")
    for (let i = 0; i<photographers.length; i++){
        console.log(photographers[i])
        let photographer = `#${photographers[i]}`
        console.log(photographer)
      
    }
        console.log(photograph )
        listSelectorTag.forEach(selectorTag =>{
            selectorTag.addEventListener("click",(e=>{
                let  value = e.target.innerHTML;
                photographers.map(photographTag =>{                   
                    if(`#${photographTag}` === value){
                        console.log("reussi")
                     console.log( )                     
                    }else{  
                        console.log("perdu")
                         }
                
            })  

      }))
    })

}

