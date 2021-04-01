// je dois recupéré les éléments sur les photographes qui sont stockées dans le fichier JSON 

// retrieved an items in the DOM for photograph card

const photographName = document.querySelector(".name");
const photographLocation = document.querySelector('.photograph_location');
const photograph_description = document.querySelector('.photograph_description-text');
const photographPricePerDay = document.querySelector(".photograph_pricePerDay");
const photographTagItems = document.querySelectorAll('.personal');

console.log(photographLocation, photographName, photographPricePerDay , photographTagItems, photograph_description);


// i want retrieved the elements of data-photographs.json and take data for create the photograph cart dynamics and create dynamics new webpage per photograph


fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json', {mode : 'no-cors'}).then((response)=>response.json()).then((json)=>console.log(json));
  