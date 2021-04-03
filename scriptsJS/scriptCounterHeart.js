let counterBtn = document.querySelector(".counter-btn");
let countHeart = document.querySelector(".counter")
let heartCount = 0;
counterBtn.addEventListener('click',()=>{
    heartCount++;
    countHeart.innerHTML=heartCount;
  
});