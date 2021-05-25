import { likes } from "./scriptCounterHeart";
import './script';
import { retrieveData } from "./script";

const optionSelectionButton = document.querySelector("#header_media_container-selected");
const optionSelectionList = document.querySelector("#list-option")
const options = document.querySelectorAll(".option-filter")
const optionActive = document.querySelector(".option-active")
const optionControler = document.querySelector("#option_active_container")


const dropDown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (optionSelectionList.classList.contains("hidden-options")) {
        optionSelectionList.classList.replace("hidden-options", "visible-options")
        optionControler.setAttribute("aria-expanded", true)
    }

    options.forEach(option => {
        if (option.classList.contains("active")) {
            option.classList.remove("active")
        }
    })
}

optionSelectionButton.addEventListener("click", dropDown)

options.forEach(option => {
    option.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()

        option.classList.add("active")
        optionActive.innerHTML = option.innerHTML;
        optionSelectionList.classList.replace("visible-options", "hidden-options")
        optionControler.setAttribute("aria-expanded", false)

    })

});


export function sortPicture(media) {
    // je récupère toute les image et video , je les place dans un tableau , je verifie les valeur quelle contienent et je les test par rappport a ma demande 
    const photographMedia = media;
    const listBoxPicture = document.querySelectorAll(".media_box");
    const listLikesPictures = document.querySelectorAll(".counter");
    const listTitlesPictures = document.querySelectorAll(".media_item-title");

    

    // fonction de trie des donnée par rapport au nombres de coeur
    function testByCounterLikes () {
        const listLikesPicturesINT = []
        listLikesPictures.forEach(likesPicures => {
            listLikesPicturesINT.push(parseInt(likesPicures.innerHTML));   
        });
        
        const result = listLikesPicturesINT.sort((a,b) => a - b); 
       console.log(result ) ;  
    }

    //function de trie de donné par rapport au titre (ordre alphabetique)
    
    function testByTitle () {
        const listTitlesPicturesValues = [] ;
         listTitlesPictures.forEach(title =>{
             listTitlesPicturesValues.push(title.innerHTML)
         });
      const result = listTitlesPicturesValues.sort();
      
       console.log(result) ;
    }

    //function de trie de donné par rapport au titre (ordre alphabetique)
    function testByDate () {
        const dates = [];
        photographMedia.forEach(media => {
            const date = media.date;
            dates.push(date)
        })

        const result = dates.sort();
        console.log(result)
    }
     
    let box = document.querySelectorAll(".media_box")
    const dates = document.querySelectorAll(".media_item-price")
    const titles = document.querySelectorAll(".media_item-title")
    const containerArticle = document.querySelector(".container_article")
    function modifcontainerArticle () {
        console.log(containerArticle)
    }
    modifcontainerArticle()
    optionControler.addEventListener("click", (e) => {
        options.forEach( option => {
            option.addEventListener("click", () =>{
               if (option.innerHTML == "Popularité"){
                   testByCounterLikes()
                   
               } else if(option.innerHTML == "Titre"){
                    testByTitle()
               }else{
                   testByDate()
               }
            })
        })
    })
}

