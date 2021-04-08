let counterBtns = document.querySelectorAll(".counter-btn");
let countHearts = document.querySelectorAll(".counter")
let heartCount = 0;
counterBtns.forEach(button=>{
   button.addEventListener('click',(e)=>{
    heartCount++;
    countHearts.forEach(heart=>{
        heart.innerHTML=heartCount;
    })
  
}); 
})