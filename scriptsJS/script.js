

// retrieved an items in the DOM for photograph card

const photographName = document.querySelector(".name");
const photographLocation = document.querySelector('.photograph_location');
const photograph_description = document.querySelector('.photograph_description-text');
const photographPricePerDay = document.querySelector(".photograph_pricePerDay");
const photographTagItems = document.querySelectorAll('.personal');

console.log(photographLocation, photographName, photographPricePerDay , photographTagItems, photograph_description);




fetch("https://jsonplaceholder.typicode.com/comments")
.then((response)=>response.json())
.then((eltJson)=>{console.log(eltJson)})