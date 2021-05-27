   


export function likes(photographer , medias){
    let counterBtns = document.querySelectorAll("img .counter-btn");
    let countHearts = document.querySelectorAll(".counter")
    
    let heartCount = medias.Likes;
    console.log(medias.id)
    
    let testMedia = (photographer , media)=>{
        if(photographer.Id === media.photographerId){
            console.log(media)
        }
    }
    
        counterBtns.forEach(button=>{
            console.log(button)
       button.addEventListener('click',(e)=>{
        
        countHearts.forEach(heart=>{
            heart.innerHTML=heartCount;
        })
    
    }); 
    })

    medias.forEach(media=>{
        testMedia(photographer, media)
    })
}

export function totalHeart () {
    let countHearts = document.querySelectorAll(".counter");
    let totalHeartPrint = document.querySelector(".total-heart-number")
    let result = 0;
  
    const arrayAllLikes = countHearts;
    arrayAllLikes.forEach(like =>{
        let intLike = parseInt(like.innerHTML);
        console.log(intLike);
        let curentResult;
        curentResult =+ intLike;
        
        result = curentResult + result ;
        totalHeartPrint.innerHTML=(result);  
    })
    
    
 
   
}



