


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