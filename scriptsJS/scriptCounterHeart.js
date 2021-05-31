   


export function totalHeart () {
    let countHearts = document.querySelectorAll(".counter");
    let totalHeartPrint = document.querySelector(".total-heart-number")
    let result = 0;
  
    const arrayAllLikes = countHearts;
    arrayAllLikes.forEach(like =>{
        let intLike = parseInt(like.innerHTML);
        let curentResult;

        curentResult =+ intLike;  
        result = curentResult + result ;
        totalHeartPrint.innerHTML=(result);  
    })
    
    
 
   
}
export function likeModifier () {
    let countHearts = document.querySelectorAll(".counter");

    countHearts.forEach( heart =>{
        let intHeart = parseInt(heart.innerHTML)
        let curentResult ; 
        if(curentResult > 0 || curentResult != undefined){
            intHeart = curentResult;
        }
        heart.nextElementSibling.addEventListener("click", (e) =>{
            e.stopPropagation()
          heart.innerHTML=(++intHeart);
          curentResult = parseInt(heart.innerHTML);
          totalHeart()
        })
    })


}



