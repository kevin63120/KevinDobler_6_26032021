import { Profil } from "./class/profil";
import './tags-selected';
import { PhotographPage } from "./class/photographerProfilPage";
import { Lightbox } from "./class/photographerProfilPage";
import './pagesJs/HomePage';

import './scriptCounterHeart';
import './modal';
import './lightBox';
import { activeLightbox } from "./lightBox";
import { getURL } from "./lightBox";
import { checkedDataTag } from "./tags-selected";
import './filterPictureOnPage';
import { likeModifier } from "./scriptCounterHeart";
import { totalHeart } from "./scriptCounterHeart";
import { optionSelected } from "./filterPictureOnPage";
import { modal } from "./modal";


// retrieved an items in the DOM for photograph card
const containerArticle = document.querySelector(".article-container");


//view profil function 



//récuperation des données des photographes dans le fichier json et traitement pour les affichées dans le Html

if (window.location.pathname === '/') {
    UserIndexProfils()
} else {
    // /photographers/243
    const photographerId = window.location.pathname.split("/")[2];
    console.log({ photographerId })
    displayPhotographerPage(Number(photographerId))
}


export async function retrieveData() {
    try {
        let response = await fetch("/data-profils/data-photographers.json")
        if (!response.ok) {
            throw new Error("quelque chose a planté ")
        }
        return response.json()
    } catch (e) {
        throw new Error(e)
    }
}

// profil photographe de la page d'acceuil (recupération et affichage)


async function UserIndexProfils() {
    try {
        const data = await retrieveData()
        let photographers = data.photographers;

        photographers.forEach(photographer => {
            new Profil(photographer).createProfilStructure(containerArticle, data);

        })
        checkedDataTag()
    } catch (err) {
        console.log(err)
    }
}


async function displayPhotographerPage(photographerId) {
    try {
        const data = await retrieveData()
        const photographers = data.photographers;
        const media = data.media;

        const profilPage = document.querySelector(".individual_body-close")
        profilPage.classList.remove("individual_body-close");
        profilPage.classList.add('individual_body-active')

        const photographer = photographers.find(p => p.id === photographerId);
        const container = document.querySelector(".section_photograph_profil_container")
        const picturesContainer = document.querySelector(".container_article");
        const photographerMedia = media.filter(m => m.photographerId === photographerId)

        const photographerPage = new PhotographPage(photographer)
        photographerPage.personalPageHeader(container)


        console.log({ photographer })
        //******************************************************* */

        optionSelected()
        function sortByLikes(a, b) {
            if (a.likes < b.likes) {
                return -1;
            } if (a.likes > b.likes) {
                return 1;
            }
            return 0;
        }
        function sortbyTitles(a, b) {
            if (a.title < b.title) {
                return -1;
            } if (a.title > b.title) {
                return 1;
            }
            return 0;
        }
        function sortByDates(a, b) {
            if (a.date < b.date) {
                return -1;
            } if (a.date > b.date) {
                return 1;
            }
            return 0;
        }
        function sortPicture(media, typeSort) {
            const sortedMedia = [...media].sort(typeSort);
            ;
            photographerPage.createContainerPicture(picturesContainer, sortedMedia)



        }
        function selectedSort() {
            let defaultSort = sortPicture(photographerMedia, sortByLikes)

            let sortSelectButton = document.querySelector(".option-active");
            sortSelectButton.addEventListener("click", () => {
                let options = document.querySelectorAll(".option-filter");
                options.forEach(option => {
                    option.addEventListener('click', (e) => {
                        e.preventDefault()
                        e.stopPropagation()

                        let optionSelect = option.innerHTML;

                        if (optionSelect == "Popularité") {
                            sortPicture(photographerMedia, sortByLikes)
                            likeModifier()
                            activeLightbox()
                            new Lightbox().inititalize()
        
        


                        } if (optionSelect == "Date") {
                            sortPicture(photographerMedia, sortByDates)
                            likeModifier()
                            
                            activeLightbox()
                            new Lightbox().inititalize()

                        } if (optionSelect == "Titre") {
                            sortPicture(photographerMedia, sortbyTitles)
                            likeModifier()
                            activeLightbox()
                            new Lightbox().inititalize()

                        }
                    })
                })
            })


            if (sortSelectButton.innerHTML === "Popularité") {
                return defaultSort
            }


        }

        selectedSort()
        /********************************************** */
        modal(photographer)
        /************************************** */
        totalHeart()
        likeModifier()
        /************************************************** */
        new Lightbox().inititalize()
        
        activeLightbox()



    } catch (err) {
        console.log(err)
    }

}














