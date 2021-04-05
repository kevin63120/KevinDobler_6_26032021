

// retrieved an items in the DOM for photograph card
const containerProfil= document.querySelector(".container_photographs_profils")
const photographName = document.querySelector(".name");
const photographLocation = document.querySelector('.photograph_location');
const photographDescription = document.querySelector(".photograph_description-text");
const photographPricePerDay = document.querySelector(".photograph_pricePerDay");
const photographTagItems = document.querySelectorAll('.personal');
const profilsPicture = document.querySelector('.profil-picture');
const photographDescriptionContainer = document.querySelector('photograph_description')



const createChotographProfil = ()=>{
    containerProfil.appedchild(document.createElement('a')).appendChild(document.createElement('img').classList.add('profile_picture'));
    containerProfil.appendChild(document.createElement('div').classList.add('photograph_description').appendChild(document.createElement('p').classList.add(photograph_description-text).createElement('p').classList.add("photograph_pricePerDay")));

}


fetch("/data-profils/data-photographers.json")
.then((response)=>response.json())
.then((response) =>{
    let photograph = response.name;
    return console.log(photograph) 
} );
    